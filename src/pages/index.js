import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import PageContent from '../components/common/PageContent'
import Section from '../components/common/Section'
import { requireAuth } from '../server/auth/requireAuth'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { trpc } from '../utils/trpc'
import { CardsContainer, CardInfo, CardActivity, CardLoading } from '../components/common/cards'

const Home = () => {
	const { push } = useRouter()
	const { data: session } = useSession()
	const userId = session?.user?.id
	const { data, isLoading } = trpc.useQuery(['ledger.get-all', { userId }])
	return (
		<Layout>
			<Navbar />
			<PageContent withContainer>
				<CardsContainer>
					<CardInfo positive title='Added' amount='99,999' />
					<CardInfo negative title='Removed' amount='99,999' />
					<CardInfo nutral title='Remaning' amount='99,999' />
				</CardsContainer>

				<Section title='Recent Activities' subTitle='Show All' subTitleClick={() => push('/transaction')}>
					<CardsContainer>
						{isLoading ? (
							<CardLoading data='Loading...' />
						) : data.length === 0 ? (
							<CardLoading data='No activities yet!' />
						) : (
							data.map(item => (
								<CardActivity type={item.type} description={item.title} amount={item.amount} />
							))
						)}
					</CardsContainer>
				</Section>
			</PageContent>
		</Layout>
	)
}

export const getServerSideProps = requireAuth(async ctx => {
	return { props: {} }
})

export default Home
