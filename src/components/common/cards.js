export const CardsContainer = ({ children }) => {
	return <div className='cards'>{children}</div>
}

export const CardInfo = ({ title, amount, positive, negative, nutral }) => {
	const type = () => {
		if (positive) return 'card--positive'
		else if (negative) return 'card--negative'
		else if (nutral) return 'card--nutral'
		else return ''
	}
	return (
		<div className={'card ' + type()}>
			<p className='card__title'>{title}</p>
			<h1 className='card__amount'>{amount}</h1>
		</div>
	)
}

export const CardActivity = ({ description, amount, type }) => {
	const cardType = () => {
		if (type === 'INC') return 'card--positive_line'
		else if (type === 'EXP') return 'card--negative_line'
		else return ''
	}
	return (
		<div className={'card activity ' + cardType()}>
			<p className='card__desc'>{description}</p>
			<h1>{amount}</h1>
		</div>
	)
}

export const CardLoading = ({ data }) => {
	return (
		<div className='card activity'>
			<p className='card__desc'>{data}</p>
		</div>
	)
}
