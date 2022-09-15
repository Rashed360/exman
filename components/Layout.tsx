import { FunctionComponent } from 'react'

type Props = {
	children: string
}

const Layout: FunctionComponent<Props> = ({ children }) => {
	return <div className='window'>{children}</div>
}

export default Layout
