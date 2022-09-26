import z from 'zod'

export const addExpenseSchema = z.object({
	amount: z.number(),
	title: z.string().max(256, 'Max lenght is 256').min(5),
	description: z.string(),
})
