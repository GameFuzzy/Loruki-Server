import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsageStatsArgs } from "./args/AggregateUsageStatsArgs";
import { UsageStats } from "../../../models/UsageStats";
import { AggregateUsageStats } from "../../outputs/AggregateUsageStats";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsageStats)
export class AggregateUsageStatsResolver {
  @TypeGraphQL.Query(_returns => AggregateUsageStats, {
    nullable: false
  })
  async aggregateUsageStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUsageStatsArgs): Promise<AggregateUsageStats> {
    return getPrismaFromContext(ctx).usageStats.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
