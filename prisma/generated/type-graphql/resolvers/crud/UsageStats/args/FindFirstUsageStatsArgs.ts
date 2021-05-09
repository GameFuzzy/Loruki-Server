import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsageStatsOrderByInput } from "../../../inputs/UsageStatsOrderByInput";
import { UsageStatsWhereInput } from "../../../inputs/UsageStatsWhereInput";
import { UsageStatsWhereUniqueInput } from "../../../inputs/UsageStatsWhereUniqueInput";
import { UsageStatsScalarFieldEnum } from "../../../../enums/UsageStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUsageStatsArgs {
  @TypeGraphQL.Field(_type => UsageStatsWhereInput, {
    nullable: true
  })
  where?: UsageStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsageStatsOrderByInput], {
    nullable: true
  })
  orderBy?: UsageStatsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => UsageStatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: UsageStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UsageStatsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "deployments" | "published" | "projects"> | undefined;
}
