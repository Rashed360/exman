import { createUserSchema, createUserOutputSchema } from '../../schemas/user.schema'
import { createRouter } from '../createRouter'
import * as trpc from '@trpc/server'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'

export const userRouter = createRouter()
	.mutation('register-user', {
		input: createUserSchema,
		output: createUserOutputSchema,
		resolve: async ({ ctx, input }) => {
			const { fisrtName, lastName, email, password } = input
			const hashPassword = password

			try {
				const user = await ctx.prisma.user.create({
					data: {
						fisrtName,
						lastName,
						email,
						password: hashPassword,
					},
				})
				return user
			} catch (e) {
				if (e instanceof PrismaClientKnownRequestError) {
					if (e.code === 'P2002') {
						throw new trpc.TRPCError({
							code: 'CONFLICT',
							message: 'User already exists',
						})
					}
				}
				throw new trpc.TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'Something went wrong',
				})
			}
		},
	})
	.query('me', {
		resolve: ({ ctx }) => {
			return ctx.user
		},
	})
