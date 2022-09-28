import '../styles/globals.css'
import '../styles/index.css'
import { ThemeContextProvider } from '../utils/ThemeContext'
import { withTRPC } from '@trpc/next'
import { loggerLink } from '@trpc/client/links/loggerLink'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import superjson from 'superjson'
import { url } from '../constants/baseUrl'
import { trpc } from '../utils/trpc'

function Index({ Component, pageProps }) {
	return (
		<ThemeContextProvider>
			<Component {...pageProps} />
		</ThemeContextProvider>
	)
}

export default withTRPC({
	config({ ctx }) {
		const links = [
			loggerLink(),
			httpBatchLink({
				maxBatchSize: 10,
				url,
			}),
		]
		return {
			queryClientConfig: {
				defaultOptions: {
					queries: {
						staleTime: 60,
					},
				},
			},
			headers() {
				if (ctx?.req) {
					return {
						...ctx.req.headers,
						'x-ssr': '1',
					}
				}
				return {}
			},
			links,
			transformer: superjson,
		}
	},
	ssr: false,
})(Index)
