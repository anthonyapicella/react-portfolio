import React from 'react';

import vvs from '../../assets/img/vvsScreen.png';
import vvsLOGO from '../../assets/img/vvsLOGO.png';

import Jumbotron from 'react-bootstrap/Jumbotron';
import { ButtonGroup, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
import { FaReact, FaBootstrap, FaGlobe } from 'react-icons/fa';
import { DiGithubBadge, DiGithubFull, DiPhotoshop } from 'react-icons/di';
import {
	IoChevronForwardCircleSharp,
	IoChevronBackCircleSharp,
} from 'react-icons/io5';
import { Button } from 'react-bootstrap';

const VvsProjectCard = () => {
	return (
		<div className='p-2'>
			<Card
				className='m-2 shadow col-sm-12 col-md-10 col-lg-8 col-xl-7 mx-auto  border-5 '
			>
				<Card.Body className='justify-content-center'>
					<Card.Title>
						<h4 className='text-center'>
							<Image
								style={{ width: '250px' }}
								src={vvsLOGO}
								alt='Project Image'
								fluid
							/>
						</h4>
					</Card.Title>
					<div
						className='mx-auto text-center p-1 mx-auto my-2'
						style={{ backgroundColor: 'var(--tertiary)' }}
					>
						<Image className='' src={vvs} alt='Project Image' fluid />
					</div>

					<Card.Text className='p-3'>
						{' '}
						This small business website was designed for a private voice studio.
						It greets the user with a clean and responsive interface.
						Incorporating easy-to-use navigation, it provides information about
						the proprietor, testimonials, services available and registration.
						In addition, a contact form is used - as well as links to social
						media and email. A third party booking service is seamlessly
						incorporated for easy scheduling.{' '}
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
						<ListGroup.Item variant='flush' className='border-0 bg-transparent'>
							<DiPhotoshop className='h1' /> Photoshop
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
							<FaGlobe className='h3' />
							<sub> Visit Site</sub>
						</Button>

						<Button
							href='https://github.com/anthonyapicella'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className='text-center text-muted'
						>
							<DiGithubFull className='display-4 text-muted' />{' '}
							<sub>Repository Private</sub>
						</Button>
					</Card.Body>
					<div className='p-3 mt-2 d-flex justify-content-between'>
						<Button
							variant='transparent'
							className='justify-self-start'
							href='/xp'
						>
							<IoChevronBackCircleSharp className='h3' />
							<sup>previous</sup>
						</Button>
						{''}
						{''}
						<Button
							variant='transparent'
							className='justify-self-end'
							href='/employee-tracker'
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

export default VvsProjectCard;
