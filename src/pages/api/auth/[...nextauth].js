import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../utils/prisma'

export const authOptions = {
	// Include user.id on session
	// callbacks: {
	// 	session({ session, user }) {
	// 		if (session.user) {
	// 			session.user.id = user.id
	// 		}
	// 		return session
	// 	},
	// },
	// Configure one or more authentication providers
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				// name: {
				// 	label: 'Name',
				// 	type: 'text',
				// 	placeholder: 'Enter your name',
				// },
			},
			async authorize(credentials, req) {
				const user = { id: 1, name: credentials?.name ?? 'User' }

				if (user) {
					return user
				} else {
					return null
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/join',
	},
}

export default NextAuth(authOptions)
