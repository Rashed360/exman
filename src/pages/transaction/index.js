import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import PageContent from '../../components/common/PageContent'
import Section from '../../components/common/Section'
import { useRouter } from 'next/router'
import { requireAuth } from '../../server/auth/requireAuth'
import { CardsContainer, CardActivity } from '../../components/common/cards'
import { useState } from 'react'

const Transaction = () => {
	const [showFilter, setShowFilter] = useState(false)
	const { push } = useRouter()

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
						<CardActivity positive description='Lorem ipsum dolor, sit amet consecte.' amount='99,999' />
						<CardActivity negative description='Facere fugi, ipsum ut aut maxime...' amount='99,999' />
						<CardActivity nutral description='Suscipit quisquam voluptati expedita.' amount='99,999' />
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
