import React from 'react';
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
		<div className='footer border-top sticky-bottom'>
			<div className='container p-3'>
				<div className='col-lg-4 col-md-4 col-sm-6 col-12 order-md-2 order-xs-1'>
					<div className='row'>
						<Nav className='mx-auto'>
							<Nav.Link eventKey='1' as={Link} to='/'>
								Home
							</Nav.Link>
							<Nav.Link eventKey='2' as={Link} to='/about'>
								About
							</Nav.Link>
							<Nav.Link eventKey='2' as={Link} to='/projects'>
								Projects
							</Nav.Link>
							<Nav.Link eventKey='2' as={Link} to='/resumepage'>
								Resume
							</Nav.Link>
							<Nav.Link eventKey='2' as={Link} to='/contact'>
								Contact
							</Nav.Link>
						</Nav>
					</div>
				</div>
				<div className='col-lg-4 col-md-4 col-sm-12 col-12 align-items-center order-last'>
					<div className='row mx-auto d-block d-sm-none'>
						<div className='row'>
							<Nav.Link className='col-4 p-3'>
								<i
									className='bi bi-envelope-fill h4'
									style={{ color: 'var(--tertiary)' }}
								></i>
							</Nav.Link>
							<Nav.Link className='col-4 p-3'>
								<i
									className='bi bi-github h4'
									style={{ color: 'var(--tertiary)' }}
								></i>
							</Nav.Link>
							<Nav.Link className='col-4 p-3'>
								<i
									className='bi bi-linkedin h4'
									style={{ color: 'var(--tertiary)' }}
								></i>
							</Nav.Link>
						</div>
					</div>
					<p className='pt-3 text-center footer-nav'>
						Copyright&copy;
						{new Date().getFullYear()}&nbsp; anthonyApps Anthony Apicella | All
						Rights Reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
