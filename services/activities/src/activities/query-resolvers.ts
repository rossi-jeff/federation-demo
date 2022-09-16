import {
  QueryResolvers,
  QueryActivityArgs,
} from "../../../../generated/graphql";
import { db } from "../db";
import { idArgs } from "../../../utils/check-args";
import { Activity } from "../../../../generated/activity-db";

export const DB = db; // export for stubbing

export const getActivities = async (): Promise<Activity[]> => {
  return await DB.client.activity.findMany();
};

export const activities: QueryResolvers["activities"] = async () => {
  return await getActivities();
};

export const getActivity = async (
  args: QueryActivityArgs
): Promise<Activity | null> => {
  const { id } = idArgs(args);
  return await DB.client.activity.findFirst({
    where: {
      id: parseInt(id),
    },
  });
};

export const activity: QueryResolvers["activity"] = async (
  _,
  args: QueryActivityArgs
) => {
  return await getActivity(args);
};
