import Image from 'next/image'
import { BiTrash } from 'react-icons/bi'

const CardDisplayImage = ({ image }) => {
	const { url, name, size } = image
	const sizeInKB = size / 1024
	const sizeInMB = sizeInKB > 1024 ? (sizeInKB / 1024).toFixed(1) + ' MB' : sizeInKB.toFixed(1) + ' KB'
	return (
		<div className='display_image'>
			<div className='image_box'>
				<div className='image'>{url && <Image src={url} layout='fill' alt='' />}</div>
				<div className='text_group'>
					<p>{name}</p>
					<p className='subTitle'>{sizeInMB}</p>
				</div>
			</div>
			<button type='button'>
				<BiTrash />
			</button>
		</div>
	)
}

export default CardDisplayImage
