import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { VscError } from 'react-icons/vsc'

const NotFound = () => {
	return (
		<Layout>
			<Navbar />
			<div className='container'>
				<div className='notFound'>
					<div className='info'>
						<VscError />
						<h1>404</h1>
						<p>Page Not Found</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default NotFound
