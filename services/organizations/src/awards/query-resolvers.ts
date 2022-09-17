import { db } from "../db";
import { QueryResolvers, QueryAwardArgs } from "../../generated/graphql";
import { idArgs } from "../../../utils/check-args";

export const awards: QueryResolvers["awards"] = async () => {
  return await db.client.award.findMany();
};

export const award: QueryResolvers["award"] = async (
  _,
  args: QueryAwardArgs
) => {
  const { id } = idArgs(args);
  return await db.client.award.findFirst({
    where: {
      id: parseInt(id),
    },
  });
};
