import React, { useState } from 'react';

import axios from 'axios';

const Contact = () => {
	const [sent, setSent] = useState(false);
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSend = async () => {
		setSent(true);
		try {
			await axios.post('http://localhost:4000/send_mail', {
				fullName,
				email,
				message,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='container'>
			<h4 className='brand-title text-center p-3'>Contact</h4>

			<div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mx-auto text-center '>
				{!sent ? (
					<form className='form-group' onSubmit={handleSend}>
						<div className='form-row'>
							<div className='form-group input-group col-m-6'>
								<div className='input-group-prepend'>
									<div className='input-group-text'>
										<i className='bi bi-person'></i>
									</div>
								</div>
								<input
									type='name'
									name='fulltName'
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
						<h6 className='p-4'>Form submitted, thank you!</h6>
					</div>
				)}
			</div>
		</div>
	);
};

export default Contact;
