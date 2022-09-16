import {
  MutationResolvers,
  MutationOrganizationCreateArgs,
  MutationOrganizationUpdateArgs,
} from "../../../../generated/graphql";
import { createArgs, updateArgs } from "../../../utils/check-args";
import { Prisma } from "../../../../generated/organization-db";
import { db } from "../db";

export const organizationCreate: MutationResolvers["organizationCreate"] =
  async (_, args: MutationOrganizationCreateArgs) => {
    const { input } = createArgs(args);

    const now = new Date();
    const data: Prisma.OrganizationCreateInput = {
      created_at: now,
      updated_at: now,
      ...input,
    };

    try {
      return await db.client.organization.create({ data });
    } catch (error) {
      throw new Error(`Unable to save organization: ${String(error)}`);
    }
  };

export const organizationUpdate: MutationResolvers["organizationUpdate"] =
  async (_, args: MutationOrganizationUpdateArgs) => {
    const { id, updates } = updateArgs(args);

    const data: Prisma.OrganizationUpdateInput = {
      updated_at: new Date(),
      ...updates,
    };

    try {
      return await db.client.organization.update({
        where: {
          id: parseInt(id),
        },
        data,
      });
    } catch (error) {
      throw new Error(`Unable to update organization: ${String(error)}`);
    }
  };
