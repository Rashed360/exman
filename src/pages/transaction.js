import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { BiPaperclip, BiPurchaseTag, BiTrash, BiX } from 'react-icons/bi'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddMoney = () => {
	const { register, handleSubmit } = useForm()
	const [showImages, setShowImages] = useState(false)
	const [showTags, setShowTags] = useState(false)
	const [useType, setUseType] = useState(true)
	const toggler = show => {
		if (show === 0) {
			setShowImages(!showImages)
		} else if (show === 1) {
			setShowTags(!showTags)
		} else {
			setUseType(!useType)
		}
	}
	const onSubmit = values => {
		console.log(values)
	}
	return (
		<Layout>
			<Navbar />
			<div className='container'>
				<div className='section'>
					<p className='section__title'>Add {useType ? 'expense' : 'money'} to your account</p>
					<div className='window_pane'>
						<div className='heading'>
							<div className='left'>
								<h3>Add {useType ? 'Expense' : 'Money'}</h3>
							</div>
							<div className='right'>
								<h3 className='inactive' onClick={toggler}>
									Add {useType ? 'Money' : 'Expense'}
								</h3>
							</div>
						</div>
						<form className='content' onSubmit={handleSubmit(onSubmit)}>
							<p className='title'>Provide amount and title</p>

							<div className='formControl'>
								<label htmlFor=''>
									Amount<span>*</span>
								</label>
								<input type='number' placeholder='99,999' {...register('amount')} />
							</div>
							<div className='formControl'>
								<label htmlFor=''>
									Title<span>*</span>
								</label>
								<input type='text' placeholder='Salary' {...register('title')} />
							</div>
							<div className='formControl'>
								<label htmlFor=''>Description</label>
								<textarea placeholder='..money got from salary..' {...register('description')} />
							</div>

							<div className='formGroup'>
								<div className='formControl'>
									<button className={`mini_button${showImages ? ' active' : ''}`} onClick={() => toggler(0)}>
										<BiPaperclip />
										Add Images
									</button>
								</div>
								<div className='formControl'>
									<button className={`mini_button${showTags ? ' active' : ''}`} onClick={() => toggler(1)}>
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
								<button className='btn_primary' type='submit'>
									Add {useType ? 'Expense' : 'Money'}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default AddMoney
