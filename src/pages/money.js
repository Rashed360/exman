import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { BiPaperclip, BiPurchaseTag, BiTrash, BiX } from 'react-icons/bi'

const AddMoney = () => {
	return (
		<Layout>
			<Navbar toggleMode='' />
			<div className='container'>
				<div className='section'>
					<p className='section__title'>Add money to your account</p>
					<div className='window_pane'>
						<div className='heading'>
							<h3>Add Money</h3>
						</div>
						<div className='content'>
							<p className='title'>Provide amount and title</p>

							<div className='formControl'>
								<label htmlFor=''>
									Amount<span>*</span>
								</label>
								<input type='number' placeholder='99,999' />
							</div>
							<div className='formControl'>
								<label htmlFor=''>
									Title<span>*</span>
								</label>
								<input type='text' placeholder='Salary' />
							</div>
							<div className='formControl'>
								<label htmlFor=''>Description</label>
								<textarea placeholder='..money got from salary..' />
							</div>

							<div className='formGroup'>
								<div className='formControl'>
									<button className='mini_button active'>
										<BiPaperclip />
										Add Images
									</button>
								</div>
								<div className='formControl'>
									<button className='mini_button'>
										<BiPurchaseTag />
										Add Tags
									</button>
								</div>
							</div>

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
											<div className='image'>
												{/* <img src='' alt='' /> */}
											</div>
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
											<div className='image'>
												{/* <img src='' alt='' /> */}
											</div>
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

							<div className='formControl'>
								<button className='btn_primary'>Add Money</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default AddMoney
