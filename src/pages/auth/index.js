import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Spinner from '../../components/Spinner'

const Auth = () => {
	const router = useRouter()
	useEffect(() => {
		router.push('/auth/login')
	}, [router])

	return <Spinner />
}

export default Auth
