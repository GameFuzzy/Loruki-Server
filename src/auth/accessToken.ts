import { User } from '../../prisma/generated/type-graphql'
import { sign } from 'jsonwebtoken'

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: '15s'
  })
}
