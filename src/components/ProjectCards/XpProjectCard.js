import React from 'react';

import xpLOGO from '../../assets/img/XPpediaLOGO.png';
import xp from '../../assets/img/XPpedia.gif';

import Jumbotron from 'react-bootstrap/Jumbotron';
import { ButtonGroup, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
import { FaReact, FaBootstrap, FaLink } from 'react-icons/fa';
import { DiGithubBadge, DiGithubFull } from 'react-icons/di';
import {
	IoChevronForwardCircleSharp,
	IoChevronBackCircleSharp,
} from 'react-icons/io5';
import { Button } from 'react-bootstrap';

const XpProjectCard = () => {
	return (
		<div className='p-2'>
			<Card
				className='m-2 border-0 shadow col-sm-12 col-md-10 col-lg-8 col-xl-7 mx-auto'
				style={{ backgroundColor: 'var(--light)' }}
				border='dark'
			>
				<Card.Body className='justify-content-center'>
					<Card.Title>
						<h4 className='text-center'>
							<Image
								style={{ width: '250px' }}
								src={xpLOGO}
								alt='Project Image'
								fluid
							/>
						</h4>
					</Card.Title>
					<div
						className='text-center p-2 mx-auto my-2'
						style={{ backgroundColor: 'black' }}
					>
						<Image className='' src={xp} alt='Project Image' fluid />
					</div>

					<Card.Text className='p-3'>
						{' '}
						XP pedia is a user friendly web application that calculates how long
						it will take a user to complete a chosen video game based upon the
						their lifestyle. We all have a growing collection of unfinished
						video games due to busy our schedules. We want to beat those games!{' '}
					</Card.Text>
					<Card.Subtitle>
						<h6 className='text-center'>built with...</h6>{' '}
					</Card.Subtitle>
					<ListGroup
						horizontal={'sm'}
						className='text-center justify-content-center mb-3'
					>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<TiHtml5 className='h1' /> HTML
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<TiCss3 className='h1' /> CSS
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<FaReact className='h1' /> REACT.js
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<FaBootstrap className='h1' /> Bootstrap
						</ListGroup.Item>
					</ListGroup>
					<Card.Subtitle />
					<Card.Body className='text-center'>
						<Button
							href='https://theversatilevoicestudio.com'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className=''
						>
							<FaLink className='h1' />
							<sub>visit site</sub>
						</Button>

						<Button
							href='https://github.com/anthonyapicella'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className='text-center'
						>
							<DiGithubFull className='display-4' />{' '}
							<sub>Repository Private</sub>
						</Button>
					</Card.Body>
					<div className='p-3 mt-2 d-flex justify-content-between'>
						<Button
							variant='transparent'
							className='justify-self-start'
							href='/team-profile-generator'
						>
							<IoChevronBackCircleSharp className='h3' />
							<sup>previous</sup>
						</Button>
						{''}
						{''}
						<Button
							variant='transparent'
							className='justify-self-end'
							href='/versatile-voice-studio'
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

export default XpProjectCard;
