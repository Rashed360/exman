import z from 'zod'

export const addExpenseFormSchema = z.object({
	amount: z.number().positive(),
	title: z.string().min(1, { message: 'Title is required' }).max(50, 'Max length is 50'),
	description: z.string().max(500, 'Max length is 500').optional(),
})

export const addExpenseSchema = z.object({
	user: z.string(),
	type: z.enum(['EXP', 'INC']),
	amount: z.number().positive(),
	title: z.string().min(1).max(50),
	description: z.string().max(500).optional(),
})

export const getAllLedgerSchema = z.object({
	userId: z.string(),
})
