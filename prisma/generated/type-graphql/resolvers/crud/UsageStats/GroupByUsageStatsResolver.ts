import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUsageStatsArgs } from "./args/GroupByUsageStatsArgs";
import { UsageStats } from "../../../models/UsageStats";
import { UsageStatsGroupBy } from "../../outputs/UsageStatsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsageStats)
export class GroupByUsageStatsResolver {
  @TypeGraphQL.Query(_returns => [UsageStatsGroupBy], {
    nullable: false
  })
  async groupByUsageStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUsageStatsArgs): Promise<UsageStatsGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usageStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
