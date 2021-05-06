import React from 'react';
// typed effect
import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='blur'>
				<div className='heading'>
					<h1>Anthony Apicella</h1>
					<h2>Full-Stack Web Developer</h2>
					<Typed
						className='typed-text'
						strings={[
							'HTML/CSS',
							'JavaScript',
							'MERN stack'
							// 'Full-Stack Web Developer',
						]}
						typeSpeed={60}
						backSpeed={80}
						loop
					/>
					{/* <p>
                    I used to be a bartender pretending to be an actor. Now I'm acting like a web developer. 
					</p> */}
					{/* <a href='#' className='btn-main-offer mt-4 rounded-pill'>
						FRONT END SKILLS
					</a> */}
				</div>
			</div>
		</div>
	);
};

export default Hero;
