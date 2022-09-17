import { PrismaClient } from "../generated/person-db";

const client = new PrismaClient();

export const db = {
  client,
};
