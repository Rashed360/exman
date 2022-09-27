import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpFormSchema } from '../../schemas/forms.schema'
import JoinWrapper from '../../components/join/JoinWrapper'

const SignUpForm = ({ login, setLogin }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(signUpFormSchema),
	})
	const onSubmit = values => {
		console.log(values)
	}
	return (
		<JoinWrapper login={login} setLogin={setLogin}>
			<form className='content' onSubmit={handleSubmit(onSubmit)}>
				<p className='title'>Provide credentials to sign up to ex-man</p>

				<div className='formControl'>
					<label htmlFor='email'>First Name</label>
					<input type='text' placeholder='John' />
				</div>

				<div className='formControl'>
					<label htmlFor='email'>Last Name</label>
					<input type='text' placeholder='Doe' />
				</div>

				<div className='formControl'>
					<label htmlFor='email'>Email Address</label>
					<input type='text' placeholder='user@domain.com' />
				</div>

				<div className='formControl'>
					<label htmlFor='email'>Password</label>
					<input type='password' placeholder='••••••••••••••••' />
				</div>

				<div className='formControl'>
					<label htmlFor='email'>Confirm Password</label>
					<input type='password' placeholder='••••••••••••••••' />
				</div>

				<div className='formControl'>
					<button className='btn_primary'>SignUp Now</button>
				</div>
			</form>
		</JoinWrapper>
	)
}

export default SignUpForm
