import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Organization: Resolvers["Organization"] = {
  People: async (parent) => {
    return await db.client.person.findMany({
      where: {
        registered_with_organization_id: parseInt(parent.id),
      },
    });
  },
};
