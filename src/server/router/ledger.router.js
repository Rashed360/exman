import { createRouter } from '../context'
import * as trpc from '@trpc/server'
import { addExpenseSchema } from '../../schemas/ledger.schema'

export const ledgerRouter = createRouter().mutation('add-expense', {
	input: addExpenseSchema,
	resolve: async ({ ctx, input }) => {
		const { amount, title, description, type } = input
		try {
			return {
				user: ctx.session.user,
				type,
				amount,
				title,
				description,
			}

			// const ledger = await ctx.prisma.ledger.create({
			// 	data: {
			// 		user: ctx.session.user,
			// 		type,
			// 		amount,
			// 		title,
			// 		description,
			// 		// balance,
			// 	},
			// })
			// return ledger
		} catch (e) {
			// throw new trpc.TRPCError({
			// 	code: 'INTERNAL_SERVER_ERROR',
			// 	message: 'Something went wrong',
			// })
			console.log(e)
		}
	},
})
