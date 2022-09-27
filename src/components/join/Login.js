import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '../../schemas/forms.schema'

const LoginForm = ({ login }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
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
