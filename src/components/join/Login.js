import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormUserSchema } from '../../schemas/user.schema'
import JoinWrapper from '../../components/join/JoinWrapper'
import Spinner from '../Spinner'
import { useState } from 'react'

const LoginForm = () => {
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormUserSchema),
	})

	const onSubmit = async values => {
		setLoading(true)
		await signIn('credentials', { ...values, callbackUrl: '/' }).then(() => setLoading(false))
	}

	return (
		<JoinWrapper login={true}>
			{loading && <Spinner />}
			<form className='content' onSubmit={handleSubmit(onSubmit)}>
				<p className='title'>Provide credentials to login to ex-man</p>

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
						Login Now
					</button>
				</div>
			</form>
		</JoinWrapper>
	)
}

export default LoginForm
