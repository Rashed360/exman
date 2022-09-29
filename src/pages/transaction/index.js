import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Spinner from '../../components/Spinner'
import { requireAuth } from '../../server/auth/requireAuth'

const Transaction = () => {
	const router = useRouter()
	useEffect(() => {
		router.push('/transaction/expense')
	}, [router])

	return <Spinner />
}

export const getServerSideProps = requireAuth(async ctx => {
	return { props: {} }
})

export default Transaction
