import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Spinner from '../../components/Spinner'

const Transaction = () => {
	const router = useRouter()
	useEffect(() => {
		router.push('/transaction/expense')
	}, [router])

	return <Spinner />
}

export default Transaction
