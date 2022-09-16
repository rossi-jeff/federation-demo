import { Resolvers } from "../../../../generated/graphql";
import { db } from "../db";
import { OrganizationType } from "./types";

export const getCreatedAt = (parent: OrganizationType): string | null => {
  return parent.created_at != null ? parent.created_at.toString() : null;
};
export const getUpdatedAt = (parent: OrganizationType): string | null => {
  return parent.updated_at != null ? parent.updated_at.toString() : null;
};

export const Organization: Resolvers["Organization"] = {
  __resolveReference: async (obj) => {
    return await db.client.organization.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  created_at: getCreatedAt,
  updated_at: getUpdatedAt,
  Awards: async (parent) => {
    return await db.client.award.findMany({
      where: {
        organization_id: parent.id,
      },
    });
  },
};
