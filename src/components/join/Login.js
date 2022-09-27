import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '../../schemas/forms.schema'
import JoinWrapper from '../../components/join/JoinWrapper'

const LoginForm = ({ login, setLogin }) => {
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
		<JoinWrapper login={login} setLogin={setLogin}>
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
