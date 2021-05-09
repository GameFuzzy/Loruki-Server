import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsageStatsOrderByInput } from "../../../inputs/UsageStatsOrderByInput";
import { UsageStatsScalarWhereWithAggregatesInput } from "../../../inputs/UsageStatsScalarWhereWithAggregatesInput";
import { UsageStatsWhereInput } from "../../../inputs/UsageStatsWhereInput";
import { UsageStatsScalarFieldEnum } from "../../../../enums/UsageStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUsageStatsArgs {
  @TypeGraphQL.Field(_type => UsageStatsWhereInput, {
    nullable: true
  })
  where?: UsageStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsageStatsOrderByInput], {
    nullable: true
  })
  orderBy?: UsageStatsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsageStatsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "deployments" | "published" | "projects">;

  @TypeGraphQL.Field(_type => UsageStatsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UsageStatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
