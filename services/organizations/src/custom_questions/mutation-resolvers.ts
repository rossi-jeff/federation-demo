import {
  MutationResolvers,
  MutationCustomQuestionCreateArgs,
  MutationCustomQuestionUpdateArgs,
} from "../../../../generated/graphql";
import { createArgs, updateArgs } from "../../../utils/check-args";
import { Prisma } from "../../../../generated/organization-db";
import { db } from "../db";

export const customQuestionCreate: MutationResolvers["customQuestionCreate"] =
  async (_, args: MutationCustomQuestionCreateArgs) => {
    const { input } = createArgs(args);

    const now = new Date();
    const data: Prisma.CustomQuestionCreateInput = {
      created_at: now,
      updated_at: now,
      ...input,
    };

    try {
      return await db.client.customQuestion.create({ data });
    } catch (error) {
      throw new Error(`Unable to save custom question: ${String(error)}`);
    }
  };

export const customQuestionUpdate: MutationResolvers["customQuestionUpdate"] =
  async (_, args: MutationCustomQuestionUpdateArgs) => {
    const { id, updates } = updateArgs(args);

    const data: Prisma.CustomQuestionUpdateInput = {
      updated_at: new Date(),
      ...updates,
    };

    try {
      return await db.client.customQuestion.update({
        where: {
          id: parseInt(id),
        },
        data,
      });
    } catch (error) {
      throw new Error(`Unable to update custom question: ${String(error)}`);
    }
  };
