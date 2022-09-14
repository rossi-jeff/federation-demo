import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "organizations", url: "http://localhost:4002" },
      { name: "people", url: "http://localhost:4003" },
      { name: "activities", url: "http://localhost:4001" },
    ],
  }),
  __exposeQueryPlanExperimental: true,
});

const startUp = async (): Promise<void> => {
  const server = new ApolloServer({
    gateway,
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
