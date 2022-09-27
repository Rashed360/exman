import { useForm } from 'react-hook-form'

const LoginForm = ({ login }) => {
	const { register, handleSubmit } = useForm()
	const onSubmit = values => {
		console.log(values)
	}
	return (
		<form className='content' onSubmit={handleSubmit(onSubmit)}>
			<p className='title'>Provide credentials to {login ? 'login' : 'sign up'} to ex-man</p>

			<div className='formControl'>
				<label>Email Address</label>
				<input {...register('email')} type='email' placeholder='Email Address' />
			</div>

			<div className='formControl'>
				<label>Password</label>
				<input {...register('password')} type='password' placeholder='••••••••••••••••' />
				<ul>
					<li>Password must be 8 characters long</li>
					<li>Password must contain special symbols</li>
				</ul>
			</div>

			<div className='formControl'>
				<button className='btn_primary' type='submit'>
					{login ? 'Login' : 'SignUp'} Now
				</button>
			</div>
		</form>
	)
}

export default LoginForm
