import Layout from '../components/Layout'
import Logo from '../assets/Logo'
import Image from 'next/image'
import HomeMoney from '../assets/HomeMoney.svg'
import { useRouter } from 'next/router'

const WelcomePage = () => {
	const { push } = useRouter()
	const slides = [
		{
			title: 'Plan Expense',
			desc: "Plan your expenses properly and don't waste money.",
			image: '',
		},
	]
	return (
		<Layout>
			<div className='start_page'>
				<div className='logoSection'>
					<div className='centerDiv'>
						<Logo />
						<h1>ex man</h1>
						<p>
							Welcome to EX-MAN,
							<br /> Your Everyday Expense Manager
						</p>
					</div>
				</div>
				<div className='descSection'>
					<div className='slideshow'>
						<Image src={HomeMoney} width={100} height={130} alt='' />
						<h1>{slides[0].title}</h1>
						<p>{slides[0].desc}</p>
						<div className='controllers'>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

					<div className='formControl'>
						<button className='btn_primary' onClick={() => push('/auth/login')}>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default WelcomePage
