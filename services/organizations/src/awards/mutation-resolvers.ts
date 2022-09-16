import {
  MutationResolvers,
  MutationAwardCreateArgs
  , MutationAwardUpdateArgs
} from '../../../../generated/graphql'
import { createArgs, updateArgs } from '../../../utils/check-args'
import { Prisma } from '../../../../generated/organization-db'
import { db } from '../db'

export const awardCreate: MutationResolvers['awardCreate'] = async (
  _,
  args: MutationAwardCreateArgs
) => {
  const { input } = createArgs(args)

  const now = new Date()
  const data: Prisma.AwardCreateInput = {
    created_at: now,
    updated_at: now,
    ...input
  }

  try {
    return await db.client.award.create({ data })
  } catch (error) {
    throw new Error(`Unable to save award: ${String(error)}`)
  }
}

export const awardUpdate: MutationResolvers['awardUpdate'] = async (
  _,
  args: MutationAwardUpdateArgs
) => {
  const { id, updates } = updateArgs(args)

  const data: Prisma.AwardUpdateInput = {
    updated_at: new Date(),
    ...updates
  }

  try {
    return await db.client.award.update({
      where: {
        id: parseInt(id)
      },
      data
    })
  } catch (error) {
    throw new Error(`Unable to update award: ${String(error)}`)
  }
}
