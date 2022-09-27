import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
	email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Must be a valid email' }),
	password: z
		.string()
		.min(1, { message: 'Password must contain special symbols' })
		.min(8, { message: 'Password must be 8 characters long' }),
})

const LoginForm = ({ login }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	})
	const onSubmit = values => {
		console.log(values)
	}
	return (
		<form className='content' onSubmit={handleSubmit(onSubmit)}>
			<p className='title'>Provide credentials to {login ? 'login' : 'sign up'} to ex-man</p>

			<div className={`formControl${errors.email ? ' error' : ''}`}>
				<label>Email Address</label>
				<input
					type='text'
					placeholder='Email Address'
					{...register('email')}
					aria-invalid={errors.email ? 'true' : 'false'}
				/>
				{errors.email && (
					<ul>
						<li role='alert'>{errors.email.message}</li>
					</ul>
				)}
			</div>

			<div className={`formControl${errors.password ? ' error' : ''}`}>
				<label>Password</label>
				<input
					type='password'
					placeholder='••••••••••••••••'
					{...register('password')}
					aria-invalid={errors.password ? 'true' : 'false'}
				/>
				{errors.password && (
					<ul>
						<li role='alert'>{errors.password.message}</li>
					</ul>
				)}
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
