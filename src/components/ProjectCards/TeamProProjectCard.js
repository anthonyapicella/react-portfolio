import React from 'react';

import TPG1 from '../../assets/img/TPG1.png';

import Jumbotron from 'react-bootstrap/Jumbotron';
import { ButtonGroup, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
import { FaReact, FaBootstrap, FaLink,  FaGlobe } from 'react-icons/fa';
import { BsPlayFill } from 'react-icons/bs';
import {
	DiGithubBadge,
	DiGithubFull,
	DiJavascript1,
	DiNodejsSmall,
	DiJqueryLogo,
} from 'react-icons/di';
import {
	IoChevronForwardCircleSharp,
	IoChevronBackCircleSharp,
} from 'react-icons/io5';
import { SiJest } from 'react-icons/si';
import { Button } from 'react-bootstrap';
import tpg1 from '../../assets/img/TPG1.png';
import tpg2 from '../../assets/img/TPG2.png';

const TeamProProjectCard = () => {
	return (
		<div className='p-2'>
			<Card
				className='m-2 shadow col-sm-12 col-md-10 col-lg-8 col-xl-7 mx-auto  border-5'
				style={{ backgroundColor: 'var(--light)' }}
			>
				<Card.Body className='justify-content-center'>
					<Card.Title>
						<h4 className='text-center'>Team Profile Generator</h4>
					</Card.Title>

					<Carousel className='shadow' fade>
						<Carousel.Item>
							<img className='d-block w-100' src={tpg2} alt='Front End' />
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block w-100' src={tpg1} alt='Back End' />
						</Carousel.Item>
					</Carousel>

					<Card.Text className='p-3'>
						{' '}
						A Node.js command-line application that takes in information about
						employees on a software engineering team, then generates an HTML
						webpage that displays summaries for each person.{' '}
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
							<DiJavascript1 className='h1' /> JavaScript
						</ListGroup.Item>

						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<FaBootstrap className='h1' /> Bootstrap
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<DiJqueryLogo className='h1' /> jQuery
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<DiNodejsSmall className='h1' /> Node.js
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<SiJest className='h1' /> Jest
						</ListGroup.Item>
					</ListGroup>
					<Card.Subtitle />
					<Card.Body className='text-center'>
						<Button
							href='https://drive.google.com/file/d/1KRNc-biD3ZhGViDbj_HMXAqpIaAjY-rS/view'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className=''
						>
							<BsPlayFill className='h1' />
							<sub> View Demo</sub>
						</Button>

						<Button
							href='https://github.com/anthonyapicella/teamProfileGenerator'
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
							href='/e-commerce'
						>
							<IoChevronBackCircleSharp className='h3' />
							<sup>previous</sup>
						</Button>
						{''}
						{''}
						<Button
							variant='transparent'
							className='justify-self-end'
							href='/xp'
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

export default TeamProProjectCard;
