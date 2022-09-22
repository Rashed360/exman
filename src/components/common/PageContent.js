const PageContent = ({ withContainer, children }) => {
	if (withContainer) {
		return (
			<div className='page'>
				<div className='container'>{children}</div>
			</div>
		)
	}
	return <div className='page'>{children}</div>
}

export default PageContent
