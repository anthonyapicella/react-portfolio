import React, { useState } from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {
	const [sent, setSent] = useState(false);
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_tulswpa',
				'template_9g3momq',
				e.target,
				'user_jZu7XYoghnCIn8M7kbo8i'
			)
			.then(
				setSent(true),
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<div className='container'>
			<h4 className='brand-title text-center p-3'>Contact</h4>
			<p className="p-3 text-center">Please fill out the form below </p>
			<div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mx-auto text-center '>
				{!sent ? (
					<form className='form-group' onSubmit={sendEmail}>
						<div className='form-row'>
							<div className='form-group input-group col-m-6'>
								<div className='input-group-prepend'>
									<div className='input-group-text'>
										<i className='bi bi-person'></i>
									</div>
								</div>
								<input
									type='name'
									name='name'
									className='form-control'
									placeholder='Full Name'
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									required


								/>
							</div>
						</div>
						<div class='form-group'>
							<div className='input-group-prepend'>
								<div className='input-group-text'>
									<i className='bi bi-envelope'></i>
								</div>
								<input
									type='email'
									class='form-control'
									id='exampleFormControlInput1'
									placeholder='E-mail'
									name='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required

								></input>
							</div>
						</div>  

						<div class='form-group'>
							<textarea
								className='form-control'
								id='exampleFormControlTextarea1'
								rows='3'
								placeholder='message'
								name='message'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required

							></textarea>
						</div>
						<button type='submit' className='btn btn-dark btn-block'>
							Submit
						</button>
					</form>
				) : (
					<div className='card border-2 mx-auto'>
						<p className='p-4'>Thank you for your submission - I will get back to you shortly!  <br />
						</p>
					</div>
				)}
			</div>
		</div>

		// <form className='contact-form' onSubmit={sendEmail}>
		// 	<label>Name</label>
		// 	<input type='text' name='name' />
		// 	<label>Email</label>
		// 	<input type='email' name='email' />
		// 	<label>Subject</label>
		// 	<input type='text' name='subject' />
		// 	<label>Message</label>
		// 	<textarea name='message' />
		// 	<input type='submit' value='Send' />
		// </form>
	);
}
