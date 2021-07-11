import React, { useState } from 'react';

const ContactForm = () => {
	const [status, setStatus] = useState('Submit');
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('Sending...');
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		let response = await fetch('http://localhost:3000/booking', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(details),
		});
		setStatus('Submit');
		let result = await response.json();
		alert(result.status);
	};
	return (
		<div className='container justify-content-center'>
			<div className='row'>
				<form id='contact-form' className='mx-auto col-xs-12 col-sm-10 col-md-8 col-lg-6'>
					<div className='form-group'>
						<label htmlFor='name'>Name</label>
						<input type='text' className='form-control' />
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputEmail1'>Email address</label>
						<input
							type='email'
							className='form-control'
							aria-describedby='emailHelp'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message</label>
						<textarea className='form-control' rows='5'></textarea>
					</div>
					<div className='text-center'>
						<button type='submit' className='btn btn-link brand-title'>
							<h3>Submit</h3>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
