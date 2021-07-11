import React from 'react';
import Thumbnail from '../components/Thumbnail'; // Import the Thumbnail component
import Flip from 'react-reveal/Flip';

function Projects(props) {
	return (
		// Render a Thumbnail component
		<div className='container'>
			<div className='text-center p-3'>
				<h4>Projects</h4>
			</div>

			<div className='row justify-content-center '>
				<Flip top>
					<div className='p-2 col-lg-4 col-md-6 col-sm-12'>
						<Thumbnail
							className=''
							link='/versatile-voice-studio'
							image='https://firebasestorage.googleapis.com/v0/b/anthonyapps-d30b1.appspot.com/o/assets%2Fimg%2FvvsDEM.gif?alt=media&token=fc86e857-a9e3-4e2c-86ee-ce846e6cc73c'
							title='The Versatile Voice Studio'
							category='Small Business Web App'
						/>
					</div>
				</Flip>
				<div className='p-2 col-lg-4 col-md-6 col-sm-12'>
					<Flip top>
						<Thumbnail
							className=''
							link='/employee-tracker'
							image='https://firebasestorage.googleapis.com/v0/b/anthonyapps-d30b1.appspot.com/o/assets%2Fimg%2F12_MYSQL.gif?alt=media&token=50931145-74f9-4fa6-a7b2-1251a762bb13'
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
							image='https://firebasestorage.googleapis.com/v0/b/anthonyapps-d30b1.appspot.com/o/assets%2Fimg%2FWeather.gif?alt=media&token=920f11c2-faf4-4ec1-bdc1-13f48c8b48cf'
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
							image='https://firebasestorage.googleapis.com/v0/b/anthonyapps-d30b1.appspot.com/o/assets%2Fimg%2Fbackend1.png?alt=media&token=f32f63b1-a19f-4572-bc94-59dd02392492'
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
							image='https://firebasestorage.googleapis.com/v0/b/anthonyapps-d30b1.appspot.com/o/assets%2Fimg%2FTPG1.png?alt=media&token=abe7aaf1-3edd-428b-acf1-6a73f34c059d'
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
							image='https://firebasestorage.googleapis.com/v0/b/anthonyapps-d30b1.appspot.com/o/assets%2Fimg%2FXPpedia.gif?alt=media&token=e7ce831f-44b6-4d97-9690-3f4e670b5fa8'
							title='XPpedia'
							category='Web App'
						/>
					</Flip>
				</div>
			</div>
		</div>
	);
}

export default Projects;
