import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServer } from "apollo-server";
import { DocumentNode } from "graphql";
import { buildSubgraphSchema } from "@apollo/federation";

import { resolvers } from "./resolvers";

const startUp = async () => {
  const typeDefs = (await loadFiles("./**/*.schema.graphql")) as DocumentNode[];

  const schema = buildSubgraphSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({ schema });

  server
    .listen({ port: 4003 })
    .then(({ url }) => {
      console.log(`People service started at ${url}`);
    })
    .catch((e) => {
      console.error(e.message);
    });
};

startUp();