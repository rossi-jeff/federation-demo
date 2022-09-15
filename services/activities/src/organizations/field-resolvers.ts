import { Resolvers } from '../../../../generated/graphql'
import { db } from '../db'

export const Organization: Resolvers['Organization'] = {
  Activities: async (parent) => {
    return await db.client.activity.findMany({
      where: {
        organization_id: parent.id
      }
    })
  }
}
