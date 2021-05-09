import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsageStatsCreateInput } from "../../../inputs/UsageStatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUsageStatsArgs {
  @TypeGraphQL.Field(_type => UsageStatsCreateInput, {
    nullable: false
  })
  data!: UsageStatsCreateInput;
}
