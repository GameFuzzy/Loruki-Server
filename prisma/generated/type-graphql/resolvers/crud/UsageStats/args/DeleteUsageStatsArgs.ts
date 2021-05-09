import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsageStatsWhereUniqueInput } from "../../../inputs/UsageStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUsageStatsArgs {
  @TypeGraphQL.Field(_type => UsageStatsWhereUniqueInput, {
    nullable: false
  })
  where!: UsageStatsWhereUniqueInput;
}
