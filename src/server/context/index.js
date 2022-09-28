import { router } from '@trpc/server'
import { prisma } from '../../utils/prisma'
import { getSession } from 'next-auth/react'

export const createContext = async opts => {
	const req = opts?.req
	const res = opts?.res

	const session = req && res && (await getSession({ req }))

	return {
		req,
		res,
		session,
		prisma,
	}
}

export const createRouter = () => router()
