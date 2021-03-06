import { User } from '../../prisma/generated/type-graphql'
import { sign } from 'jsonwebtoken'
import { Response } from 'express'

export const createRefreshToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.JWT_REFRESH_SECRET!,
    {
      expiresIn: '7d'
    }
  )
}

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie('jid', token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/refresh_token',
    expires: new Date(
      Date.now() +
        1000 * 60 * 60 * 24 * 7 /* Seven days, same as the JWT token */
    )
  })
}
