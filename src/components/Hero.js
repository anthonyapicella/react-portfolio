import React from 'react';
// typed effect
import Typed from 'react-typed';
import { Jumbotron, Container } from 'react-bootstrap';

import { Button } from 'react-bootstrap';

// import LightSpeed from 'react-reveal/LightSpeed';
// import Zoom from 'react-reveal/Zoom';
// import Bounce from 'react-reveal/Bounce';
// import Flip from 'react-reveal/Flip';

const Hero = () => {
	return (
		<div className='hero-bg'>
			<div className='blur d-flex '>
				<Jumbotron className='align-items-center bg-transparent p-sm-0 m-auto p-xs-3'>
					{/* desktop */}
					<h1 className='hero-heading text-center d-none d-lg-block d-xl-block align-middle'>
						Anthony Apicella
					</h1>
					<h2 className='hero-sub-heading text-center text-italic d-none d-lg-block d-xl-block align-middle'>
						Full-Stack Web Developer
					</h2>
					<Typed
						className='typed-text h4 text-center d-none d-lg-block d-xl-block'
						strings={[
							'HTML/CSS ',
							'JavaScript',
							'MERN stack',
							// 'Full-Stack Web Developer',
						]}
						startDelay={1300}
						typeSpeed={60}
						backSpeed={80}
						loop
					/>
					<h5 className='hero-sub-heading p-2 text-center d-none d-lg-block d-xl-block align-middle'>
						creative. responsive. productive.
					</h5>
					{/* mobile */}
					<h3 className='hero-heading text-center d-block d-xs-block d-sm-block d-md-block d-lg-none'>
						Anthony Apicella
					</h3>
					<h4 className='hero-sub-heading text-center d-block d-xs-block d-sm-block d-md-block d-lg-none'>
						Full-Stack Web Developer
					</h4>
					<Typed
						className='typed-text text-center d-block d-xs-block d-sm-block d-md-block d-lg-none'
						strings={[
							'HTML/CSS',
							'JavaScript',
							'MERN stack',
							// 'Full-Stack Web Developer',
						]}
						startDelay={1300}
						typeSpeed={60}
						backSpeed={80}
						loop
					/>
					<h6 className='hero-sub-heading p-4  text-center d-block d-xs-block d-sm-block d-md-block d-lg-none'>
						creative. responsive. productive.
					</h6>
					<div className='wrapper p-3 text-center justify-content-between '>
						<Button
							variant='outline-dark'
							className='mx-1'
							href='/contact'
							size=''
							style={{ color: 'var(--tertiary)', borderColor: 'var(--tertiary)'}}
							
							
						>
							Contact
						</Button>
						{/* <Button
							variant='outline-light mx-1'
							className='rounded '
							href='/contact'
							size='sm'
						>
							I'm hiring developers
						</Button> */}
					</div>
				</Jumbotron>
			</div>
		</div>
	);
};

export default Hero;
