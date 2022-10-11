import Layout from '../components/Layout'
import Logo from '../assets/Logo'
import Image from 'next/image'
import HomeMoney from '../assets/home.svg'
import SaveMoney from '../assets/save.svg'
import PlanMoney from '../assets/plan.svg'
import ReviewMoney from '../assets/review.svg'
import { useRouter } from 'next/router'
import { Slide } from 'react-slideshow-image'

const WelcomePage = () => {
	const { push } = useRouter()
	const slides = [
		{
			title: 'Plan Expense',
			desc: "Plan your expenses properly and don't waste money.",
			image: PlanMoney,
		},
		{
			title: 'Save Transaction',
			desc: 'Start by saving your incomes and expenses.',
			image: SaveMoney,
		},
		{
			title: 'Review Expense',
			desc: 'Get daily, weekly & monthly based reviews.',
			image: ReviewMoney,
		},
	]

	const properties = {
		transitionDuration: 500,
		infinite: true,
		indicators: true,
		arrows: false,
	}

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
					<Slide {...properties}>
						{slides.map((slide, index) => (
							<div className='slideshow' key={index}>
								<Image src={slide.image} width={100} height={130} alt='' />
								<h1>{slide.title}</h1>
								<p>{slide.desc}</p>
								{/* <div className='controllers'>
									<span></span>
									<span></span>
									<span></span>
								</div> */}
							</div>
						))}
					</Slide>
					{/* <div className='slideshow'>
						<Image src={HomeMoney} width={100} height={130} alt='' />
						<h1>{slide.title}</h1>
						<p>{slide.desc}</p>
						<div className='controllers'>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div> */}
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
