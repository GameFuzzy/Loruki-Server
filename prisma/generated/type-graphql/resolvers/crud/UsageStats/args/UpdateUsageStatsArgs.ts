import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsageStatsUpdateInput } from "../../../inputs/UsageStatsUpdateInput";
import { UsageStatsWhereUniqueInput } from "../../../inputs/UsageStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUsageStatsArgs {
  @TypeGraphQL.Field(_type => UsageStatsUpdateInput, {
    nullable: false
  })
  data!: UsageStatsUpdateInput;

  @TypeGraphQL.Field(_type => UsageStatsWhereUniqueInput, {
    nullable: false
  })
  where!: UsageStatsWhereUniqueInput;
}
