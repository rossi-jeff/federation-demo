import { Resolvers } from "../../../../generated/graphql";
import { db } from "../db";

export const Organization: Resolvers["Organization"] = {
  __resolveReference: async (obj) => {
    return await db.client.organization.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  created_at: (parent) => {
    return parent.created_at ? parent.created_at.toString() : null
  },
  updated_at: (parent) => {
    return parent.updated_at ? parent.updated_at.toString() : null
  }
};