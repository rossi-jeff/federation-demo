import { Resolvers } from '../../../generated/graphql'
import { Activity } from './activities/field-resolvers'
import { activities, activity } from './activities/query-resolvers'
import { Organization } from './organizations/field-resolvers'

export const resolvers: Resolvers = {
  Query: {
    activities,
    activity
  },
  Activity,
  Organization
}
