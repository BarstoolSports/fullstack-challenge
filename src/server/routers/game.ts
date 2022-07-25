import { createRouter } from '../createRouter'
import { gameQuery } from '../../types/trpc'
import stale from '../../utils/compTimes'

const MLB_API_URL =
  'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json'
const NBA_API_URL =
  'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json'

export const gameRouter = createRouter()
  /* get game */
  .query('get', {
    input: gameQuery,
    resolve: async ({ ctx, input }) => {
      // const res = await fetch(
      //   input.league === 'MLB' ? MLB_API_URL : NBA_API_URL
      // )
      // const gameData = await res.json()
      // await ctx.prisma.game.create({
      //   data: {
      //     league: input.league,
      //     data: JSON.stringify(gameData)
      //   }
      // })

      const { league } = input

      const game = await ctx.prisma.game.findFirst({
        where: {
          league
        }
      })

      if (!game) return null

      // check if stale
      if (stale(game.updatedAt.toISOString())) {
        const res = await fetch(league === 'MLB' ? MLB_API_URL : NBA_API_URL)
        const gameData = await res.json()

        await ctx.prisma.game.update({
          where: {
            id: game.id
          },
          data: {
            data: gameData
          }
        })

        return gameData
      }

      return game.data
    }
  })
