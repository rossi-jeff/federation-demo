import { QueryResolvers, QueryActivityArgs } from '../../../../generated/graphql';
import { db } from "../db";

export const activities: QueryResolvers['activities'] = async () => {
  return await db.client.activity.findMany();
};

export const activity: QueryResolvers['activity'] = async (_, args: QueryActivityArgs) => {
  const { id } = args;
  return await db.client.activity.findFirst({
    where: {
      id: parseInt(id),
    },
  });
};
