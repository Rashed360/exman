import Head from 'next/head'
import '../styles/globals.css'

function Index({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>EX-MAN</title>
				<meta name='description' content='Everyday Expense Manager' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default Index
