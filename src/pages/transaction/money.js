import TransactionWrapper from '../../components/transaction/TransactionWrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { addExpenseFormSchema } from '../../schemas/ledger.schema'
import { BiPaperclip, BiPurchaseTag, BiTrash, BiX } from 'react-icons/bi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddMoney = () => {
	const [showImages, setShowImages] = useState(false)
	const [showTags, setShowTags] = useState(false)

	const toggler = show => {
		if (show === 0) {
			setShowImages(!showImages)
		} else if (show === 1) {
			setShowTags(!showTags)
		}
	}

	const {
		register,
		handleSubmit,
		formState: { errors, touchedFields: touch },
	} = useForm({
		resolver: zodResolver(addExpenseFormSchema),
	})

	const onSubmit = values => {
		console.log({ ...values, type: 'INC' })
	}

	return (
		<TransactionWrapper expense={false}>
			<form className='content' onSubmit={handleSubmit(onSubmit)}>
				<p className='title'>Provide amount and title</p>

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
							Add Images
						</button>
					</div>
					<div className='formControl'>
						<button
							type='button'
							className={`mini_button${showTags ? ' active' : ''}`}
							onClick={() => toggler(1)}
						>
							<BiPurchaseTag />
							Add Tags
						</button>
					</div>
				</div>

				{showImages && (
					<div className='formSection'>
						<div className='formControl'>
							<label htmlFor=''>Add Image</label>
							<input type='file' />
							<ul>
								<li>02 image(s) added.</li>
							</ul>
						</div>
						<div className='formGroup vertical'>
							<div className='display_image'>
								<div className='image_box'>
									<div className='image'>{/* <img src='' alt='' /> */}</div>
									<div className='text_group'>
										<p>20220920_18426.jpg</p>
										<p className='subTitle'>405KB</p>
									</div>
								</div>
								<button>
									<BiTrash />
								</button>
							</div>
							<div className='display_image'>
								<div className='image_box'>
									<div className='image'>{/* <img src='' alt='' /> */}</div>
									<div className='text_group'>
										<p>20220920_18427.jpg</p>
										<p className='subTitle'>405KB</p>
									</div>
								</div>
								<button>
									<BiTrash />
								</button>
							</div>
						</div>
					</div>
				)}

				{showTags && (
					<div className='formSection'>
						<div className='formControl'>
							<label htmlFor=''>Add Tags</label>
							<div className='inputGroup'>
								<input type='text' placeholder='Salary' />
								<button>Add</button>
							</div>
						</div>
						<div className='formGroup'>
							<div className='mini_tags'>
								<div className='mini_tag'>
									<BiPurchaseTag />
									Salary
									<button className='mini_cross'>
										<BiX />
									</button>
								</div>
								<div className='mini_tag'>
									<BiPurchaseTag />
									Bonus
									<button className='mini_cross'>
										<BiX />
									</button>
								</div>
							</div>
						</div>
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
export default AddMoney
