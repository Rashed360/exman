import z from 'zod'

export const createLedgerSchema = z.object({
	type: z.string(),
	amount: z.number(),
	title: z.string().max(256, 'Max lenght is 256').min(5),
	description: z.string(),
})

export const getSingleLedgerSchema = z.object({
	ledgerId: z.string().uuid(),
})
