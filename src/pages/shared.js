import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const SharedExpense = () => {
	return (
		<Layout>
			<Navbar toggleMode='' />
			<div className='container'>
				<div className='section'>
					<p className='section__title'>SharedExpense</p>
				</div>
			</div>
		</Layout>
	)
}
export default SharedExpense
