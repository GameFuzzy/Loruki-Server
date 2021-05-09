import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsageStatsCreateManyInput } from "../../../inputs/UsageStatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUsageStatsArgs {
  @TypeGraphQL.Field(_type => [UsageStatsCreateManyInput], {
    nullable: false
  })
  data!: UsageStatsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
