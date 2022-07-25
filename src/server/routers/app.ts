import { createRouter } from '../createRouter'
import { gameRouter } from './game'

export const appRouter = createRouter().merge('game.', gameRouter)

export type AppRouter = typeof appRouter
