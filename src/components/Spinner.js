import style from '../styles/Spinner.module.css'

const Spinner = () => {
	return (
		<div className={style.spinner_page}>
			<div className={style.spinner}>
				<div className={style.lds_ring}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	)
}
export default Spinner
