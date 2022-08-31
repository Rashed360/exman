import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const Home = () => {
	return (
		<Layout>
			<Navbar />
			<div className='container'>
				<div className='cards'>
					<div className='card card--positive'>
						<p className='card__title'>Added</p>
						<h1 className='card__amount'>99,999</h1>
					</div>
					<div className='card card--negative'>
						<p className='card__title'>Removed</p>
						<h1 className='card__amount'>99,999</h1>
					</div>
					<div className='card card--nutral'>
						<p className='card__title'>Remaning</p>
						<h1 className='card__amount'>99,999</h1>
					</div>
				</div>

				<div className='section'>
					<p className='section__title'>Recent Activities</p>
					<div className='cards'>
						<div className='card activity card--positive_line'>
							<p className='card__desc'>Lorem ipsum dolor, sit amet consecte.</p>
							<h1>99,999</h1>
						</div>
						<div className='card activity card--negative_line'>
							<p className='card__desc'>Facere fugi, ipsum ut aut maxime...</p>
							<h1>99,999</h1>
						</div>
						<div className='card activity card--nutral_line'>
							<p className='card__desc'>Suscipit quisquam voluptati expedita.</p>
							<h1>99,999</h1>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Home
