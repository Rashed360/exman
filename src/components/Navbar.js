import style from '../styles/Navbar.module.css'
import Logo from '../assets/Logo'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { VscThreeBars, VscPreview, VscDiffRemoved, VscSignOut } from 'react-icons/vsc'

const Navbar = () => {
	const { status, data } = useSession()
	const { toggleLightMode } = useContext(ThemeContext)
	const [sidebar, setSidebar] = useState(false)
	const sidebarToggler = () => setSidebar(!sidebar)
	return (
		<>
			<div className={style.navbar}>
				<div>
					<Logo className={style.logoImage} />
					<span className={style.logoText}>Ex man</span>
				</div>
				<div className={style.toggleButton} onClick={sidebarToggler}>
					<VscThreeBars />
				</div>
			</div>
			{sidebar && (
				<div className={style.overlay} onClick={sidebarToggler}>
					<div className={style.sidebar} onClick={e => e.stopPropagation()}>
						<div className={style.sidebarHeader}>
							<div>
								<Logo className={style.logoImage} />
								<span className={style.logoText}>Ex man</span>
							</div>
							<div className={style.toggleButton} onClick={sidebarToggler}>
								<VscThreeBars />
							</div>
						</div>

						{status === 'authenticated' && (
							<div className={style.section}>
								<div className={style.profile}>
									<div className={style.avatar} onClick={toggleLightMode}>
										{data.user.image && <Image src={data.user.image} layout='fill' alt='avatar' />}
									</div>
									<div className={style.info}>
										<p>
											{data.user.name
												? data.user.name
												: data.user.firstName + ' ' + data.user.lastName || 'User Name'}
										</p>
										<span>{data.user.email || 'Regular User'}</span>
									</div>
								</div>
							</div>
						)}

						<div className={style.section}>
							<div className={style.navItems}>
								{status === 'authenticated' ? (
									<>
										<NavItem name='Dashboard' link='/' icon={<VscPreview />} toggle={sidebarToggler} />
										<NavItem
											name='Transaction'
											link='/transaction'
											icon={<VscDiffRemoved />}
											toggle={sidebarToggler}
										/>

										<NavItem
											name='Plan Expense'
											link='/plan'
											icon={<VscDiffRemoved />}
											toggle={sidebarToggler}
										/>

										<NavItem
											name='Statistics'
											link='/statistics'
											icon={<VscDiffRemoved />}
											toggle={sidebarToggler}
										/>

										<NavItem
											name='Generate Reports'
											link='/reports'
											icon={<VscDiffRemoved />}
											toggle={sidebarToggler}
										/>

										<div
											className={style.navItem}
											onClick={() => {
												sidebarToggler()
												signOut({ callbackUrl: '/' })
											}}
										>
											<VscSignOut />
											<span>Logout</span>
										</div>
									</>
								) : (
									<>
										<NavItem
											name='Welcome'
											link='/welcome'
											icon={<VscDiffRemoved />}
											toggle={sidebarToggler}
										/>

										<NavItem
											name='Login'
											link='/auth/login'
											icon={<VscDiffRemoved />}
											toggle={sidebarToggler}
										/>

										<NavItem
											name='Sign Up'
											link='/auth/signup'
											icon={<VscDiffRemoved />}
											toggle={sidebarToggler}
										/>
									</>
								)}
							</div>
						</div>

						<div className={style.sidebarFooter}>
							<div className={style.section}>
								<p>EXMAN &copy; 2022. All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

const NavItem = ({ name, link, icon, toggle }) => {
	return (
		<Link href={link}>
			<div className={style.navItem} onClick={toggle}>
				{icon}
				<span>{name}</span>
			</div>
		</Link>
	)
}

export default Navbar
