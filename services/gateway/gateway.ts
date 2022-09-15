import { ApolloServer } from 'apollo-server'
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway'
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core'

const services = [
  { name: 'activities', url: 'http://localhost:4001' },
  { name: 'organizations', url: 'http://localhost:4002' },
  { name: 'people', url: 'http://localhost:4003' }
]

const supergraphSdl = new IntrospectAndCompose({
  subgraphs: services,
  pollIntervalInMs: 10000,
  subgraphHealthCheck: true
})

const gateway = new ApolloGateway({
  supergraphSdl,
  __exposeQueryPlanExperimental: false
})

const startUp = async (): Promise<void> => {
  const server = new ApolloServer({
    gateway,
    debug: true,
    plugins: [
      ApolloServerPluginInlineTrace(),
      ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ]
  })

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
