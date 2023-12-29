import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import PageContent from '../../components/common/PageContent'
import Section from '../../components/common/Section'
import { trpc } from '../../utils/trpc'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { requireAuth } from '../../server/auth/requireAuth'
import { CardsContainer, CardActivity, CardLoading } from '../../components/common/cards'
import { useState } from 'react'

const Transaction = () => {
	const { push } = useRouter()
	const { data: session } = useSession()
	const userId = session?.user?.id
	const { data, isLoading } = trpc.useQuery(['ledger.get-all', { userId }])
	const [showFilter, setShowFilter] = useState(false)

	return (
		<Layout>
			<Navbar />
			<PageContent withContainer>
				<div className='buttons'>
					<button onClick={() => push('/transaction/money')} className='btn_primary'>
						Add Money
					</button>
					<button onClick={() => push('/transaction/expense')} className='btn_danger'>
						Add Expense
					</button>
				</div>
				<Section
					title='Previous Transactions'
					subTitle='Filter'
					subTitleClick={() => setShowFilter(!showFilter)}
				>
					{showFilter && <div className='filters'>Filter Control</div>}
					<CardsContainer>
						{isLoading ? (
							<CardLoading data='Loading Transactions...' />
						) : data.length === 0 ? (
							<CardLoading data='No transactions yet!' />
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

export default Transaction
