import Credentials from 'next-auth/providers/credentials'
import { prisma } from '../../utils/prisma'
import { loginUserSchema } from '../../schemas/user.schema'
import { verify } from 'argon2'

export const nextAuthOptions = {
	providers: [
		Credentials({
			name: 'credentials',
			credentials: {},
			authorize: async (credentials, req) => {
				const creds = await loginUserSchema.parseAsync(credentials)

				const user = await prisma.user.findUnique({
					where: {
						email: creds.email,
					},
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
					fisrtName: user.fisrtName,
				}
			},
		}),
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			user && (token.user = user)
			return token
		},
		session: async ({ session, token }) => {
			token && (session.id = token.id)
			session.user
			return session
		},
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	jwt: {
		maxAge: 7 * 24 * 30 * 60, // 7days
	},
	pages: {
		signIn: '/auth/login',
		newUser: '/auth/signup',
	},
	// adapter: PrismaAdapter(prisma),
}
