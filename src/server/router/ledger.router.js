import { createRouter } from '../context'
import * as trpc from '@trpc/server'
import { addExpenseSchema, getAllLedgerSchema } from '../../schemas/ledger.schema'

export const ledgerRouter = createRouter()
	.mutation('add-expense', {
		input: addExpenseSchema,
		resolve: async ({ ctx, input }) => {
			const { amount, title, description, images = [], tags = [], type, user } = input
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
				if (images && images?.length > 0) {
					images.forEach(async image => {
						await ctx.prisma.ledgerImage.create({
							data: {
								ledgerId: ledger.id,
								url: image.url,
								name: image.name,
							},
						})
					})
				}
				if (tags && tags?.length > 0) {
					tags.forEach(async tag => {
						const singleTag = await ctx.prisma.ledgerTag.create({
							data: {
								ledgerId: ledger.id,
								title: tag,
							},
						})
						console.log('tag: ', singleTag)
					})
				}

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
					include: {
						images: true,
						tags: true,
					},
					orderBy: {
						createdAt: 'desc',
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
