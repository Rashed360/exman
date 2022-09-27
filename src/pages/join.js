import LoginForm from '../components/join/Login'
import { useState } from 'react'
import SignUpForm from '../components/join/SignUp'

const JoinUs = () => {
	const [login, setLogin] = useState(true)

	if (login) {
		return <LoginForm login={login} setLogin={setLogin} />
	}
	return <SignUpForm login={login} setLogin={setLogin} />
}

export default JoinUs
