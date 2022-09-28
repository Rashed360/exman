import superjson from 'superjson'
import fetch from 'node-fetch'
import { createRouter } from '../context'
import { userRouter } from '../router/user.router'
import { ledgerRouter } from '../router/ledger.router'

if (!global.fetch) {
	global.fetch = fetch
}

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('users.', userRouter)
	.merge('ledger.', ledgerRouter)
