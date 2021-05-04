import React from 'react';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark p-3'>
			{/* <div className='container'> */}
			<a className='navbar-brand ml-1' href='#'>
				Anthony Apicella
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav mx-auto'>
					<li className='nav-item active'>
						<a className='nav-link' href='#'>
							Home <span className='sr-only'>(current)</span>
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							About Me
						</a>
					</li>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							data-toggle='dropdown'
							href='#'
							role='button'
							aria-haspopup='true'
							aria-expanded='false'
						>
							My Work
						</a>
						<div className='dropdown-menu'>
							<a className='dropdown-item' href='#'>
								Project #1
							</a>
							<a className='dropdown-item' href='#'>
								Project #2
							</a>
							<a className='dropdown-item' href='#'>
								Project #3
							</a>
							<div className='dropdown-divider'></div>
							<a className='dropdown-item' href='#'>
								Separated link
							</a>
						</div>
					</li>

					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Resume
						</a>
					</li>
				</ul>
			</div>
			{/* </div> */}
		</nav>
	);
};

export default Navbar;
