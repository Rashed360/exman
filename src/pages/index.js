import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import PageContent from '../components/common/PageContent'
import Section from '../components/common/Section'
import { useRouter } from 'next/router'
import { requireAuth } from '../server/auth/requireAuth'
import { CardsContainer, CardInfo, CardActivity } from '../components/common/cards'

export const getServerSideProps = requireAuth(async ctx => {
	return { props: {} }
})

const Home = () => {
	const { push } = useRouter()
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
						<CardActivity positive description='Lorem ipsum dolor, sit amet consecte.' amount='99,999' />
						<CardActivity negative description='Facere fugi, ipsum ut aut maxime...' amount='99,999' />
						<CardActivity nutral description='Suscipit quisquam voluptati expedita.' amount='99,999' />
					</CardsContainer>
				</Section>
			</PageContent>
		</Layout>
	)
}
export default Home
