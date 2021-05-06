import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3,
	faJs,
    faReact,
	faBootstrap,
	faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

import { Icon, InlineIcon } from '@iconify/react';
import mysqlIcon from '@iconify-icons/grommet-icons/mysql';
import expressIcon from '@iconify-icons/simple-icons/express';

const Skills = () => {
	return (
		<div id='skills' className='skills'>
			<h3 className='py-5'>devSkills</h3>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faHtml5}
									size='2x'
								/>
							</div>
							<h4>HTML5</h4>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faCss3}
									size='2x'
								/>
							</div>
							<h4>CSS3</h4>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faJs}
									size='2x'
								/>
							</div>
							<h4>JavaScript</h4>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faBootstrap}
									size='2x'
								/>
							</div>
							<h4>Bootstrap</h4>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle p-2'>
								<Icon
									icon={mysqlIcon}
									width={35}
									height={35}
								/>
							</div>
							<h4>MySQL</h4>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle p-1'>
								<Icon
									icon={expressIcon}
									width={40}
									height={40}
								/>
							</div>
							<h4>Express.js</h4>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faReact}
									size='2x'
								/>
							</div>
							<h4>React.js</h4>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faNodeJs}
									size='2x'
								/>
							</div>
							<h4>NODE.js</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
