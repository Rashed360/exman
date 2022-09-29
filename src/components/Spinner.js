import style from '../styles/Spinner.module.css'

export const Spinner = () => {
	return (
		<div className={style.spinner_page}>
			<div className={style.spinner}>
				<div class={style.lds_ring}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	)
}
