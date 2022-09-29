import Layout from '../Layout'
import Navbar from '../Navbar'
import PageContent from '../common/PageContent'
import Section from '../common/Section'
import { useRouter } from 'next/router'

const TransactionWrapper = ({ children, expense }) => {
	const { push } = useRouter()
	return (
		<Layout>
			<Navbar />
			<PageContent withContainer>
				<Section title={`Add ${expense ? 'expense' : 'money'} to your account`}>
					<div className='window_pane'>
						<div className='heading'>
							<div className='left'>
								<h3>Add {expense ? 'Expense' : 'Money'}</h3>
							</div>
							<div className='right'>
								<h3
									className='inactive'
									onClick={() => push(`/transaction/${expense ? 'money' : 'expense'}`)}
								>
									Add {expense ? 'Money' : 'Expense'}
								</h3>
							</div>
						</div>
						{children}
					</div>
				</Section>
			</PageContent>
		</Layout>
	)
}

export default TransactionWrapper
