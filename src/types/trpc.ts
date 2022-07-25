import z from 'zod'

export const gameQuery = z.object({
  league: z.string().regex(/(MLB)|(NBA)/)
})
