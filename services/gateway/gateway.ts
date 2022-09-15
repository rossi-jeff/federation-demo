import { ApolloServer } from "apollo-server";
import {
  ApolloGateway,
  GraphQLDataSourceProcessOptions,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
} from "@apollo/gateway";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import {
  GatewayGraphQLRequestContext,
  GatewayGraphQLResponse,
} from "@apollo/server-gateway-interface";

class DS extends RemoteGraphQLDataSource {
  async willSendRequest(
    options: GraphQLDataSourceProcessOptions<Record<string, any>>
  ): Promise<void> {
    const { request, context } = options;
    console.log("willSendRequest", { request, context });
  }

  didReceiveResponse(
    requestContext: Required<
      Pick<
        GatewayGraphQLRequestContext<Record<string, any>>,
        "request" | "response" | "context"
      >
    >
  ): GatewayGraphQLResponse | Promise<GatewayGraphQLResponse> {
    const { response, context } = requestContext;
    console.log("didReceiveResponse", { response, context });
    return response;
  }
}

const services = [
  { name: "activities", url: "http://localhost:4001" },
  { name: "organizations", url: "http://localhost:4002" },
  { name: "people", url: "http://localhost:4003" },
];

const supergraphSdl = new IntrospectAndCompose({
  subgraphs: services,
  pollIntervalInMs: 10000,
  subgraphHealthCheck: true,
});

const gateway = new ApolloGateway({
  supergraphSdl,
  __exposeQueryPlanExperimental: false,
});

const startUp = async (): Promise<void> => {
  const server = new ApolloServer({
    gateway,
    debug: true,
    plugins: [
      ApolloServerPluginInlineTrace(),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  server
    .listen()
    .then(({ url }) => {
      console.log(`gateway started at ${url}`);
    })
    .catch((e) => {
      console.error(e.message);
    });
};

startUp()
  .then(() => console.log("Gateway is running"))
  .catch(() => console.log("Error starting gateway"));
