import Head from 'next/head'
import '../styles/globals.css'
import '../styles/index.css'
import { useEffect, useState } from 'react'

function Index({ Component, pageProps }) {
	const [lightMode, setLightMode] = useState(false)

	const toggleLightMode = () => {
		setLightMode(!lightMode)
		localStorage.setItem('lightMode', !lightMode)
	}

	useEffect(() => {
		const mode = localStorage.getItem('lightMode')
		if (mode === 'true') {
			setLightMode(true)
		} else {
			setLightMode(false)
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
