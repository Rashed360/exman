import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Transaction = () => {
	const router = useRouter()
	useEffect(() => {
		router.push('/transaction/expense')
	}, [router])

	return <div>Loading</div>
}

export default Transaction
