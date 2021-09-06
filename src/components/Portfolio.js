import React from 'react';
import Thumbnail from './Thumbnail'; // Import the Thumbnail component
import Flip from 'react-reveal/Flip';
import vvs from '../../src/assets/img/vvsScreen.png'
import tpg from '../../src/assets/img/TPG2.png'
import emp from '../../src/assets/img/empTracker.png'
import weather from '../../src/assets/img/Weather.png'
import eCom from '../../src/assets/img/backend2.png'
import xp from '../../src/assets/img/XPpedia.png'


function Portfolio(props) {
	return (
		// Render a Thumbnail component
		<div className='container'>
			<div className='text-center p-3'>
				<h4>Portfolio</h4>
			</div>

			<div className='row justify-content-center '>
				<Flip top>
					<div className='p-2 col-lg-4 col-md-6 col-sm-12'>
						<Thumbnail
							className=''
							link='/color-your-voice'
							image={vvs}
							title='Color Your Voice'
							category='Small Business Web App'
						/>
					</div>
				</Flip>
				<div className='p-2 col-lg-4 col-md-6 col-sm-12'>
					<Flip top>
						<Thumbnail
							className=''
							link='/employee-tracker'
							image={emp}
							title='Employee Tracker'
							category='CMS / Database'
						/>
					</Flip>
				</div>
				<div className='p-2 col-lg-4 col-md-6 col-sm-12'>
					<Flip top>
						<Thumbnail
							className=''
							link='/weather'
							image={weather}
							title='Weather!'
							category='Web App'
						/>
					</Flip>
				</div>
				<div className='p-2 col-lg-4 col-md-6 col-sm-12'>
					<Flip top>
						<Thumbnail
							className=''
							link='/e-commerce'
							image={eCom}
							title='E-Commerce Back-end'
							category='E-Commerce / Database'
						/>
					</Flip>
				</div>
				<div className='p-2 col-lg-4 col-md-6 col-sm-12'>
					<Flip top>
						<Thumbnail
							className=''
							link='/team-profile-generator'
							image={tpg}
							title='Team-Profile Generator'
							category='Node.js App'
						/>
					</Flip>
				</div>
				<div className='p-2 col-lg-4 col-md-6 col-sm-12'>
					<Flip top>
						<Thumbnail
							className=''
							link='/xp'
							image={xp}
							title='XPpedia'
							category='Web App'
						/>
					</Flip>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
