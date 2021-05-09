import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsageStatsAvgAggregate } from "../outputs/UsageStatsAvgAggregate";
import { UsageStatsCountAggregate } from "../outputs/UsageStatsCountAggregate";
import { UsageStatsMaxAggregate } from "../outputs/UsageStatsMaxAggregate";
import { UsageStatsMinAggregate } from "../outputs/UsageStatsMinAggregate";
import { UsageStatsSumAggregate } from "../outputs/UsageStatsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UsageStatsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  deployments!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  published!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  projects!: number;

  @TypeGraphQL.Field(_type => UsageStatsCountAggregate, {
    nullable: true
  })
  count!: UsageStatsCountAggregate | null;

  @TypeGraphQL.Field(_type => UsageStatsAvgAggregate, {
    nullable: true
  })
  avg!: UsageStatsAvgAggregate | null;

  @TypeGraphQL.Field(_type => UsageStatsSumAggregate, {
    nullable: true
  })
  sum!: UsageStatsSumAggregate | null;

  @TypeGraphQL.Field(_type => UsageStatsMinAggregate, {
    nullable: true
  })
  min!: UsageStatsMinAggregate | null;

  @TypeGraphQL.Field(_type => UsageStatsMaxAggregate, {
    nullable: true
  })
  max!: UsageStatsMaxAggregate | null;
}
