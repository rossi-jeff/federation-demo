import { PrismaClient } from "../../../generated/organization-db";

const client = new PrismaClient();

export const db = {
  client,
};
