import { User } from '../../../prisma/generated/type-graphql'
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware
} from 'type-graphql'
import { Context } from '../../context'
import argon2 from 'argon2'

import { isAuth } from '../../auth'

import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken
} from '../../auth'
import { verify } from 'jsonwebtoken'

@InputType()
class UserInput {
  @Field()
  username: string

  @Field()
  password: string
}

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string

  @Field()
  user: User
}

@Resolver(User)
export class CustomUserResolver {
  @Query(() => String)
  hello() {
    return 'hi'
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: Context) {
    console.log(payload)
    return `Your user ID is ${payload!.userId}`
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, req }: Context): Promise<User | null> {
    const authorization = req.headers['authorization']

    if (!authorization) {
      return null
    }

    try {
      const token = authorization.split(' ')[1]
      const payload: any = verify(token, process.env.JWT_SECRET!)
      return await prisma.user.findUnique({
        where: { id: payload.userId }
      })
    } catch (e) {
      console.log(e)
      return null
    }
  }

  @Mutation(() => User)
  async revokeRefreshTokensForUser(
    @Ctx() { prisma }: Context,
    @Arg('userId', () => String) userId: string
  ): Promise<User> {
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      throw new Error('Invalid user ID')
    }
    return await prisma.user.update({
      where: { id: userId },
      data: { tokenVersion: user.tokenVersion + 1 }
    })
  }

  @Mutation(() => User)
  async registerUser(
    @Ctx() { prisma }: Context,
    @Arg('data') data: UserInput
  ): Promise<User> {
    let user: User
    try {
      user = await prisma.user.create({
        data: {
          username: data.username,
          password: await argon2.hash(data.password)
        }
      })
    } catch (e) {
      throw new Error('Could not register user: ' + e.message)
    }
    return user
  }

  @Mutation(() => LoginResponse)
  async loginUser(
    @Ctx() { prisma, res }: Context,
    @Arg('data') data: UserInput
  ): Promise<LoginResponse> {
    const user = await prisma.user.findUnique({
      where: { username: data.username }
    })

    if (!user) {
      throw new Error('Invalid username')
    }

    const valid = await argon2.verify(user.password, data.password)

    if (!valid) {
      throw new Error('Invalid password')
    }

    // Login successful

    sendRefreshToken(res, createRefreshToken(user))

    return {
      accessToken: createAccessToken(user),
      user
    }
  }

  @Mutation(() => Boolean, { nullable: true })
  async logoutUser(@Ctx() { res }: Context): Promise<boolean> {
    try {
      sendRefreshToken(res, '')
      return true
    } catch {
      return false
    }
  }
}
