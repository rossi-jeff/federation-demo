import { Resolvers } from '../../../generated/graphql'
import { Organization } from './organizations/field-resolvers'
import {
  organizationCreate,
  organizationUpdate
} from './organizations/mutation-resolvers'
import { organization, organizations } from './organizations/query-resolvers'

export const resolvers: Resolvers = {
  Query: {
    organizations,
    organization,
  },
  Mutation: {
    organizationCreate,
    organizationUpdate
  },
  Organization,
};
