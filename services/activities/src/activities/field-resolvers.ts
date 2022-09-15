import { Resolvers } from '../../../../generated/graphql'
import { db } from '../db'
import { ActivityType } from './types'

export const getName = (parent: ActivityType): string => {
  return parent.name ?? null
}
export const getRegisterable = (parent: ActivityType): boolean => {
  return parent.registerable ?? false
}
export const getOrganizationId = (parent: ActivityType): number | null => {
  return parent.organization_id ?? null
}
export const getCreatedAt = (parent: ActivityType): string | null => {
  return parent.created_at != null ? parent.created_at.toString() : null
}
export const getUpdatedAt = (parent: ActivityType): string | null => {
  return parent.updated_at != null ? parent.updated_at.toString() : null
}
export const getSteps = (parent: ActivityType): number => {
  return parent.steps ?? 0
}
export const getFee = (parent: ActivityType): number => {
  return parent.fee ?? 0
}
export const getEmailFooter = (parent: ActivityType): string | null => {
  return parent.email_footer ?? null
}
export const getTermsAndConditions = (parent: ActivityType): string | null => {
  return parent.terms_and_conditions ?? null
}
export const getKind = (parent: ActivityType): string | null => {
  return parent.kind ?? null
}
export const getLeadInMessage = (parent: ActivityType): string | null => {
  return parent.lead_in_message ?? null
}
export const getNoCut = (parent: ActivityType): boolean => {
  return parent.no_cut ?? false
}
export const getCurrentSeason = (parent: ActivityType): string | null => {
  return parent.current_season ?? null
}
export const getDiscountedFee = (parent: ActivityType): number => {
  return parent.discounted_fee ?? 0
}
export const getSpiritWearLink = (parent: ActivityType): string | null => {
  return parent.spirit_wear_link ?? null
}
export const getAthleticSeason = (parent: ActivityType): string | null => {
  return parent.athletic_season ?? null
}
export const getRosterwebserviceAccess = (parent: ActivityType): boolean => {
  return parent.rosterwebservice_access ?? null
}
export const getArchived = (parent: ActivityType): boolean => {
  return parent.archived ?? false
}

export const Activity: Resolvers['Activity'] = {
  __resolveReference: async (obj) => {
    return await db.client.activity.findFirst({
      where: {
        id: obj.id
      }
    })
  },
  name: getName,
  registerable: getRegisterable,
  organization_id: getOrganizationId,
  created_at: getCreatedAt,
  updated_at: getUpdatedAt,
  steps: getSteps,
  fee: getFee,
  email_footer: getEmailFooter,
  terms_and_conditions: getTermsAndConditions,
  kind: getKind,
  lead_in_message: getLeadInMessage,
  no_cut: getNoCut,
  current_season: getCurrentSeason,
  discounted_fee: getDiscountedFee,
  spirit_wear_link: getSpiritWearLink,
  athletic_season: getAthleticSeason,
  rosterwebservice_access: getRosterwebserviceAccess,
  archived: getArchived
}
