import { ApolloServer } from 'apollo-server'
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway'

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'activities', url: 'http://localhost:4001/graphql' },
      { name: 'organizations', url: 'http://localhost:4002/graphql' },
      { name: 'people', url: 'http://localhost:4003/graphql' }
    ]
  }),
  __exposeQueryPlanExperimental: true
})

const startUp = async (): Promise<void> => {
  const server = new ApolloServer({ gateway })

  server
    .listen()
    .then(({ url }) => {
      console.log(`gateway started at ${url}`)
    })
    .catch((e) => {
      console.error(e.message)
    })
}

startUp()
  .then(() => console.log('Gateway is running'))
  .catch(() => console.log('Error starting gateway'))
