import { Resolvers } from '../../../generated/graphql'
import { Award } from './awards/field-resolvers'
import { awardCreate, awardUpdate } from './awards/mutation-resolvers'
import { award, awards } from './awards/query-resolvers'
import { Organization } from './organizations/field-resolvers'
import { organization, organizations } from './organizations/query-resolvers'

export const resolvers: Resolvers = {
  Query: {
    awards,
    award,
    organizations,
    organization,
  },
  Mutation: {
    awardCreate,
    awardUpdate
  },
  Award,
  Organization,
};
