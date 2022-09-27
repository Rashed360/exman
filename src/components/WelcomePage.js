import Logo from '../assets/Logo'
import Image from 'next/image'
import HomeMoney from '../assets/HomeMoney.svg'
import { useRouter } from 'next/router'

const WelcomePage = () => {
	const router = useRouter()
	const setOldUser = () => {
		localStorage.setItem('lightMode', false)
		router.push('/join')
	}
	return (
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
					<Image src={HomeMoney} width={100} height={130} />
					<h1>Plan Expense</h1>
					<p>Plan your expenses properly and don't waste money.</p>
					<div className='controllers'>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className='formControl'>
					<button className='btn_primary' onClick={setOldUser}>
						Get Started
					</button>
				</div>
			</div>
		</div>
	)
}

export default WelcomePage
