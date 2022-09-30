import { BiPurchaseTag, BiX } from 'react-icons/bi'

const CardMiniTag = ({ tag }) => {
	return (
		<div className='mini_tag'>
			<BiPurchaseTag />
			<p>{tag}</p>
			<button type='button' className='mini_cross'>
				<BiX />
			</button>
		</div>
	)
}

export default CardMiniTag
