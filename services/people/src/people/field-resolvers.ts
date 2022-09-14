import { Resolvers } from "../../../../generated/graphql";
import { db } from "../db";

export const Person: Resolvers["Person"] = {
  __resolveReference: async (obj) => {
    return await db.client.person.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  birth_date: (parent) => {
    return parent.birth_date ? parent.birth_date.toString() : null;
  },
  high_school_graduation_year: (parent) => {
    return parent.high_school_graduation_year
      ? parseFloat(parent.high_school_graduation_year.toString())
      : null;
  },
  physical_date: (parent) => {
    return parent.physical_date ? parent.physical_date.toString() : null;
  },
  first_enrollment_date: (parent) => {
    return parent.first_enrollment_date
      ? parent.first_enrollment_date.toString()
      : null;
  },
  concussion_test_date: (parent) => {
    return parent.concussion_test_date
      ? parent.concussion_test_date.toString()
      : null;
  },
  created_at: (parent) => {
    return parent.created_at ? parent.created_at.toString() : null;
  },
  updated_at: (parent) => {
    return parent.updated_at ? parent.updated_at.toString() : null;
  },
};
