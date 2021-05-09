import { MiddlewareFn } from 'type-graphql'
import { verify } from 'jsonwebtoken'
import { Context } from '../context'

// bearer sido45dpsu5w0954n39of

export const isAuth: MiddlewareFn<Context> = ({ context }, next) => {
  const authorization = context.req.headers['authorization']

  if (!authorization) {
    throw new Error('Not authenticated')
  }

  try {
    const token = authorization.split(' ')[1]
    const payload = verify(token, process.env.JWT_SECRET!)
    context.payload = payload as any
  } catch (e) {
    console.log(e)
    throw new Error('Not authenticated')
  }

  return next()
}
