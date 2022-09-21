import style from '../styles/Navbar.module.css'
import Logo from '../assets/Logo'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { VscThreeBars, VscPreview, VscDiffAdded, VscDiffRemoved, VscSignOut } from 'react-icons/vsc'

type Props = {
	toggleMode: string
}

const Navbar = ({ toggleMode }: Props) => {
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
						<div className={style.section}>
							<div className={style.profile}>
								<div className={style.avatar} onClick={toggleMode}>
									{false && <Image src='' layout='fill' alt='avatar' />}
								</div>
								<div className={style.info}>
									<p>Rashed Ahmed</p>
									<span>Regular User</span>
								</div>
							</div>
						</div>
						<div className={style.section}>
							<div className={style.navItems}>
								<NavItem name='Dashboard' link='/' icon={<VscPreview />} toggle={sidebarToggler} />
								<NavItem name='Add Money' link='/money' icon={<VscDiffAdded />} toggle={sidebarToggler} />
								<NavItem
									name='Add Expense'
									link='/expense'
									icon={<VscDiffRemoved />}
									toggle={sidebarToggler}
								/>
								<NavItem name='Logout' link='/join' icon={<VscSignOut />} toggle={sidebarToggler} />
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
