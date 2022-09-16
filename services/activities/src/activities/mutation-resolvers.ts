import {
  MutationActivityCreateArgs,
  MutationActivityUpdateArgs,
  MutationResolvers,
} from "../../generated/graphql";
import { db } from "../db";
import { Prisma } from "../../../../generated/activity-db";
import { createArgs, updateArgs } from "../../../utils/check-args";

export const activityCreate: MutationResolvers["activityCreate"] = async (
  _,
  args: MutationActivityCreateArgs
) => {
  const { input } = createArgs(args);

  const now = new Date();
  const data: Prisma.ActivityCreateInput = {
    name: "",
    created_at: now,
    updated_at: now,
    ...(typeof input === "object" ? input : {}),
  };

  try {
    return await db.client.activity.create({ data });
  } catch (error) {
    throw new Error(`Unable to save activity: ${String(error)}`);
  }
};

export const activityUpdate: MutationResolvers["activityUpdate"] = async (
  _,
  args: MutationActivityUpdateArgs
) => {
  const { id, updates } = updateArgs(args);

  const now = new Date();
  const data: Prisma.ActivityUpdateInput = {
    updated_at: now,
    ...updates,
  };

  try {
    return await db.client.activity.update({
      where: {
        id: parseInt(id),
      },
      data,
    });
  } catch (error) {
    throw new Error(`Unable to update activity: ${String(error)}`);
  }
};
