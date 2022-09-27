import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const AddMoney = () => {
	return (
		<Layout>
			<Navbar toggleMode='' />
			<div className='container'>
				<div className='section'>
					<p className='section__title'>User Profile</p>
					<div className='window_pane'>
						<div className='heading'>
							<h3>Profile</h3>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default AddMoney
