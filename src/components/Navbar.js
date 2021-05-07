import React from 'react';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark pl-5 pr-5 pb-2 justify-content-between sticky-top'>
			{/* <div className='container'> */}
			<a className='navbar-brand pl-1' href='#'>
				anthony<span className='camel-A'>A</span>picella
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
			<div
				className='collapse navbar-collapse justify-content-end m'
				id='navbarNav'
			>
				<ul className='navbar-nav'>
					<li className='nav-item active'>
						<a className='nav-link' href='#'>
							Home <span className='sr-only'>(current)</span>
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#aboutMe'>
							About Me
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#myWork'>
							My Work
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#resume'>
							Resume
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#contact'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
