import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import PageContent from '../components/common/PageContent'
import Section from '../components/common/Section'
import { requireAuth } from '../server/auth/requireAuth'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { trpc } from '../utils/trpc'
import { CardsContainer, CardInfo, CardActivity, CardLoading } from '../components/common/cards'
import { useEffect, useState } from 'react'
import { calculateTotal } from '../utils'

const Home = () => {
	const { push } = useRouter()
	const { data: session } = useSession()
	const userId = session?.user?.id
	const { data, isLoading } = trpc.useQuery(['ledger.get-all', { userId }])

	const [totalAmount, setTotalAmount] = useState({ add: 0, rem: 0 })
	const remaningAmount = totalAmount.add - totalAmount.rem

	useEffect(() => {
		if (!isLoading) {
			setTotalAmount(calculateTotal(data))
		}
	}, [data])

	return (
		<Layout>
			<Navbar />
			<PageContent withContainer>
				<CardsContainer>
					<CardInfo positive title='Added' amount={totalAmount.add} />
					<CardInfo negative title='Removed' amount={totalAmount.rem} />
					<CardInfo nutral title='Remaning' amount={remaningAmount} />
				</CardsContainer>

				<Section title='Recent Activities' subTitle='Show All' subTitleClick={() => push('/transaction')}>
					<CardsContainer>
						{isLoading ? (
							<CardLoading data='Loading Activities...' />
						) : data.length === 0 ? (
							<CardLoading data='No activities yet!' />
						) : (
							data.map(item => <CardActivity key={item.id} item={item} />)
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
