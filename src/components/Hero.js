import React from 'react';
// typed effect
import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='blur'>
				<div className='heading'>
					<h1>Web Developer / Designer</h1>
					<Typed
						className='typed-text'
						strings={['Full-Stack Skills', 'Front-End Focus']}
						typeSpeed={40}
						backSpeed={60}
						loop
					/>
					{/* <p>
                    I used to be a bartender pretending to be an actor. Now I'm acting like a web developer. 
					</p> */}
					<a href='#' className='btn-main-offer'>
						Hello
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
