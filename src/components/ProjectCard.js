import React from 'react';

import empTrack from '../assets/img/12_MYSQL.gif';
import eCommerce from '../assets/img/backend1.png';
import teamProfile from '../assets/img/TPG1.png';
import weather from '../assets/img/Weather.gif';
import XP from '../assets/img/XPpedia.gif';
import vvs from '../assets/img/share-img.jpg';

import Jumbotron from 'react-bootstrap/Jumbotron';
import { ButtonGroup, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
import { FaReact, FaBootstrap, FaLink } from 'react-icons/fa';
import { DiGithubBadge, DiGithubFull } from 'react-icons/di';
import { Button } from 'react-bootstrap';

const ProjectCard = () => {
	return (
		<>
			<Card
				className='p-3 shadow'
				style={{ backgroundColor: 'var(--light)' }}
				border='dark'
			>
				<Card.Body>
					<Card.Title>
						<h4 className='text-center'>The Versatile Voice Studio</h4>
					</Card.Title>
					<Image src={vvs} alt='Project Image' fluid />
					<Card.Text className='p-2'>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						aliquam ab rerum dignissimos odit accusantium fuga, doloremque
						voluptatem quo expedita commodi repellat corrupti vero et! Eius
						eligendi obcaecati impedit voluptatum voluptate repudiandae
						veritatis! Quam, minus voluptas explicabo doloribus omnis provident
						accusantium a eum soluta fugit, ratione, fuga cumque itaque quis.{' '}
					</Card.Text>
					<Card.Subtitle>
						<h5 className='text-center'>built with...</h5>{' '}
					</Card.Subtitle>
					<ListGroup
						horizontal={'sm'}
						className='text-center justify-content-center'
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
					<Card.Body className='text-center border-top'>
						<Button
							href='https://theversatilevoicestudio.com'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
							className=''
						>
							<FaLink className='display-5' />
						</Button>

						<Button
							href='https://github.com/anthonyapicella'
							target='_blank'
							style={{ color: 'var(--dark)' }}
							variant='link'
                            className='text-center'
						>
							<DiGithubFull className='display-4' />
						</Button>
					</Card.Body>
				</Card.Body>
			</Card>
		</>
	);
};

export default ProjectCard;
