import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServer } from "apollo-server";
import { DocumentNode } from "graphql";
import { buildSubgraphSchema } from "@apollo/federation";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";

import { resolvers } from "./resolvers";

const startUp = async (): Promise<void> => {
  const typeDefs = (await loadFiles("services/activities/src/**/*.schema.graphql")) as DocumentNode[];

  const schema = buildSubgraphSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginInlineTrace(),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  server
    .listen({ port: 4001 })
    .then(({ url }) => {
      console.log(`Activity service started at ${url}`);
    })
    .catch((e) => {
      console.error(e.message);
    });
};

startUp()
  .then(() => console.log("Activity service is running"))
  .catch(() => console.log("Error starting Activity service"));
