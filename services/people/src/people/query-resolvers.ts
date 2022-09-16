import { QueryPersonArgs, QueryResolvers } from "../../../../generated/graphql";
import { db } from "../db";

export const people: QueryResolvers["people"] = async () => {
  return await db.client.person.findMany();
};

export const person: QueryResolvers["person"] = async (
  _,
  args: QueryPersonArgs
) => {
  const { id } = args;
  return await db.client.person.findFirst({
    where: {
      id: parseInt(id),
    },
  });
};
