import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { prisma } from '../utils/prisma'

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
  return { req, res, prisma }
}

export type Context = inferAsyncReturnType<typeof createContext>
