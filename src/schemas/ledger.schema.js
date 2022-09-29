import z from 'zod'

export const addExpenseFormSchema = z.object({
	amount: z.number().min(1, { message: 'Amount is required' }),
	title: z.string().min(1, { message: 'Title is required' }).max(50, 'Max length is 50'),
	description: z.string().max(500, 'Max length is 500').optional(),
})
