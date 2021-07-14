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

const NavTop = () => {
	return (
		<Navbar
			className='shadow'
			id='navbarTop'
			sticky='top'
			collapseOnSelect
			expand='sm'
			bg='dark'
			variant='dark'
		>
			<div className='container'>
				<Navbar.Brand href='/' className='brand'>
					anthonyApps
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mx-auto'>
						<Nav.Link eventKey='1' as={Link} to='/'>
							Home
						</Nav.Link>
						<Nav.Link eventKey='2' as={Link} to='/about'>
							About
						</Nav.Link>
						<Nav.Link eventKey='2' as={Link} to='/portfolio'>
							Portfolio
						</Nav.Link>
						{/* <Nav.Link eventKey='2' as={Link} to='/resumepage'>
							Resume
						</Nav.Link> */}
						<Nav.Link eventKey='2' as={Link} to='/contact'>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<div className='row d-none d-sm-block'>
					<div className='row'>
						<Nav.Link
							className='col-4 p-3'
							href='mailto:anthony@anthonyapps.com'
						>
							<i
								className='bi bi-envelope-fill h4'
								style={{ color: 'var(--tertiary)' }}
							></i>
						</Nav.Link>
						<Nav.Link
							className='col-4 p-3'
							href='https://www.linkedin.com/in/anthonyapicella/'
							target='_blank'
						>
							<i
								className='bi bi-github h4'
								style={{ color: 'var(--tertiary)' }}
							></i>
						</Nav.Link>
						<Nav.Link
							className='col-4 p-3'
							href='https://github.com/anthonyapicella'
							target='_blank'
						>
							<i
								className='bi bi-linkedin h4'
								style={{ color: 'var(--tertiary)' }}
							></i>
						</Nav.Link>
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default NavTop;
