import Head from 'next/head'

const Layout = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title ? `EX-MAN | ${title}` : 'EX-MAN'}</title>
				<meta name='description' content='Everyday Expense Manager' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='window'>{children}</div>
		</>
	)
}

export default Layout
