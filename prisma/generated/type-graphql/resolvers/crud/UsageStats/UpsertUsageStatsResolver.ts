import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertUsageStatsArgs } from "./args/UpsertUsageStatsArgs";
import { UsageStats } from "../../../models/UsageStats";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsageStats)
export class UpsertUsageStatsResolver {
  @TypeGraphQL.Mutation(_returns => UsageStats, {
    nullable: false
  })
  async upsertUsageStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertUsageStatsArgs): Promise<UsageStats> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usageStats.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
