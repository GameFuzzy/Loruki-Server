import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsageStatsWhereInput } from "../../../inputs/UsageStatsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUsageStatsArgs {
  @TypeGraphQL.Field(_type => UsageStatsWhereInput, {
    nullable: true
  })
  where?: UsageStatsWhereInput | undefined;
}
