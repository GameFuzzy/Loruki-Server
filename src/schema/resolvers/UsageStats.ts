import { UsageStats } from '../../../prisma/generated/type-graphql'
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver
} from 'type-graphql'
import { Context } from '../../context'

@InputType()
class UsageStatsInput {
  @Field()
  deployments: number

  @Field()
  published: number

  @Field()
  projects: number
}

@Resolver(UsageStats)
export class UsageStatsResolver {
  @Query(() => [UsageStats], { nullable: true })
  async allUsageStats(@Ctx() { prisma }: Context) {
    return await prisma.usageStats.findMany()
  }

  @Query(() => UsageStats, { nullable: true })
  async lastUsageStats(@Ctx() { prisma }: Context) {
    return (await prisma.usageStats.findMany()).pop()
  }

  @Mutation(() => UsageStats)
  async createUsageStats(
    @Ctx() { prisma }: Context,
    @Arg('options') data: UsageStatsInput
  ) {
    return await prisma.usageStats.create({ data })
  }
}
