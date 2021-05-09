import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUsageStatsArgs } from "./args/FindUniqueUsageStatsArgs";
import { UsageStats } from "../../../models/UsageStats";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsageStats)
export class FindUniqueUsageStatsResolver {
  @TypeGraphQL.Query(_returns => UsageStats, {
    nullable: true
  })
  async findUniqueUsageStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUsageStatsArgs): Promise<UsageStats | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usageStats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
