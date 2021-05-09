import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class UsageStats {
  @Field((type) => ID)
  id: number

  @Field((type) => Date)
  createdAt: Date

  @Field((type) => Date)
  updatedAt: Date

  @Field()
  deployments: number

  @Field()
  published: number

  @Field()
  projects: number
}
