import React from 'react';
// font awesome

import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	NavDropdown,
	NavItem,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Navbar
			className='row mt-3 justify-content-around'
			id='navbarTop'
			sticky='bottom'
			collapseOnSelect
			expand='sm'
			bg='transparent'
			variant='light'
		>
			<div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 '>
				<div className='mx-auto d-flex justify-content-center'>
					<Nav.Item className=''>
						<Nav.Link
							className='col-4 p-3 text-center'
							href='mailto:anthony@anthonyapps.com'
						>
							<i
								className='bi bi-envelope-fill h4  secondary'
								style={{ color: 'var(--secondary)' }}
							></i>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item className=''>
						<Nav.Link
							className='col-4 p-3 text-center'
							href='https://www.linkedin.com/in/anthonyapicella/'
							target='_blank'
						>
							<i
								className='bi bi-linkedin h4 secondary'
								style={{ color: 'var(--secondary)' }}
							></i>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item className=''>
						<Nav.Link
							className='col-4 p-3 text-center'
							href='https://github.com/anthonyapicella'
							target='_blank'
						>
							<i
								className='bi bi-github h4 secondary'
								style={{ color: 'var(--secondary)' }}
							></i>
						</Nav.Link>
					</Nav.Item>
				</div>
			</div>
			<div className='col-lg-4 col-md-4 col-sm-6 col-xs-12 '>
				<div className='align-items-center'>
					<Nav className='mx-auto text-center footer-nav'>
						<Nav.Link className='mx-auto' eventKey='1' as={Link} to='/'>
							Home
						</Nav.Link>
						<Nav.Link className='mx-auto' eventKey='2' as={Link} to='/about'>
							About
						</Nav.Link>
						<Nav.Link
							className='mx-auto'
							eventKey='2'
							as={Link}
							to='/portfolio'
						>
							Portfolio
						</Nav.Link>
						{/* <Nav.Link
							className='mx-auto'
							eventKey='2'
							as={Link}
							to='/resumepage'
						>
							Resume
						</Nav.Link> */}
						<Nav.Link className='mx-auto' eventKey='2' as={Link} to='/contact'>
							Contact
						</Nav.Link>
					</Nav>
				</div>
			</div>
			<div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
				<div>
					<div
						className='text-center p-3'
						style={{ color: 'var(--secondary)' }}
					>
						Copyright&copy;
						{new Date().getFullYear()}&nbsp; Anthony Apicella | All Rights
						Reserved
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default Footer;
