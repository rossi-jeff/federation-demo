import { Resolvers } from '../../../../generated/graphql'
import { AwardType } from './types'

export const getName = (parent: AwardType): string | null => {
  return parent.name ?? null
}
export const getPosition = (parent: AwardType): number => {
  return parent.position ?? 0
}
export const getOrganizationId = (parent: AwardType): number => {
  return parent.organization_id ?? 0
}
export const getActive = (parent: AwardType): boolean => {
  return parent.active ?? false
}
export const getCreatedAt = (parent: AwardType): string | null => {
  return parent.created_at != null ? parent.created_at.toString() : null
}
export const getUpdatedAt = (parent: AwardType): string | null => {
  return parent.updated_at != null ? parent.updated_at.toString() : null
}

export const Award: Resolvers['Award'] = {
  name: getName,
  position: getPosition,
  organization_id: getOrganizationId,
  active: getActive,
  created_at: getCreatedAt,
  updated_at: getUpdatedAt
}
