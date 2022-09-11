const Layout = ({ mode, children }) => {
	return <div className={`window${mode ? ' lightMode' : ''}`}>{children}</div>
}

export default Layout
