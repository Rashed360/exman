import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from '../../../server/router'
import { createContext } from '../../../server/context'

export default createNextApiHandler({
	router: appRouter,
	createContext,
	onError: ({ path, error }) => {
		console.error(`❌ tRPC failed on ${path}: ${error}`)
	},
	responseMeta(ctx) {
		if (ctx.ctx?.req?.method === 'OPTIONS') {
			ctx.ctx?.res?.writeHead(200)
		}

		return {
			headers: ctx.ctx?.res?.getHeaders(),
			statusCode: ctx.ctx?.res?.statusCode || 200,
		}
	},
})
