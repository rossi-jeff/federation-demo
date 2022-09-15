import { Resolvers } from "../../../../generated/graphql";
import { db } from "../db";
import { ActivityType } from "./types";

export const get_name = (parent: ActivityType) => {
  return parent.name ?? null;
};
export const get_registerable = (parent: ActivityType) => {
  return parent.registerable ?? false;
};
export const get_organization_id = (parent: ActivityType) => {
  return parent.organization_id ?? null;
};
export const get_created_at = (parent: ActivityType) => {
  return parent.created_at != null ? parent.created_at.toString() : null;
};
export const get_updated_at = (parent: ActivityType) => {
  return parent.updated_at != null ? parent.updated_at.toString() : null;
};
export const get_steps = (parent: ActivityType) => {
  return parent.steps ?? 0;
};
export const get_fee = (parent: ActivityType) => {
  return parent.fee ?? 0;
};
export const get_email_footer = (parent: ActivityType) => {
  return parent.email_footer ?? null;
};
export const get_terms_and_conditions = (parent: ActivityType) => {
  return parent.terms_and_conditions ?? null;
};
export const get_kind = (parent: ActivityType) => {
  return parent.kind ?? null;
};
export const get_lead_in_message = (parent: ActivityType) => {
  return parent.lead_in_message ?? null;
};
export const get_no_cut = (parent: ActivityType) => {
  return parent.no_cut ?? false;
};
export const get_current_season = (parent: ActivityType) => {
  return parent.current_season ?? null;
};
export const get_discounted_fee = (parent: ActivityType) => {
  return parent.discounted_fee ?? 0;
};
export const get_spirit_wear_link = (parent: ActivityType) => {
  return parent.spirit_wear_link ?? null;
};
export const get_athletic_season = (parent: ActivityType) => {
  return parent.athletic_season ?? null;
};
export const get_rosterwebservice_access = (parent: ActivityType) => {
  return parent.rosterwebservice_access ?? null;
};
export const get_archived = (parent: ActivityType) => {
  return parent.archived ?? false;
};

export const Activity: Resolvers["Activity"] = {
  __resolveReference: async (obj) => {
    return await db.client.activity.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  name: get_name,
  registerable: get_registerable,
  organization_id: get_organization_id,
  created_at: get_created_at,
  updated_at: get_updated_at,
  steps: get_steps,
  fee: get_fee,
  email_footer: get_email_footer,
  terms_and_conditions: get_terms_and_conditions,
  kind: get_kind,
  lead_in_message: get_lead_in_message,
  no_cut: get_no_cut,
  current_season: get_current_season,
  discounted_fee: get_discounted_fee,
  spirit_wear_link: get_spirit_wear_link,
  athletic_season: get_athletic_season,
  rosterwebservice_access: get_rosterwebservice_access,
  archived: get_archived,
};
