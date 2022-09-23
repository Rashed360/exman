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
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				name: {
					label: 'Name',
					type: 'text',
					placeholder: 'Enter your name',
				},
			},
			async authorize(credentials, _req) {
				const user = { id: 1, name: credentials?.name ?? 'User' }
				return user
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
}

export default NextAuth(authOptions)
