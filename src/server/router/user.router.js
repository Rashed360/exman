import * as trpc from '@trpc/server'
import { hash } from 'argon2'
import { createRouter } from '../context'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { createUserSchema } from '../../schemas/user.schema'

export const userRouter = createRouter()
	.mutation('register-user', {
		input: createUserSchema,
		resolve: async ({ ctx, input }) => {
			const { fisrtName, lastName, email, password } = input
			const hashPassword = await hash(password)
			try {
				const user = await ctx.prisma.user.create({
					data: {
						fisrtName,
						lastName,
						email,
						password: hashPassword,
					},
				})
				return {
					status: 201,
					message: 'Registration Successful',
					result: user.email,
				}
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
		resolve: async ({ ctx }) => {
			const user = await ctx.prisma.user.findUnique({
				where: {
					id: ctx.session.id,
				},
				select: {
					fisrtName: true,
					lastName: true,
					email: true,
					image: true,
				},
			})
			return user
		},
	})
