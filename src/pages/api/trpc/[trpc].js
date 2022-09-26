import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from '../../../server/router'
import { createContext } from '../../../server/context'

export default createNextApiHandler({
	router: appRouter,
	createContext,
	onError: ({ path, error }) => {
		console.error(`❌ tRPC failed on ${path}: ${error}`)
	},
})
