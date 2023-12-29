import { router } from '@trpc/server'
import { prisma } from '../../utils/prisma'
import { nextAuthOptions } from '../auth'
import { getServerSession } from 'next-auth'

export const createContext = async ctx => {
	const { req, res } = ctx
	const session = await getServerSession(req, res, nextAuthOptions)

	return {
		req,
		res,
		session,
		prisma,
	}
}

export const createRouter = () => router()
