import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const AddExpense = () => {
	return (
		<Layout>
			<Navbar toggleMode='' />
			<div className='container'>
				<div className='section'>
					<p className='section__title'>Add Expense</p>
				</div>
			</div>
		</Layout>
	)
}
export default AddExpense
