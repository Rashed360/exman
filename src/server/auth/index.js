import Credentials from 'next-auth/providers/credentials'
import { verify } from 'argon2'
import { prisma } from './prisma'
import { loginUserSchema } from '../../schemas/user.schema'

export const nextAuthOptions = {
	providers: [
		Credentials({
			name: 'credentials',
			credentials: {},
			authorize: async (credentials, req) => {
				const creds = await loginUserSchema.parseAsync(credentials)

				const user = await prisma.user.findFirst({
					where: { email: creds.email },
				})

				if (!user) {
					return null
				}

				const isValidPassword = await verify(user.password, creds.password)

				if (!isValidPassword) {
					return null
				}

				return {
					id: user.id,
					email: user.email,
				}
			},
		}),
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.id = user.id
				token.email = user.email
			}
			return token
		},
		session: async ({ session, token }) => {
			if (token) {
				session.id = token.id
			}
			return session
		},
	},
	// adapter: PrismaAdapter(prisma),
	// session: {
	// 	strategy: 'jwt',
	// },

	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
		maxAge: 7 * 24 * 30 * 60, // 7days
	},
	pages: {
		signIn: '/auth/login',
		newUser: '/auth/signup',
	},
}
