import style from '../styles/Navbar.module.css'
import Logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { VscThreeBars, VscPreview, VscDiffAdded, VscDiffRemoved, VscSignOut } from 'react-icons/vsc'

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false)
	const sidebarToggler = () => setSidebar(!sidebar)
	return (
		<>
			<div className={style.navbar}>
				<div>
					<Image src={Logo} className={style.logoImage} width={35} height={17} alt='logo' />
					<span className={style.logoText}>Ex man</span>
				</div>
				<div className={style.toggleButton} onClick={sidebarToggler}>
					<VscThreeBars />
				</div>
			</div>
			{sidebar && (
				<div className={style.overlay} onClick={sidebarToggler}>
					<div className={style.sidebar}>
						<div className={style.sidebarHeader}>
							<div>
								<Image src={Logo} className={style.logoImage} width={35} height={17} alt='logo' />
								<span className={style.logoText}>Ex man</span>
							</div>
							<div className={style.toggleButton} onClick={sidebarToggler}>
								<VscThreeBars />
							</div>
						</div>
						<div className={style.section}>
							<div className={style.profile}>
								<div className={style.avatar}>{false && <Image src='' layout='fill' alt='avatar' />}</div>
								<div className={style.info}>
									<p>Rashed Ahmed</p>
									<span>Regular User</span>
								</div>
							</div>
						</div>
						<div className={style.section}>
							<div className={style.navItems}>
								<Link href='/'>
									<div className={style.navItem}>
										<VscPreview />
										<span>Dashboard</span>
									</div>
								</Link>
								<Link href='/money'>
									<div className={style.navItem}>
										<VscDiffAdded />
										<span>Add Money</span>
									</div>
								</Link>
								<Link href='/expense'>
									<div className={style.navItem}>
										<VscDiffRemoved />
										<span>Add Expense</span>
									</div>
								</Link>
								<Link href='/404'>
									<div className={style.navItem}>
										<VscSignOut />
										<span>Logout</span>
									</div>
								</Link>
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

export default Navbar
