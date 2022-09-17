import { Resolvers } from "../generated/graphql";
import { Organization } from "./organizations/field-resolvers";
import { Person } from "./people/field-resolvers";
import { people, person } from "./people/query-resolvers";

export const resolvers: Resolvers = {
  Query: {
    people,
    person,
  },
  Organization,
  Person,
};
