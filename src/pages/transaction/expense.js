import TransactionWrapper from '../../components/transaction/TransactionWrapper'
import CardDisplayImage from '../../components/transaction/CardDisplayImage'
import CardMiniTag from '../../components/transaction/CardMiniTag'
import Spinner from '../../components/Spinner'
import { zodResolver } from '@hookform/resolvers/zod'
import { addExpenseFormSchema } from '../../schemas/ledger.schema'
import { BiPaperclip, BiPurchaseTag } from 'react-icons/bi'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { trpc } from '../../utils/trpc'
import { storage } from '../../utils/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { requireAuth } from '../../server/auth/requireAuth'

const AddExpense = () => {
	const { push } = useRouter()
	const { data: session } = useSession()
	const [showImages, setShowImages] = useState(false)
	const [showTags, setShowTags] = useState(false)
	const [selectedImageList, setSelectedImageList] = useState([])
	const [selectedTagList, setSelectedTagList] = useState([])
	const [currentTag, setCurrentTag] = useState('')
	const [currentImage, setCurrentImage] = useState(null)
	const [noImageError, setNoImageError] = useState(false)
	const [noTagError, setNoTagError] = useState(false)
	const imageRef = useRef()

	const toggler = show => {
		if (show === 0) {
			setShowImages(!showImages)
		} else if (show === 1) {
			setShowTags(!showTags)
		}
	}

	const uploadImageToStorage = async () => {
		if (!currentImage) {
			setNoImageError({ msg: 'No image selected.' })
		} else if (selectedImageList.length >= 2) {
			setNoImageError({ msg: 'Ony 2 images are allowed.' })
			imageRef.current.value = ''
		} else {
			setNoImageError(false)
			const imgRef = ref(storage, session.user.id + '/' + v4())
			uploadBytes(imgRef, currentImage).then(snapshot => {
				getDownloadURL(snapshot.ref).then(url => {
					setSelectedImageList(prev => [...prev, { url, name: currentImage.name, size: currentImage.size }])
					setCurrentImage(null)
				})
			})
			imageRef.current.value = ''
		}
	}

	const addTagToLedger = () => {
		if (currentTag === '') {
			setNoTagError({ msg: 'Tag cannot be empty.' })
		} else if (currentTag.length > 15) {
			setNoTagError({ msg: 'Tag cannot be that long.' })
		} else {
			setNoTagError(false)
			setSelectedTagList(prev => [...prev, currentTag])
			setCurrentTag('')
		}
	}

	const { mutate, error, isLoading } = trpc.useMutation(['ledger.add-expense'], {
		onSuccess: () => {
			push('/transaction')
		},
	})

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, touchedFields: touch },
	} = useForm({
		resolver: zodResolver(addExpenseFormSchema),
	})

	const onSubmit = values => {
		mutate({ ...values, type: 'EXP', user: session.user.id })
		reset()
	}

	return (
		<TransactionWrapper expense={true}>
			{isLoading && <Spinner />}
			<form className='content' onSubmit={handleSubmit(onSubmit)}>
				<p className='title'>Provide amount and title</p>

				{error && (
					<div className='formControl'>
						<p className='error_msg'>{error.message}</p>
					</div>
				)}

				<div className={`formControl${errors.amount ? ' error' : touch.amount ? ' okay' : ''}`}>
					<label>
						Amount<span>*</span>
					</label>
					<input
						type='number'
						step='0.01'
						placeholder='99.99'
						{...register('amount', {
							valueAsNumber: true,
						})}
					/>
					{errors.amount && (
						<ul>
							<li role='alert'>{errors.amount.message}</li>
						</ul>
					)}
				</div>
				<div className={`formControl${errors.title ? ' error' : touch.title ? ' okay' : ''}`}>
					<label>
						Title<span>*</span>
					</label>
					<input type='text' placeholder='Salary' {...register('title')} />
					{errors.title && (
						<ul>
							<li role='alert'>{errors.title.message}</li>
						</ul>
					)}
				</div>
				<div className={`formControl${errors.description ? ' error' : touch.description ? ' okay' : ''}`}>
					<label>Description</label>
					<textarea placeholder='..money got from salary..' {...register('description')} />
					{errors.description && (
						<ul>
							<li role='alert'>{errors.description.message}</li>
						</ul>
					)}
				</div>

				<div className='formGroup'>
					<div className='formControl'>
						<button
							type='button'
							className={`mini_button${showImages ? ' active' : ''}`}
							onClick={() => toggler(0)}
						>
							<BiPaperclip />
							{selectedImageList.length > 0 ? 'Added Images x' + selectedImageList.length : 'Add Images'}
						</button>
					</div>
					<div className='formControl'>
						<button
							type='button'
							className={`mini_button${showTags ? ' active' : ''}`}
							onClick={() => toggler(1)}
						>
							<BiPurchaseTag />

							{selectedTagList.length > 0 ? 'Added Tags x' + selectedTagList.length : 'Add Tags'}
						</button>
					</div>
				</div>

				{showImages && (
					<div className='formSection'>
						<div className={`formControl${noImageError ? ' error' : ''}`}>
							<label htmlFor=''>Add Image</label>
							<div className='inputGroup'>
								<input
									className='upload'
									type='file'
									accept='image/*'
									onChange={e => {
										setCurrentImage(e.currentTarget.files[0])
										setNoImageError(false)
									}}
									ref={imageRef}
								/>
								<button type='button' onClick={uploadImageToStorage}>
									Add
								</button>
							</div>
							<ul>
								{noImageError && <li role='alert'>{noImageError.msg}</li>}
								<li role='info'>{selectedImageList.length} image(s) added.</li>
							</ul>
						</div>

						<div className='formGroup vertical'>
							{selectedImageList.map((img, idx) => (
								<CardDisplayImage image={img} key={idx} />
							))}
						</div>
					</div>
				)}

				{showTags && (
					<div className='formSection'>
						<div className={`formControl${noTagError ? ' error' : ''}`}>
							<label htmlFor=''>Add Tags</label>
							<div className='inputGroup'>
								<input
									type='text'
									placeholder='Salary'
									value={currentTag}
									onChange={e => setCurrentTag(e.target.value)}
								/>
								<button type='button' onClick={addTagToLedger}>
									Add
								</button>
							</div>
							{noTagError && (
								<ul>
									<li role='alert'>{noTagError.msg}</li>
								</ul>
							)}
						</div>
						{selectedTagList.length > 0 && (
							<div className='formGroup'>
								<div className='mini_tags'>
									{selectedTagList.map((tag, idx) => (
										<CardMiniTag tag={tag} key={idx} />
									))}
								</div>
							</div>
						)}
					</div>
				)}

				<div className='formControl'>
					<button type='submit' className='btn_primary'>
						Add Expense
					</button>
				</div>
			</form>
		</TransactionWrapper>
	)
}
export default AddExpense

export const getServerSideProps = requireAuth(async ctx => {
	return { props: {} }
})
