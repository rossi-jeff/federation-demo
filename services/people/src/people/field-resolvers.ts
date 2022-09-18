import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { PersonType } from "./types";

export const getBirthDate = (parent: PersonType) => {
  return parent.birth_date != null ? parent.birth_date.toString() : null;
};
export const getHighSchoolGraduationYear = (parent: PersonType) => {
  return parent.high_school_graduation_year != null
    ? parseFloat(parent.high_school_graduation_year.toString())
    : null;
};
export const getPhysicalDate = (parent: PersonType) => {
  return parent.physical_date != null ? parent.physical_date.toString() : null;
};
export const getFirstEnrollmentDate = (parent: PersonType) => {
  return parent.first_enrollment_date != null
    ? parent.first_enrollment_date.toString()
    : null;
};
export const getConcussionTestDate = (parent: PersonType) => {
  return parent.concussion_test_date != null
    ? parent.concussion_test_date.toString()
    : null;
};
export const getCreatedAt = (parent: PersonType) => {
  return parent.created_at != null ? parent.created_at.toString() : null;
};
export const getUpdatedAt = (parent: PersonType) => {
  return parent.updated_at != null ? parent.updated_at.toString() : null;
};

export const Person: Resolvers["Person"] = {
  __resolveReference: async (obj) => {
    return await db.client.person.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  birth_date: getBirthDate,
  high_school_graduation_year: getHighSchoolGraduationYear,
  physical_date: getPhysicalDate,
  first_enrollment_date: getFirstEnrollmentDate,
  concussion_test_date: getConcussionTestDate,
  created_at: getCreatedAt,
  updated_at: getUpdatedAt,
  Organization: (ref) => {
    if (ref.registered_with_organization_id === null) return null;
    return {
      __typename: "Organization",
      id: ref.registered_with_organization_id?.toString(),
    };
  },
};
