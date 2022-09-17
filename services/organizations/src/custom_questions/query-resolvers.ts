import {
  QueryCustomQuestionArgs,
  QueryResolvers,
} from "../../generated/graphql";
import { idArgs } from "../../../utils/check-args";
import { db } from "../db";

export const customQuestions: QueryResolvers["customQuestions"] = async () => {
  return await db.client.customQuestion.findMany();
};

export const customQuestion: QueryResolvers["customQuestion"] = async (
  _,
  args: QueryCustomQuestionArgs
) => {
  const { id } = idArgs(args);
  return await db.client.customQuestion.findFirst({
    where: {
      id: parseInt(id),
    },
  });
};
