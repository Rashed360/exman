import Layout from '../components/Layout'
import Dashboard from '../components/dashboard/Dashboard'
import { requireAuth } from '../server/auth/requireAuth'

export const getServerSideProps = requireAuth(async ctx => {
	return { props: {} }
})

const Home = () => {
	return (
		<Layout>
			<Dashboard />
		</Layout>
	)
}
export default Home
