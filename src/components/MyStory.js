import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import firstComputer from '../../src/assets/img/aFirstComputer.png';

class MyStory extends Component {
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
			<>
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
							Hollywood where I became a Web Developer. Spending 15 years as a
							working artist had it's ups and downs. I traveled the globe and
							saw many incredible places. I've performed for audiences of 18 to
							18,000 and loved every second - but my real passion is PROBLEM
							SOLVING. It's what makes me a great developer. I have always had a
							thirst for knowledge and a love of all things tech!
						</p>
					</div>
				</Fade>
				<div className='text-center'>
					<button
						className='btn btn-dark rounded btn-lg my-1'
						type='button'
						onClick={this.handleClick}
					>
						{this.state.display ? 'Hide' : 'Read'} myStory
					</button>
				</div>
			</>
		);
	}
}

export default MyStory;
