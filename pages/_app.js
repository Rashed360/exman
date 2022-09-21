import { ThemeContextProvider } from '../utils/ThemeContext'
import '../styles/globals.css'
import '../styles/index.css'

function Index({ Component, pageProps }) {
	return (
		<ThemeContextProvider>
			<Component {...pageProps} />
		</ThemeContextProvider>
	)
}

export default Index
