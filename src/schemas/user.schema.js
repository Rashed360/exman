import z from 'zod'

export const createUserSchema = z.object({
	fisrtName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().min(5).email(),
	password: z.string().min(8),
})
export const createUserOutputSchema = z.object({
	fisrtName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
})
