import PageContent from '../common/PageContent'
import Section from '../common/Section'
import Layout from '../Layout'
import Navbar from '../Navbar'
import { useRouter } from 'next/router'

const JoinWrapper = ({ login, children }) => {
	const { push } = useRouter()
	return (
		<Layout>
			<Navbar />
			<PageContent withContainer>
				<Section>
					<p className='section__title'>Login or create an account</p>
					<div className='window_pane'>
						<div className='heading'>
							<div className='left'>
								<h3>{login ? 'Login' : 'SignUp'}</h3>
							</div>

							<div className='right'>
								<h3 className='inactive' onClick={() => push(`/auth/${login ? 'signup' : 'login'}`)}>
									{login ? 'SignUp' : 'Login'}
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

export default JoinWrapper
