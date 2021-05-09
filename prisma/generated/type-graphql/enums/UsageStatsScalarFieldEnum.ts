import * as TypeGraphQL from "type-graphql";

export enum UsageStatsScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deployments = "deployments",
  published = "published",
  projects = "projects"
}
TypeGraphQL.registerEnumType(UsageStatsScalarFieldEnum, {
  name: "UsageStatsScalarFieldEnum",
  description: undefined,
});
