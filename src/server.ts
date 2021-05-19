import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import { createServer } from 'http'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import schema from './schema'
import { Context } from './context'
import cookieParser from 'cookie-parser'
import { verify } from 'jsonwebtoken'
import { createAccessToken, createRefreshToken, sendRefreshToken } from './auth'

const prisma = new PrismaClient()

const startServer = async () => {
  dotenv.config()

  const PORT = process.env.PORT || 4000
  const app = express()
  app.use(compression())
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true
    })
  )
  app.use(
    helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === 'production' ? undefined : false
    })
  )

  app.use('/refresh_token', cookieParser())

  app.post('/refresh_token', async (req, res) => {
    const token = req.cookies.jid
    if (!token) {
      return res.send({ ok: false, accessToken: '' })
    }
    let payload: any = null
    try {
      payload = verify(token, process.env.JWT_REFRESH_SECRET!)
    } catch (e) {
      console.log(e)
      return res.send({ ok: false, accessToken: '' })
    }

    // Token is valid and we can send back an access token

    const user = await prisma.user.findUnique({ where: { id: payload.userId } })

    if (!user) {
      return res.send({ ok: false, accessToken: '' })
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: '' })
    }

    sendRefreshToken(res, createRefreshToken(user))

    return res.send({ ok: true, accessToken: createAccessToken(user) })
  })

  const server = new ApolloServer({
    schema,
    context: ({ req, res }): Context => ({ prisma, req, res })
  })

  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: false
  })

  const httpServer = createServer(app)
  httpServer.listen({ port: PORT }, (): void => {
    console.log(
      `🚀 GraphQL-Server is running on http://localhost:${PORT}/graphql`
    )
  })
}

startServer()
  .catch((e) => {
    throw e
  })

  .finally(async () => {
    await prisma.$disconnect()
  })
