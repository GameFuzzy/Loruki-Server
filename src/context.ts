import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

export type Context = {
  prisma: PrismaClient
  req: Request
  res: Response
  payload?: { userId: string }
}
