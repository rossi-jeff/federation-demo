import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const gateway = new ApolloGateway({
  serviceList: [{ name: "activities", url: "http://localhost:4001/graphql" }],
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
