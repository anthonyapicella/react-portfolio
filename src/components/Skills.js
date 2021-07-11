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

import Zoom from 'react-reveal/Zoom';

class Skills extends React.Component {
	constructor(props) {
		super(props);
		this.state = { display: false };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({ display: !this.state.display });
	}
	render() {
		return (
			<div id='skills' className='skills'>
				<div className=''>
					<Zoom left cascade collapse when={this.state.display}>
						<div className='row'>
							<div className='col-lg-3 col-md-6 col-sm-6'>
								<div className='box shadow rounded'>
									<div className='circle'>
										<FontAwesomeIcon
											className='icon'
											icon={faHtml5}
											size='2x'
										/>
									</div>
									<p className='skill-text'>HTML5</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6'>
								<div className='box shadow rounded'>
									<div className='circle'>
										<FontAwesomeIcon className='icon' icon={faCss3} size='2x' />
									</div>
									<p className='skill-text'>CSS3</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6'>
								<div className='box shadow rounded'>
									<div className='circle'>
										<FontAwesomeIcon className='icon' icon={faJs} size='2x' />
									</div>
									<p className='skill-text'>JavaScript</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6'>
								<div className='box shadow rounded'>
									<div className='circle'>
										<FontAwesomeIcon
											className='icon'
											icon={faBootstrap}
											size='2x'
										/>
									</div>
									<p className='skill-text'>Bootstrap</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6'>
								<div className='box shadow rounded'>
									<div className='circle p-2'>
										<Icon className='svg-icon' icon={mysqlIcon} width={35} height={35} />
									</div>
									<p className='skill-text'>MySQL</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6'>
								<div className='box shadow rounded'>
									<div className='circle p-1'>
										<Icon className='svg-icon' icon={expressIcon} width={40} height={40} />
									</div>
									<p className='skill-text'>Express.js</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6'>
								<div className='box shadow rounded'>
									<div className='circle'>
										<FontAwesomeIcon
											className='icon'
											icon={faReact}
											size='2x'
										/>
									</div>
									<p className='skill-text'>React.js</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-6 col-sm-6'>
								<div className='box shadow rounded'>
									<div className='circle'>
										<FontAwesomeIcon
											className='icon'
											icon={faNodeJs}
											size='2x'
										/>
									</div>
									<p className='skill-text'>NODE.js</p>
								</div>
							</div>
						</div>
					</Zoom>
					<button
						className='btn btn-dark btn-lg btn-block my-1'
						type='button'
						onClick={this.handleClick}
					>
						{this.state.display ? 'Hide' : 'See'} myDevSkills
					</button>
				</div>
			</div>
		);
	}
}

export default Skills;
