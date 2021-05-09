import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsageStatsCreateInput } from "../../../inputs/UsageStatsCreateInput";
import { UsageStatsUpdateInput } from "../../../inputs/UsageStatsUpdateInput";
import { UsageStatsWhereUniqueInput } from "../../../inputs/UsageStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUsageStatsArgs {
  @TypeGraphQL.Field(_type => UsageStatsWhereUniqueInput, {
    nullable: false
  })
  where!: UsageStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsageStatsCreateInput, {
    nullable: false
  })
  create!: UsageStatsCreateInput;

  @TypeGraphQL.Field(_type => UsageStatsUpdateInput, {
    nullable: false
  })
  update!: UsageStatsUpdateInput;
}
