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
		<nav className='navbar navbar-expand-lg footer-dark-bottom p-3 bg-dark shadow-none justify-content-between sticky-bottom'>
			<div className='container p-3'>
				<a className='navbar-brand ' href='#'>
					<Resume />
				</a>
				<div className='copyright justify-content-end'>
					<p className='pt-3'>
						Copyright&copy;
						{new Date().getFullYear()}&nbsp;Anthony Apicella | All Rights
						Reserved
					</p>
				</div>
				<div className='row justify-content-between'>
					<div className='circle col-3'>
						<a href='mailto:anthony.apicella@me.com'>
							<FontAwesomeIcon className='icon' icon={faEnvelope} size='2x' />
						</a>
					</div>
					<div className='circle col-3'>
						<a href='https://github.com/anthonyapicella' target='_blank'>
							<FontAwesomeIcon className='icon' icon={faGithub} size='2x' />
						</a>
					</div>
					<div className='circle col-3'>
						<a
							href='https://www.linkedin.com/in/anthony-apicella-a021301ba/'
							target='_blank'
						></a>
						<FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' />
					</div>
					<div className='circle col-3'>
						<a
							href='https://mobile.twitter.com/anthonyapicella'
							target='_blank'
						>
							<FontAwesomeIcon className='icon' icon={faTwitter} size='2x' />
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
