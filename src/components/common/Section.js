const Section = ({ title, children }) => {
	return (
		<div className='section'>
			{title ? <p className='section__title'>{title}</p> : null}
			{children}
		</div>
	)
}

export default Section
