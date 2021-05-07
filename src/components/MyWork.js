import React from 'react';
import holodex from '../assets/img/Title.png';
// import holodexScreen from '../assets/img/Screen.png';
import empTrack from '../assets/img/12_MYSQL.gif';
import eCommerce from '../assets/img/backend1.png';
import teamProfile from '../assets/img/TPG1.png';
// import teamProfile2 from '../assets/img/TPG2.png';
import virtualPark from '../assets/img/VTPscreen.png';
import weather from '../assets/img/Weather.gif';
import XP from '../assets/img/XPpedia.gif';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const MyWork = () => {
	// HOLODEX ***********
	const openPopupboxHolodex = () => {
		const content = (
			<>
				<img
					className='project-image-popupbox'
					src={holodex}
					alt='Star Wars: Holodex'
				/>
				<p>
					HOLODEX is a Star Wars wiki viewed through a virtual
					handheld device styled in the theme of the universe.
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://shielded-savannah-30598.herokuapp.com/',
							'_blank'
						)
					}
				>
					Star Wars: Holodex
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/anthonyapicella/holomap',
							'_blank'
						)
					}
				>
					https://github.com/anthonyapicella/holomap
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigHolodex = {
		titleBar: {
			enable: true,
			text: 'Interactive Star Wars Database',
		},
		// fadeIn: true,
		// fadeInSpeed: 500,
	};

	// EMPLOYEE TRACKER ***********
	const openPopupboxEmpTracker = () => {
		const content = (
			<>
				<img
					className='project-image-popupbox'
					src={empTrack}
					alt='Employee Tracker'
				/>
				<p>
					Employee Tracker is a command-line application that provides
					a solution for managing a company's employees; using node,
					inquirer, and MySQL.
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://drive.google.com/file/d/1YQQpnHzRUsdwEgwuP3CBnlIC22PS0-QS/view',
							'_blank'
						)
					}
				>
					https://drive.google.com/file/d/1YQQpnHzRUsdwEgwuP3CBnlIC22PS0-QS/view
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/anthonyapicella/employeeTracker',
							'_blank'
						)
					}
				>
					https://github.com/anthonyapicella/employeeTracker
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigEmpTracker = {
		titleBar: {
			enable: true,
			text: 'Employee Tracker',
		},
		// fadeIn: true,
		// fadeInSpeed: 500,
	};

	// ECOMMERCE ***********
	const openPopupboxEcommerce = () => {
		const content = (
			<>
				<img
					className='project-image-popupbox'
					src={eCommerce}
					alt='E-Commerce Back-End'
				/>
				<p>
					This E-Commerce project a working Express.js API to use
					Sequelize to interact with a MySQL database.
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://drive.google.com/file/d/1UDkHNP0ixUJORxL1pV44bhOhSuutHSzH/view',
							'_blank'
						)
					}
				>
					https://drive.google.com/file/d/1UDkHNP0ixUJORxL1pV44bhOhSuutHSzH/view
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/anthonyapicella/e-commerce',
							'_blank'
						)
					}
				>
					https://github.com/anthonyapicella/e-commerce
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigEcommerce = {
		titleBar: {
			enable: true,
			text: 'E-Commerce Back-end',
		},
		// fadeIn: true,
		// fadeInSpeed: 500,
	};

	// Team Profile Generator ***********
	const openPopupboxTeamProfile = () => {
		const content = (
			<>
				<img
					className='project-image-popupbox'
					src={teamProfile}
					alt='Team Profile Generator'
				/>
				<p>
					Team Profile Generator is a Node.js command-line application
					that takes in information about employees on a software
					engineering team, then generates an HTML webpage that
					displays summaries for each person.
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://drive.google.com/file/d/1KRNc-biD3ZhGViDbj_HMXAqpIaAjY-rS/view',
							'_blank'
						)
					}
				>
					https://drive.google.com/file/d/1KRNc-biD3ZhGViDbj_HMXAqpIaAjY-rS/view
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/anthonyapicella/teamProfileGenerator',
							'_blank'
						)
					}
				>
					https://github.com/anthonyapicella/teamProfileGenerator
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigTeamProfile = {
		titleBar: {
			enable: true,
			text: 'Team Profile Generator',
		},
		// fadeIn: true,
		// fadeInSpeed: 500,
	};

	// Virtual Theme Park ***********
	const openPopupboxVirtualThemePark = () => {
		const content = (
			<>
				<img
					className='project-image-popupbox'
					src={virtualPark}
					alt='Virtual Theme Park'
				/>
				<p>
					A Virtual Theme Park for Disneyland fans to explore during
					the pandemic.
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://warm-shore-45541.herokuapp.com/',
							'_blank'
						)
					}
				>
					https://warm-shore-45541.herokuapp.com/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/anthonyapicella/virtual-theme-park',
							'_blank'
						)
					}
				>
					https://github.com/anthonyapicella/virtual-theme-park
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigVirtualThemePark = {
		titleBar: {
			enable: true,
			text: 'Virtual Theme Park',
		},
		// fadeIn: true,
		// fadeInSpeed: 500,
	};

	// Weather App***********
	const openPopupboxWeatherApp = () => {
		const content = (
			<>
				<img
					className='project-image-popupbox'
					src={weather}
					alt='Task Manager React and Redux Project...'
				/>
				<p>
					A responsive web application that provides the user with the
					days weather at a chosen location in addition to that city's
					five day forecast.
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://anthonyapicella.github.io/weatherApp/',
							'_blank'
						)
					}
				>
					https://anthonyapicella.github.io/weatherApp/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/anthonyapicella/weatherApp',
							'_blank'
						)
					}
				>
					https://github.com/anthonyapicella/weatherApp
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigWeatherApp = {
		titleBar: {
			enable: false,
			text: 'Weather App',
		},
		// fadeIn: true,
		// fadeInSpeed: 500,
	};

	// XPpedia ***********
	const openPopupboxXP = () => {
		const content = (
			<>
				<img
					className='project-image-popupbox'
					src={XP}
					alt='XPpedia'
				/>
				<p>
					XP pedia is a user friendly web application that calculates
					how long it will take a user to complete a chosen video game
					based upon the their lifestyle. We all have a growing
					collection of unfinished video games due to busy our
					schedules. We want to beat those games!
				</p>
				<b>Demo:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://anthonyapicella.github.io/XP-pedia/',
							'_blank'
						)
					}
				>
					https://anthonyapicella.github.io/XP-pedia/
				</a>
				<br />
				<b>GitHub:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/anthonyapicella/XP-pedia',
							'_blank'
						)
					}
				>
					https://github.com/anthonyapicella/XP-pedia
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};
	const popupboxConfigXP = {
		titleBar: {
			enable: true,
			text: '',
		},
		// fadeIn: true,
		// fadeInSpeed: 500,
	};

	return (
		<div id='myWork' className='myWork-wrapper'>
			<div className='container'>
				<h2 className='text-center py-5'>myWork</h2>
				<div className='img-box-wrapper row justify-content-center'>
					<div
						className='project-img-box'
						onClick={openPopupboxHolodex}
					>
						<img
							className='project-image'
							src={holodex}
							alt='Star Wars: Holodex'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='project-icon'
							icon={faExpand}
						/>
					</div>

					<div
						className='project-img-box'
						onClick={openPopupboxEmpTracker}
					>
						<img
							className='project-image'
							src={empTrack}
							alt='Employee Tracker'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='project-icon'
							icon={faExpand}
						/>
					</div>

					<div
						className='project-img-box'
						onClick={openPopupboxEcommerce}
					>
						<img
							className='project-image'
							src={eCommerce}
							alt='E-Commerce: Back-end'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='project-icon'
							icon={faExpand}
						/>
					</div>

					<div
						className='project-img-box'
						onClick={openPopupboxTeamProfile}
					>
						<img
							className='project-image'
							src={teamProfile}
							alt='Team Profile Generator'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='project-icon'
							icon={faExpand}
						/>
					</div>

					<div
						className='project-img-box'
						onClick={openPopupboxVirtualThemePark}
					>
						<img
							className='project-image'
							src={virtualPark}
							alt='Virtual Theme Park'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='project-icon'
							icon={faExpand}
						/>
					</div>

					<div
						className='project-img-box'
						onClick={openPopupboxWeatherApp}
					>
						<img
							className='project-image'
							src={weather}
							alt='Weather App'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='project-icon'
							icon={faExpand}
						/>
					</div>

					<div className='project-img-box' onClick={openPopupboxXP}>
						<img className='project-image' src={XP} alt='XPpedia' />
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='project-icon'
							icon={faExpand}
						/>
					</div>
				</div>
				
			</div>
			<PopupboxContainer {...popupboxConfigHolodex} />
			<PopupboxContainer {...popupboxConfigEmpTracker} />
			<PopupboxContainer {...popupboxConfigEcommerce} />
			<PopupboxContainer {...popupboxConfigTeamProfile} />
			<PopupboxContainer {...popupboxConfigVirtualThemePark} />
			<PopupboxContainer {...popupboxConfigWeatherApp} />
			<PopupboxContainer {...popupboxConfigXP} />
			<div className="containter m-5"></div>
		</div>
	);
};

export default MyWork;
