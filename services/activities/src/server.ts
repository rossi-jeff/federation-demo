import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServer } from "apollo-server";
import { DocumentNode } from "graphql";
import { buildFederatedSchema } from "@apollo/federation";

import { resolvers } from "./resolvers";

const startUp = async () => {
  const typeDefs = (await loadFiles(
    "../src/**/*.schema.graphql"
  )) as DocumentNode[];

  const schema = buildFederatedSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4001 })
    .then(({url}) => {
        console.log(`Activity service started at ${url}graphql`)
    })
    .catch((e) => {
        console.error(e.message)
    })
};

startUp();
