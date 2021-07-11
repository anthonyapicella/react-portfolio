import React from 'react';

import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { Icon, InlineIcon } from '@iconify/react';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
// import ReactPlayer from 'react-player'
import { FaReact, FaBootstrap, FaLink } from 'react-icons/fa';
import {
	DiGithubBadge,
	DiGithubFull,
	DiJavascript1,
	DiNodejsSmall,
	DiMysql,
} from 'react-icons/di';
import {
	IoChevronForwardCircleSharp,
	IoChevronBackCircleSharp,
} from 'react-icons/io5';
import expressIcon from '@iconify-icons/simple-icons/express';
import { Button } from 'react-bootstrap';

const EcommerceProjectCard = () => {
	return (
		<>
			<Card
				className='m-2 border-0 shadow col-sm-12 col-md-10 col-lg-8 col-xl-6 mx-auto'
				style={{ backgroundColor: 'var(--light)' }}
				border='dark'
			>
				<Card.Body className='justify-content-center'>
					<Card.Title>
						<h4 className='text-center'>E-Commerce Back-end</h4>
					</Card.Title>
					<div className='mx-auto text-center p-2 mx-auto my-2 bg-dark'>
						<Carousel fade>
							<Carousel.Item>
								<img
									className='d-block w-100'
									src='https://firebasestorage.googleapis.com/v0/b/anthonyapps-d30b1.appspot.com/o/assets%2Fimg%2Fbackend1.png?alt=media&token=f32f63b1-a19f-4572-bc94-59dd02392492'
									alt='Front End'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block w-100'
									src='https://firebasestorage.googleapis.com/v0/b/anthonyapps-d30b1.appspot.com/o/assets%2Fimg%2Fbackend2.png?alt=media&token=368c553c-577c-4c70-94e6-72df16ac15d8'
									alt='Back End'
								/>
							</Carousel.Item>
						</Carousel>
					</div>

					<Card.Text className='p-3'>
						{' '}
						Back-End application for an e-commerce site. A working Express.js
						API which uses Sequelize to interact with a MySQL database. Allows
						for a user to create, update, and delete data in their respective
						database.{' '}
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
							<Icon className='h1' icon={expressIcon} /> Express.js
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
							href='https://drive.google.com/file/d/1r3RuJGaAHhsTnQ-LcEFP74l_6xpAPfy4/view?usp=sharing'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className=''
						>
							<FaLink className='display-5' />
							<sub>View Demo</sub>
						</Button>
						<Button
							href='https://github.com/anthonyapicella/e-commerce'
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
							href='/weather'
						>
							<IoChevronBackCircleSharp className='h3' />
							<sup>previous</sup>
						</Button>
						{''}
						{''}
						<Button
							variant='transparent'
							className='justify-self-end'
							href='/team-profile-generator'
						>
							<sup>next</sup>
							<IoChevronForwardCircleSharp className='h3' />
						</Button>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default EcommerceProjectCard;
