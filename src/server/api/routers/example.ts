import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `T3 Stackで何か作ります ${input.text}`
    }
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  })
})
