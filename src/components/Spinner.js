import Logo from '../assets/Logo'

const Spinner = () => {
	return (
		<div className='spinner_page'>
			<div className='logoSection'>
				<Logo />
				<h1>ex-man</h1>
			</div>
			<div className='descSection'>
				<p>
					Welcome to EX-MAN,
					<br /> Your Everyday Expense Manager
				</p>
			</div>
		</div>
	)
}

export default Spinner
