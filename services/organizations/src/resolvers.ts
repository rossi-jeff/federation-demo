import { Resolvers } from "../generated/graphql";
import { Award } from "./awards/field-resolvers";
import { awardCreate, awardUpdate } from "./awards/mutation-resolvers";
import { award, awards } from "./awards/query-resolvers";
import { organization, organizations } from "./organizations/query-resolvers";
import {
  organizationCreate,
  organizationUpdate,
} from "./organizations/mutation-resolvers";
import { Organization } from "./organizations/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    awards,
    award,
    organizations,
    organization,
  },
  Mutation: {
    awardCreate,
    awardUpdate,
    organizationCreate,
    organizationUpdate,
  },
  Award,
  Organization,
};
