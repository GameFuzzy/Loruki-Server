import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsageStatsWhereInput {
  @TypeGraphQL.Field(_type => [UsageStatsWhereInput], {
    nullable: true
  })
  AND?: UsageStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsageStatsWhereInput], {
    nullable: true
  })
  OR?: UsageStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsageStatsWhereInput], {
    nullable: true
  })
  NOT?: UsageStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  deployments?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  published?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  projects?: IntFilter | undefined;
}
