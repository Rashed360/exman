import JoinWrapper from '../../components/join/JoinWrapper'
import Spinner from '../Spinner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpFormUserSchema } from '../../schemas/user.schema'
import { trpc } from '../../utils/trpc'
import { useRouter } from 'next/router'

const SignUpForm = () => {
	const router = useRouter()
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, touchedFields: touch },
	} = useForm({
		mode: 'onChange',
		resolver: zodResolver(signUpFormUserSchema),
	})

	const { mutateAsync, error, isLoading } = trpc.useMutation(['users.register-user'], {
		onSuccess: () => {
			router.push('/auth/login')
		},
	})

	const onSubmit = async values => {
		mutateAsync({
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			password: values.password,
		})
		reset()
	}

	return (
		<JoinWrapper login={false}>
			{isLoading && <Spinner />}
			<form className='content' onSubmit={handleSubmit(onSubmit)}>
				<p className='title'>Provide credentials to sign up to ex-man</p>

				{error && (
					<div className='formControl'>
						<p className='error_msg'>{error.message}</p>
					</div>
				)}

				<div className={`formControl${errors.firstName ? ' error' : ''}`}>
					<label>First Name</label>
					<input
						type='text'
						placeholder='John'
						{...register('firstName')}
						aria-invalid={errors.firstName ? 'true' : 'false'}
					/>
					{errors.firstName && (
						<ul>
							<li role='alert'>{errors.firstName.message}</li>
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

				<div className={`formControl${errors.email ? ' error' : touch.email ? ' okay' : ''}`}>
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
							<li role='info'>Valid Example - user@example.com</li>
						</ul>
					)}
				</div>

				<div className={`formControl${errors.password ? ' error' : touch.password ? ' okay' : ''}`}>
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
							<li role='info'>Example - Abcde!@#$12345</li>
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
