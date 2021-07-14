import React from 'react';

import weather from '../../assets/img/Weather.png';

import Jumbotron from 'react-bootstrap/Jumbotron';
import { ButtonGroup, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
import { FaReact, FaBootstrap, FaLink, FaGlobe } from 'react-icons/fa';
import {
	DiGithubBadge,
	DiGithubFull,
	DiJavascript1,
	DiJqueryLogo,
} from 'react-icons/di';
import { WiNightPartlyCloudy } from 'react-icons/wi';
import {
	IoChevronForwardCircleSharp,
	IoChevronBackCircleSharp,
} from 'react-icons/io5';

import { Button } from 'react-bootstrap';

const WeatherProjectCard = () => {
	return (
		<div className='p-2'>
			<Card
				className='m-2 shadow col-sm-12 col-md-10 col-lg-8 col-xl-7 mx-auto  border-5 '
				style={{ backgroundColor: 'var(--light)' }}
				

			>
				<Card.Body className='justify-content-center rounded'>
					<Card.Title>
						<h4 className='text-center'>Weather!</h4>
					</Card.Title>

						<Image className='shadow' src={weather} alt='Project Image' fluid />


					<Card.Text className='p-3 my-2'>
						{' '}
						Weather! is a responsive web application that provides the user with
						the days weather at a chosen location in addition to that city's
						five day forecast.{' '}
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
							<DiJqueryLogo className='h1' /> jQuery
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<FaBootstrap className='h1' /> Bootstrap
						</ListGroup.Item>
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<WiNightPartlyCloudy className='h1' />{' '}
							<sub> Open Weather API</sub>
						</ListGroup.Item>
					</ListGroup>
					<Card.Subtitle />
					<Card.Body className='text-center '>
						<Button
							href='https://anthonyapicella.github.io/weatherApp/'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className=''
						>
							<FaGlobe className='h3' />
							<sub> View Demo</sub>
						</Button>

						<Button
							href='https://github.com/anthonyapicella/weatherApp'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className='text-center'
						>
							<DiGithubFull className='display-4' /> <sub>Repository</sub>
						</Button>
					</Card.Body>
					<div className='p-3 mt-2 d-flex justify-content-between'>
						<Button variant='transparent' className='justify-self-start' href='/employee-tracker'>
							<IoChevronBackCircleSharp className='h3' />
							<sup>previous</sup>
						</Button>
						{''}{''}
						<Button variant='transparent' className='justify-self-end' href='/e-commerce'>
							<sup>next</sup>
							<IoChevronForwardCircleSharp className='h3' />
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default WeatherProjectCard;
