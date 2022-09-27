import Layout from '../components/Layout'
import WelcomePage from '../components/WelcomePage'
import Dashboard from '../components/dashboard/Dashboard'
import { useEffect, useState } from 'react'

const Home = () => {
	const [welcome, setWelcome] = useState(true)
	useEffect(() => {
		const mode = localStorage.getItem('lightMode')
		if (mode) {
			setWelcome(false)
		}
	}, [])

	if (welcome) {
		return (
			<Layout>
				<WelcomePage />
			</Layout>
		)
	}
	return (
		<Layout>
			<Dashboard />
		</Layout>
	)
}
export default Home
