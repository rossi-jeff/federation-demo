import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "activities", url: "http://localhost:4001/graphql" },
      { name: "organizations", url: "http://localhost:4002/graphql" }
    ],
  }),
  __exposeQueryPlanExperimental: true,
});

const startUp = async () => {
  const server = new ApolloServer({ gateway });

  server
    .listen()
    .then(({ url }) => {
      console.log(`gateway started at ${url}`);
    })
    .catch((e) => {
      console.error(e.message);
    });
};

startUp();
