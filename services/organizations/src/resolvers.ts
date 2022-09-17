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
import {
  customQuestion,
  customQuestions,
} from "./custom_questions/query-resolvers";
import {
  customQuestionCreate,
  customQuestionUpdate,
} from "./custom_questions/mutation-resolvers";
import { CustomQuestion } from "./custom_questions/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    awards,
    award,
    customQuestions,
    customQuestion,
    organizations,
    organization,
  },
  Mutation: {
    awardCreate,
    awardUpdate,
    customQuestionCreate,
    customQuestionUpdate,
    organizationCreate,
    organizationUpdate,
  },
  Award,
  CustomQuestion,
  Organization,
};
