import JoinWrapper from '../../components/join/JoinWrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpFormSchema } from '../../schemas/forms.schema'
import { trpc } from '../../utils/trpc'
import { useRouter } from 'next/router'

const SignUpForm = () => {
	const router = useRouter()
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(signUpFormSchema),
	})

	const { mutate, error } = trpc.useMutation(['users.register-user'], {
		onSuccess: () => {
			router.push('/auth/login')
		},
	})

	const onSubmit = values => {
		mutate(values)
		reset()
	}

	return (
		<JoinWrapper login={false}>
			<form className='content' onSubmit={handleSubmit(onSubmit)}>
				<p className='title'>Provide credentials to sign up to ex-man</p>

				{error && (
					<div className='formControl'>
						<p className='error_msg'>{error.message}</p>
					</div>
				)}

				<div className={`formControl${errors.fisrtName ? ' error' : ''}`}>
					<label>First Name</label>
					<input
						type='text'
						placeholder='John'
						{...register('fisrtName')}
						aria-invalid={errors.fisrtName ? 'true' : 'false'}
					/>
					{errors.fisrtName && (
						<ul>
							<li role='alert'>{errors.fisrtName.message}</li>
						</ul>
					)}
				</div>

				<div className={`formControl${errors.lastName ? ' error' : ''}`}>
					<label>Last Name</label>
					<input
						type='text'
						placeholder='Doe'
						{...register('lastName')}
						aria-invalid={errors.lastName ? 'true' : 'false'}
					/>
					{errors.lastName && (
						<ul>
							<li role='alert'>{errors.lastName.message}</li>
						</ul>
					)}
				</div>

				<div className={`formControl${errors.email ? ' error' : ''}`}>
					<label>Email Address</label>
					<input
						type='text'
						placeholder='user@domain.com'
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

				<div className={`formControl${errors.confirmPassword ? ' error' : ''}`}>
					<label>Confirm Password</label>
					<input
						type='password'
						placeholder='••••••••••••••••'
						{...register('confirmPassword')}
						aria-invalid={errors.confirmPassword ? 'true' : 'false'}
					/>
					{errors.confirmPassword && (
						<ul>
							<li role='alert'>{errors.confirmPassword.message}</li>
						</ul>
					)}
					{errors.custom && (
						<ul>
							<li role='alert'>{errors.custom.message}</li>
						</ul>
					)}
				</div>

				<div className='formControl'>
					<button type='submit' className='btn_primary'>
						SignUp Now
					</button>
				</div>
			</form>
		</JoinWrapper>
	)
}

export default SignUpForm
