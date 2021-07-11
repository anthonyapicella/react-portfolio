import React from 'react';

// import { db } from '../../firebase';
// import { useState } from 'react';

// import { Helmet } from 'react-helmet';


const Contact = () => {
	// const [name, setName] = useState('');
	// const [email, setEmail] = useState('');
	// const [message, setMessage] = useState('');

	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	db.collection('contact').add({
	// 			name: name,
	// 			email: email,
	// 			message: message,
	// 		})
	// 		.then(() => {
	// 			alert('Your message has been submitted!');
	// 		})
	// 		.catch((error) => {
	// 			alert(error.message);
	// 		});

	// 	setName('');
	// 	setEmail('');
	// 	setMessage('');
	// };

	return (
		<div className='container'>
			<div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mx-auto text-center '>
				<form className='form-group'>
				{/* <form className='form-group' onSubmit={handleSubmit}> */}

					<h4 className='brand-title text-center p-3'>Contact</h4>
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
								// value={name}
								// onChange={(e) => setName(e.target.value)}
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
								// value={email}
								// onChange={(e) => setEmail(e.target.value)}
							></input>
						</div>
					</div>

					<div class='form-group'>
						<textarea
							className='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
							placeholder='message'
							// value={message}
							// onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>
					<button type='submit' className='btn btn-dark btn-block'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
