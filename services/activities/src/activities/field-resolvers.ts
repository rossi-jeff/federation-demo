import { Resolvers } from '../../../../generated/graphql'
import { db } from '../db'

export const Activity: Resolvers['Activity'] = {
  __resolveReference: async (obj) => {
    return await db.client.activity.findFirst({
      where: {
        id: obj.id
      }
    })
  },
  name: (parent) => {
    return parent.name ?? null
  },
  registerable: (parent) => {
    return parent.registerable ?? false
  },
  created_at: (parent) => {
    return parent.created_at != null ? parent.created_at.toString() : null
  },
  updated_at: (parent) => {
    return parent.updated_at != null ? parent.updated_at.toString() : null
  },
  steps: (parent) => {
    return parent.steps ?? 0
  },
  fee: (parent) => {
    return parent.fee ?? 0
  },
  email_footer: (parent) => {
    return parent.email_footer ?? null
  },
  terms_and_conditions: (parent) => {
    return parent.terms_and_conditions ?? null
  },
  kind: (parent) => {
    return parent.kind ?? null
  },
  lead_in_message: (parent) => {
    return parent.lead_in_message ?? null
  },
  no_cut: (parent) => {
    return parent.no_cut ?? false
  },
  current_season: (parent) => {
    return parent.current_season ?? null
  },
  discounted_fee: (parent) => {
    return parent.discounted_fee ?? 0
  },
  spirit_wear_link: (parent) => {
    return parent.spirit_wear_link ?? null
  },
  athletic_season: (parent) => {
    return parent.athletic_season ?? null
  },
  rosterwebservice_access: (parent) => {
    return parent.rosterwebservice_access ?? null
  },
  archived: (parent) => {
    return parent.archived ?? false
  }
}
