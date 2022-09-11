import { useColorMode } from '../hooks/useColorMode'

const Layout = ({ children }) => {
	const [lightMode] = useColorMode()
	return <div className={`window${lightMode ? ' lightMode' : ''}`}>{children}</div>
}

export default Layout
