import React from 'react';
import Resume from './Resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faGithub,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Icon, InlineIcon } from '@iconify/react';

const Footer = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark px-5 pb-2justify-content-between fixed-bottom'>
			{/* <div className='container'> */}
			<a className='navbar-brand pl-1 pt-3' href='#'>
				<Resume />
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
				className='collapse navbar-collapse justify-content-center'
				id='navbarNav'
			>
				<div className='row justify-content-between'>
					<div className='circle px-4'>
						<a href='mailto:anthony.apicella@me.com'>
							<FontAwesomeIcon
								className='icon'
								icon={faEnvelope}
								size='2x'
							/>
						</a>
					</div>
					<div className='circle px-4'>
						<a
							href='https://github.com/anthonyapicella'
							target='_blank'
						>
							<FontAwesomeIcon
								className='icon'
								icon={faGithub}
								size='2x'
							/>
						</a>
					</div>
					<div className='circle px-4'>
						<a
							href='https://www.linkedin.com/in/anthony-apicella-a021301ba/'
							target='_blank'
						></a>
						<FontAwesomeIcon
							className='icon'
							icon={faLinkedin}
							size='2x'
						/>
					</div>
					<div className='circle px-4'>
						<a
							href='https://mobile.twitter.com/anthonyapicella'
							target='_blank'
						>
							<FontAwesomeIcon
								className='icon'
								icon={faTwitter}
								size='2x'
							/>
						</a>
					</div>
				</div>
			</div>
			<div className='copyright justify-content-end'>
				<p className='pt-3'>
					Copyright&copy;
					{new Date().getFullYear()}&nbsp;Anthony Apicella | All
					Rights Reserved
				</p>
			</div>
		</nav>
	);
};

export default Footer;
