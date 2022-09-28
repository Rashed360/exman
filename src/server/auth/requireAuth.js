import { unstable_getServerSession } from 'next-auth'
import { nextAuthOptions } from '../auth'

export const requireAuth = func => async ctx => {
	const session = await unstable_getServerSession(ctx.req, ctx.res, nextAuthOptions)

	if (!session) {
		return {
			redirect: {
				destination: '/welcome',
				permanent: false,
			},
		}
	}

	return await func(ctx)
}
