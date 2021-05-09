import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsageStatsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UsageStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UsageStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsageStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UsageStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsageStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UsageStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  deployments?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  published?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  projects?: IntWithAggregatesFilter | undefined;
}
