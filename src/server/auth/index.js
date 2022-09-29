import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../utils/prisma'
import { loginUserSchema } from '../../schemas/user.schema'
import { verify } from 'argon2'
let userAccount = null

export const nextAuthOptions = {
	providers: [
		Credentials({
			name: 'credentials',
			credentials: {},
			authorize: async (credentials, req) => {
				try {
					const creds = await loginUserSchema.parseAsync(credentials)
					const user = await prisma.user.findFirst({
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

					userAccount = {
						id: user.id,
						firstName: user.firstName,
						lastName: user.lastName,
						email: user.email,
						image: user.image,
					}
					return userAccount
				} catch (e) {
					console.log('Auth Error:', e)
				}
			},
		}),
	],
	callbacks: {
		session: async ({ session, token }) => {
			if (userAccount !== null) {
				session.user = {
					id: userAccount.id,
					name: `${userAccount.firstName} ${userAccount.lastName}`,
					email: userAccount.email,
					image: userAccount.image,
				}
			} else if (
				typeof token.user !== typeof undefined &&
				(typeof session.user === typeof undefined ||
					(typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined))
			) {
				session.user = token.user
			} else if (typeof token !== typeof undefined) {
				session.token = token
			}
			return session
		},
		jwt: async ({ token, user }) => {
			user && (token.user = user)
			return token
		},
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	jwt: {
		maxAge: 7 * 24 * 60 * 60,
	},
	pages: {
		signIn: '/auth/login',
		newUser: '/auth/signup',
	},
	adapter: PrismaAdapter(prisma),
}
