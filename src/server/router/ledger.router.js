import { createRouter } from '../context'
import * as trpc from '@trpc/server'
import { addExpenseSchema, getAllLedgerSchema } from '../../schemas/ledger.schema'

export const ledgerRouter = createRouter()
	.mutation('add-expense', {
		input: addExpenseSchema,
		resolve: async ({ ctx, input }) => {
			const { amount, title, description, type, user } = input
			try {
				const ledger = await ctx.prisma.ledger.create({
					data: {
						type,
						amount,
						title,
						description,
						// balance,
						user: {
							connect: {
								id: user,
							},
						},
					},
				})
				return {
					status: 201,
					message: `Ledger : ${type === 'EXP' ? 'Expense' : 'Money'} Added`,
					result: ledger.title,
				}
			} catch (e) {
				console.log(e)
				throw new trpc.TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'Something went wrong',
				})
			}
		},
	})
	.query('get-all', {
		input: getAllLedgerSchema,
		resolve: async ({ ctx, input }) => {
			const { userId } = input
			try {
				return ctx.prisma.ledger.findMany({
					where: {
						userId,
					},
				})
			} catch (e) {
				throw new trpc.TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'Something went wrong',
				})
			}
		},
	})
