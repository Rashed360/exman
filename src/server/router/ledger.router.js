import { createRouter } from '../context'
import * as trpc from '@trpc/server'
import { addExpenseSchema } from '../../schemas/ledger.schema'

export const ledgerRouter = createRouter().mutation('add-expense', {
	input: addExpenseSchema,
	resolve({ ctx, input }) {
		return true
	},
})
