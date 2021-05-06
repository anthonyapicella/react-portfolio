import React from 'react';
import headshot from '../assets/img/HEADSHOT.png';
import Skills from './Skills';

const AboutMe = () => {
	return (
		<div className='container py-5'>
			<div className='row'>
				<div className='col-lg-6 col-xm12 pb-2'>
					<img
						className='img-fluid rounded-lg shadow-lg pt-3'
						src={headshot}
						alt='headshot'
					/>
				</div>
				<div className='col-lg-6 col-xm12 pt-2'>
					<h3>aboutMe</h3> <br />
					<p>
						My name is Anthony -- I'm a husband, a father, and a
						creator.
					</p>
					<p>
						Growing up in NYC, I dreamed of one day becoming a
						successful actor. So, I grabbed my family and moved to
						Hollywood to become a Web Developer. Spending 15 years
						as a working artist had it's ups and downs. I traveled
						the globe and saw some incredible places. I performed in
						front of 18,000 people and lived to tell about it.
						That's all fine, but my real passion is PROBLEM SOLVING.
						It's what makes me a great developer. I have a thirst
						for knowledge and a love of all things tech!
					</p>
					<p>I used to be a bartender pretending to be an actor.</p>
					<p>Now, I'm acting like a web developer.</p>
				</div>
			</div>
			<Skills/>
		</div>
	);
};

export default AboutMe;
