import 'reflect-metadata'
import { buildSchemaSync } from 'type-graphql'
import {
  FindFirstUsageStatsResolver,
  CreateUsageStatsResolver,
  FindManyUsageStatsResolver,
  FindManyUserResolver
} from '../../prisma/generated/type-graphql'
import { CustomUserResolver } from './resolvers/User'

export default buildSchemaSync({
  resolvers: [
    FindFirstUsageStatsResolver,
    CreateUsageStatsResolver,
    FindManyUsageStatsResolver,
    FindManyUserResolver,
    CustomUserResolver
  ],
  validate: false
})
