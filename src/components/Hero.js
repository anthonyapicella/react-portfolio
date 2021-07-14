import React from 'react';
// typed effect
import Typed from 'react-typed';
import { Jumbotron, Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import Skills from './Skills';

import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const Hero = () => {
	return (
		<div className='hero-bg'>
			<div className='blur d-flex '>
				<Jumbotron className='align-items-center bg-transparent p-sm-0 m-auto p-xs-3'>
					{/* desktop */}
					<LightSpeed left>
						<h1 className='hero-heading text-center d-none d-lg-block d-xl-block align-middle'>
							Anthony Apicella
						</h1>
					</LightSpeed>
					<Zoom right>
						<h2 className='hero-sub-heading text-center text-italic d-none d-lg-block d-xl-block align-middle'>
							Full-Stack Web Developer
						</h2>
					</Zoom>
					<Typed
						className='typed-text h4 text-center d-none d-lg-block d-xl-block'
						strings={[
							'HTML/CSS ',
							'JavaScript',
							'MERN stack',
							// 'Full-Stack Web Developer',
						]}
						startDelay={1500}
						typeSpeed={60}
						backSpeed={80}
						loop
					/>
					<Bounce bottom cascade>
						<h5 className='hero-sub-heading p-2 text-center d-none d-lg-block d-xl-block align-middle'>
							creative. responsive. productive.
						</h5>
					</Bounce>
					{/* mobile */}
					<LightSpeed left>
						<h3 className='hero-heading text-center d-block d-xs-block d-sm-block d-md-block d-lg-none'>
							Anthony Apicella
						</h3>
					</LightSpeed>
					<Zoom right>
						<h4 className='hero-sub-heading text-center d-block d-xs-block d-sm-block d-md-block d-lg-none'>
							Full-Stack Web Developer
						</h4>
					</Zoom>
					<Typed
						className='typed-text text-center d-block d-xs-block d-sm-block d-md-block d-lg-none'
						strings={[
							'HTML/CSS',
							'JavaScript',
							'MERN stack',
							// 'Full-Stack Web Developer',
						]}
						startDelay={1500}
						typeSpeed={60}
						backSpeed={80}
						loop
					/>
					<Bounce bottom cascade>
						<h6 className='hero-sub-heading p-2 text-center d-block d-xs-block d-sm-block d-md-block d-lg-none'>
							creative. responsive. productive.
						</h6>
					</Bounce>
				</Jumbotron>
			</div>
		</div>
	);
};

export default Hero;
