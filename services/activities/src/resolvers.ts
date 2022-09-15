import { Resolvers } from '../../../generated/graphql'
import { Activity } from './activities/field-resolvers'
import {
  activityCreate,
  activityUpdate
} from './activities/mutation-resolvers'
import { activities, activity } from './activities/query-resolvers'
// import { Organization } from "./organizations/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    activities,
    activity
  },
  Mutation: {
    activityCreate,
    activityUpdate
  },
  Activity
}
