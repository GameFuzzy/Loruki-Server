import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsageStatsUpdateManyMutationInput } from "../../../inputs/UsageStatsUpdateManyMutationInput";
import { UsageStatsWhereInput } from "../../../inputs/UsageStatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUsageStatsArgs {
  @TypeGraphQL.Field(_type => UsageStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsageStatsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UsageStatsWhereInput, {
    nullable: true
  })
  where?: UsageStatsWhereInput | undefined;
}
