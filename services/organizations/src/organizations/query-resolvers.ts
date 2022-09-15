import {
  QueryOrganizationArgs,
  QueryResolvers
} from '../../../../generated/graphql'
import { db } from '../db'

export const organizations: QueryResolvers['organizations'] = async () => {
  return await db.client.organization.findMany()
}

export const organization: QueryResolvers['organization'] = async (
  _,
  args: QueryOrganizationArgs
) => {
  const { id } = args
  return await db.client.organization.findFirst({
    where: {
      id: parseInt(id)
    }
  })
}
