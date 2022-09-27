import * as z from 'zod'

export const loginFormSchema = z.object({
	email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Must be a valid email' }),
	password: z
		.string()
		.min(1, { message: 'Password must contain special symbols' })
		.min(8, { message: 'Password must be 8 characters long' }),
})
