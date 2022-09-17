import { PrismaClient } from "../generated/activity-db";

const client = new PrismaClient();

export const db = {
  client,
};
