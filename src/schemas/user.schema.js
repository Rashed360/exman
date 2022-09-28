import z from 'zod'

export const createUserSchema = z.object({
	fisrtName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().min(5).email(),
	password: z
		.string()
		.min(8)
		.regex(/(?=.*[0-9])/)
		.regex(/(?=.*[!@#$%^&*])/),
})

export const loginUserSchema = z.object({
	email: z.string().min(5).email(),
	password: z
		.string()
		.min(8)
		.regex(/(?=.*[0-9])/)
		.regex(/(?=.*[!@#$%^&*])/),
})

export const loginFormUserSchema = z.object({
	email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Must be a valid email' }),
	password: z
		.string()
		.min(1, { message: 'Password must contain special symbols' })
		.min(8, { message: 'Password must be 8 characters long' })
		.regex(/(?=.*[0-9])/, { message: 'Invalid Password.' })
		.regex(/(?=.*[!@#$%^&*])/, { message: 'Invalid Password.' }),
})

export const signUpFormUserSchema = z
	.object({
		fisrtName: z.string().min(1, { message: 'First name is required' }),
		lastName: z.string().min(1, { message: 'Last name is required' }),
		email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Must be a valid email' }),
		password: z
			.string()
			.min(1, { message: 'Password is Required' })
			.min(8, { message: 'Must be 8 characters long' })
			.regex(/(?=.*[0-9])/, { message: 'Must contain at-least one number.' })
			.regex(/(?=.*[!@#$%^&*])/, { message: 'Must contain special symbols.' }),
		confirmPassword: z
			.string()
			.min(1, { message: 'Confirm Password is Required' })
			.min(8, { message: 'Must be 8 characters long' }),
	})
	.refine(data => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: "Passwords don't match",
	})
