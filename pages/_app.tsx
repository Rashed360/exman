import Head from 'next/head'
import '../styles/globals.css'
import '../styles/index.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'

function Index({ Component, pageProps }: AppProps) {
	const [lightMode, setLightMode] = useState<Boolean>(false)

	const toggleLightMode = () => {
		setLightMode(!lightMode)
		// localStorage.setItem('lightMode', !lightMode)
	}

	useEffect(() => {
		const mode = localStorage.getItem('lightMode')
		if (mode === 'true') {
			setLightMode(true)
			document.body.className = 'lightMode'
		} else {
			setLightMode(false)
			document.body.className = ''
		}
	}, [lightMode])

	return (
		<>
			<Head>
				<title>EX-MAN</title>
				<meta name='description' content='Everyday Expense Manager' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} mode={lightMode} toggleMode={toggleLightMode} />
		</>
	)
}

export default Index
