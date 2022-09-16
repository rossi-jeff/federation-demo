import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { logger } from "../utils/logger";

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
      logger.info(`gateway started at ${url}`);
    })
    .catch((e) => {
      logger.error(e.message);
    });
};

startUp()
  .then(() => logger.info("Gateway is running"))
  .catch(() => logger.error("Error starting gateway"));
