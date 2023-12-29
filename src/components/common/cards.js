import { useState } from 'react'
import { BiPaperclip, BiPurchaseTag } from 'react-icons/bi'
import CountUp from 'react-countup'

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
		<div className={'card card-main ' + type()}>
			<p className='card__title'>{title}</p>
			<h1 className='card__amount'>
				<CountUp duration={1} end={amount} />
			</h1>
		</div>
	)
}

export const CardActivity = ({ item }) => {
	const { type, title, description, amount, images, tags } = item
	const [showImages, setShowImages] = useState(false)
	const [showTags, setShowTags] = useState(false)

	const toggler = show => {
		if (show === 0) {
			setShowImages(!showImages)
		} else if (show === 1) {
			setShowTags(!showTags)
		}
	}

	const cardType = () => {
		if (type === 'INC') return 'card--positive_line'
		else if (type === 'EXP') return 'card--negative_line'
		else return ''
	}

	return (
		<div className={'card card-activity ' + cardType()}>
			<div className='card__body'>
				<p className='card__desc'>{title}</p>
				<h1>{amount}</h1>
			</div>
			<div className='card__extra'>
				<p>{description}</p>
				<div className='formGroup'>
					<div className='formControl'>
						<button
							type='button'
							className={`mini_button${showImages ? ' active' : ''}`}
							onClick={() => toggler(0)}
						>
							<BiPaperclip />
							{images.length > 0 ? 'Added Images x' + images.length : 'Add Images'}
						</button>
					</div>
					<div className='formControl'>
						<button
							type='button'
							className={`mini_button${showTags ? ' active' : ''}`}
							onClick={() => toggler(1)}
						>
							<BiPurchaseTag />
							{tags.length > 0 ? 'Added Tags x' + tags.length : 'Add Tags'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export const CardLoading = ({ data }) => {
	return (
		<div className='card card-activity'>
			<p className='card__desc'>{data}</p>
		</div>
	)
}
