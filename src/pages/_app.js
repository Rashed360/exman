import 'react-slideshow-image/dist/styles.css'
import '../styles/globals.css'
import '../styles/index.css'
import { ThemeContextProvider } from '../utils/ThemeContext'
import { SessionProvider } from 'next-auth/react'
import { withTRPC } from '@trpc/next'
import { loggerLink } from '@trpc/client/links/loggerLink'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import superjson from 'superjson'
import { url } from '../constants/baseUrl'

function Index({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeContextProvider>
				<Component {...pageProps} />
			</ThemeContextProvider>
		</SessionProvider>
	)
}

export default withTRPC({
	config({ ctx }) {
		return {
			links: [
				loggerLink({
					enabled: opts =>
						process.env.NODE_ENV === 'development' ||
						(opts.direction === 'down' && opts.result instanceof Error),
				}),
				httpBatchLink({
					maxBatchSize: 10,
					url,
				}),
			],
			transformer: superjson,
			queryClientConfig: {
				defaultOptions: {
					queries: {
						staleTime: 60,
					},
				},
			},
			headers: () => {
				if (ctx?.req) {
					const headers = ctx?.req?.headers
					delete headers?.connection
					return {
						...headers,
						'x-ssr': '1',
					}
				}
				return {}
			},
		}
	},
	ssr: false,
})(Index)
