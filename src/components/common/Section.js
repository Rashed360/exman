const Section = ({ title, children, subTitle, subTitleClick }) => {
	return (
		<div className='section'>
			{title ? (
				<div className='section__title'>
					<p>{title}</p>
					{subTitle && (
						<p className='clickable' onClick={subTitleClick}>
							{subTitle}
						</p>
					)}
				</div>
			) : null}
			{children}
		</div>
	)
}

export default Section
