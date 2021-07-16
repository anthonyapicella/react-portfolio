import React from 'react';
import headshot from '../assets/img/ApicellaHeadshot2.png';
import Skills from './Skills';
import Fade from 'react-reveal/Fade';
import firstComputer from '../../src/assets/img/aFirstComputer.png';

class AboutMe extends React.Component {
	constructor(props) {
		super(props);
		this.state = { display: false };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({ display: !this.state.display });
	}
	render() {
		return (
			<div id='aboutMe' className='container pt-5'>
				<div className='row mb-4'>
					<div className='col-lg-6 col-xs-12 mb-1'>
						<img
							className='img-fluid rounded-lg shadow-lg headshot'
							src={headshot}
							alt='headshot'
						/>
					</div>
					<div className='col-lg-6 col-xs-12'>
						<h4 className='py-2'>aboutMe</h4>
						<p className='py-1'>husband. father. creator.</p>
						<p>
							Full-Stack Web Developer dedicated to building fully responsive,
							mobile-first applications. With an eye for design and a passion
							for problem solving, my goal is to help the client meet their
							needs while exceeding their expectations. I focus on creating a
							seamless user experience while also maintaining brand consistency.
							Throughout my career I have always demonstrated strong leadership
							skills and an ability to rise to any challenge. Proficient in
							HTML/CSS, JavaScript, MERN stack and Adobe Photoshop. Received a
							certificate in Full-Stack Web Development from UCLA Extension.{' '}
						</p>
						<Fade right cascade when={this.state.display} collapse>
							<div className='text-center p-1'>
								<img
									className='img-fluid mb-3 rounded-lg shadow-lg headshot'
									src={firstComputer}
									alt='Anthony and his first computer'
								/>
								<p className=''>
									Growing up in NYC, I dreamed of one day becoming a successful
									actor. So, as the story goes, I grabbed my family and moved to
									Hollywood where I became a Web Developer. Spending 15 years as
									a working artist made me who I am today. I traveled the globe
									and saw many incredible places. I've performed for audiences
									of 18 to 18,000 and loved every second - but my real passion
									is PROBLEM SOLVING. It's what makes me a great developer. I
									have always had a thirst for knowledge and a love of all
									things tech!
								</p>
							</div>
						</Fade>{' '}
						<div className='text-center'>
							<button
								className='btn btn-dark rounded btn-lg my-1'
								type='button'
								onClick={this.handleClick}
							>
								{this.state.display ? 'Hide' : 'Read'} myStory
							</button>
						</div>
					</div>
				</div>
				<Skills />
			</div>
		);
	}
}

export default AboutMe;
