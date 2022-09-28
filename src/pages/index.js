import Layout from '../components/Layout'
import Dashboard from '../components/dashboard/Dashboard'
import { useSession, signOut } from 'next-auth/react'
import { requireAuth } from '../server/auth/requireAuth'

export const getServerSideProps = requireAuth(async ctx => {
	return { props: {} }
})

const Home = () => {
	const { data } = useSession()
	return (
		<Layout>
			<Dashboard />
			<button onClick={() => signOut({ callbackUrl: '/' })}>LogOut</button>
		</Layout>
	)
}
export default Home
