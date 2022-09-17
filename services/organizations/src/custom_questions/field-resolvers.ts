import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const CustomQuestion: Resolvers["CustomQuestion"] = {
  organization_id: (parent) => {
    return parent.organization_id ?? null;
  },
  state: (parent) => {
    return parent.state ?? null;
  },
  question: (parent) => {
    return parent.question ?? null;
  },
  question_type: (parent) => {
    return parent.question_type ?? null;
  },
  question_options: (parent) => {
    return parent.question_options ?? null;
  },
  active: (parent) => {
    return parent.active ?? false;
  },
  required: (parent) => {
    return parent.required ?? false;
  },
  dependent_on: (parent) => {
    return parent.dependent_on ?? 0;
  },
  dependent_answer: (parent) => {
    return parent.dependent_answer ?? null;
  },
  sort_order: (parent) => {
    return parent.sort_order ?? 0;
  },
  activity_type: (parent) => {
    return parent.activity_type ?? null;
  },
  created_at: (parent) => {
    return parent.created_at != null ? parent.created_at.toString() : null;
  },
  updated_at: (parent) => {
    return parent.updated_at != null ? parent.updated_at.toString() : null;
  },
  Organization: async (parent) => {
    if (parent.organization_id === null) return null;
    return await db.client.organization.findFirst({
      where: {
        id: parent.organization_id,
      },
    });
  },
};
