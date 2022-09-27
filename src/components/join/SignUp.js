import React from 'react'

const SignUpForm = ({ login }) => {
	return (
		<div className='content'>
			<p className='title'>Provide credentials to {login ? 'login' : 'sign up'} to ex-man</p>

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
				<button className='btn_primary'>{login ? 'Login' : 'SignUp'} Now</button>
			</div>

			<div className='formControl'>
				<button className='disabled'>{login ? 'Login' : 'SignUp'} Now</button>
			</div>
		</div>
	)
}

export default SignUpForm
