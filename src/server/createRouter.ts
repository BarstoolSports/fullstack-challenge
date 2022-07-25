import { router } from '@trpc/server'
import superjson from 'superjson'
import { Context } from './context'

export const createRouter = () => {
  return router<Context>().transformer(superjson)
}
