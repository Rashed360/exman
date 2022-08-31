import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const JoinUs = () => {
	return (
		<Layout>
			<Navbar />
			<div className='container'>
				<div className='section'>
					<p className='section__title'>Login or create an account</p>
					<div className='joinUs'>
						<div className='heading'>
							<div className='left'>
								<h3>Login</h3>
							</div>
							<div className='right'>
								<h3 className='inactive'>SignUp</h3>
							</div>
						</div>
						<div className='content'>
							<p className='title'>Provide credentials to login to ex-man</p>

							<div className='formControl'>
								<label htmlFor='email'>Email Address</label>
								<input type='text' name='email' className='' placeholder='Email Address' />
							</div>

							<div className='formControl'>
								<label htmlFor='email'>Password</label>
								<input type='text' name='email' className='' placeholder='••••••••••••••••••' />
								<ul>
									<li>Password must be 8 characters long</li>
									<li>Password must contain special symbols</li>
								</ul>
							</div>

							<div className='formControl okay'>
								<label htmlFor='email'>Password (Okay)</label>
								<input type='text' name='email' className='' placeholder='••••••••••••••••••' />
								<ul>
									<li>Looks Good</li>
								</ul>
							</div>

							<div className='formControl error'>
								<label htmlFor='email'>Password (Error)</label>
								<input type='text' name='email' className='' placeholder='••••••••••••••••••' />
								<ul>
									<li>Invalid Password</li>
								</ul>
							</div>

							<div className='formControl'>
								<button>Login Now</button>
							</div>

							<div className='formControl'>
								<button className='disabled'>Login Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default JoinUs
