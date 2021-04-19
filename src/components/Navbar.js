import React from 'react';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<a className='navbar-brand' href='#'>
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
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							My Work
						</a>
					</li>
                    <li className='nav-item'>
						<a className='nav-link' href='#'>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
