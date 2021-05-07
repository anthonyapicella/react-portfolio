import React from 'react';
import resume from '../assets/downloads/anthonyApicellaResume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
	return (
		<div id='resume' className='align-self-center'>
			<a href={resume} target='_blank'>
				{' '}
				<p>
					resume{' '}
					<FontAwesomeIcon
						className='icon'
						icon={faDownload}
						size='1x'
					/>
				</p>
			</a>
		</div>
	);
};

export default Resume;
