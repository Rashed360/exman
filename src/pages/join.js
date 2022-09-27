import { useState } from 'react'
import LoginForm from '../components/join/Login'
import SignUpForm from '../components/join/SignUp'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const JoinUs = () => {
	const [login, setLogin] = useState(true)
	return (
		<Layout>
			<Navbar />
			<div className='container'>
				<div className='section'>
					<p className='section__title'>Login or create an account</p>
					<div className='window_pane'>
						<div className='heading'>
							<div className='left'>
								<h3>{login ? 'Login' : 'SignUp'}</h3>
							</div>
							<div className='right'>
								<h3 className='inactive' onClick={() => setLogin(!login)}>
									{login ? 'SignUp' : 'Login'}
								</h3>
							</div>
						</div>
						{login ? <LoginForm login={login} /> : <SignUpForm login={login} />}
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default JoinUs
