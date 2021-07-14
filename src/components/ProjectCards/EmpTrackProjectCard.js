import React from 'react';

import empTrack from '../../assets/img/empTracker.png';

import Jumbotron from 'react-bootstrap/Jumbotron';
import { ButtonGroup, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
import { FaReact, FaBootstrap, FaLink } from 'react-icons/fa';
import {
	DiGithubBadge,
	DiGithubFull,
	DiJavascript1,
	DiNodejsSmall,
	DiMysql,
} from 'react-icons/di';
import { BsPlayFill } from 'react-icons/bs';


import {
	IoChevronForwardCircleSharp,
	IoChevronBackCircleSharp,
} from 'react-icons/io5';
import { Button } from 'react-bootstrap';

const EmpTrackProjectCard = () => {
	return (
		<div className='p-2'>
			<Card
				className='m-2 shadow col-sm-12 col-md-10 col-lg-8 col-xl-7 mx-auto  border-5 '
				style={{ backgroundColor: 'var(--light)' }}
			>
				<Card.Body className='justify-content-center'>
					<Card.Title>
						<h4 className='text-center'>Employee Tracker</h4>
					</Card.Title>

						<Image
							className='mx-auto'
							src={empTrack}
							alt='Project Image'
							fluid
						/>


					<Card.Text className='p-3 my-2'>
						{' '}
						A command-line application that provides a solution for managing a
						company's employees. When the user runs the application they are
						prompted with a series of questions allowing them to enter their
						employees information. Includes: adding, viewing and updating
						functions for departments, roles, and employees.{' '}
					</Card.Text>
					<Card.Subtitle>
						<h6 className='text-center'>built with...</h6>{' '}
					</Card.Subtitle>
					<ListGroup
						horizontal={'sm'}
						className='text-center justify-content-center mb-3'
					>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<DiJavascript1 className='h1' /> JavaScript
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<DiNodejsSmall className='h1' /> Node.js
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<DiMysql className='h1' /> MySQL
						</ListGroup.Item>
					</ListGroup>
					<Card.Subtitle />
					<Card.Body className='text-center'>
						<Button
							href='https://drive.google.com/file/d/1YQQpnHzRUsdwEgwuP3CBnlIC22PS0-QS/view'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className=''
						>
							<BsPlayFill className='h1' />
							<sub>View Demo</sub>
						</Button>

						<Button
							href='https://github.com/anthonyapicella/employeeTracker'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className='text-center'
						>
							<DiGithubFull className='display-4' /> <sub>Repository</sub>
						</Button>
					</Card.Body>
					<div className='p-3 mt-2 d-flex justify-content-between'>
						<Button
							variant='transparent'
							className='justify-self-start'
							href='/versatile-voice-studio'
						>
							<IoChevronBackCircleSharp className='h3' />
							<sup>previous</sup>
						</Button>
						{''}
						{''}
						<Button
							variant='transparent'
							className='justify-self-end'
							href='/weather'
						>
							<sup>next</sup>
							<IoChevronForwardCircleSharp className='h3' />
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default EmpTrackProjectCard;
