import React from 'react'; // Import the Component component from React
import { Link } from 'react-router-dom'; // Import the Link component
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { className } from 'postcss-selector-parser';

function Thumbnail(props) {
	return (
		<>
			<Card
				className='mx-auto shadow rounded project-img-box'
				style={{ width: '18rem', backgroundColor: 'var(--light)' }}
				border='dark'
			>
				<Card.Body>
					<Link to={props.link} style={{ color: 'var(--dark)' }}>
						<Card.Title className='project-title text-center'>
							<h5>{props.title}</h5>
						</Card.Title>
						<Card.Img className='project-image ' src={props.image} alt='Project Image' fluid />
						<Card.Text className='project-category text-center '>
							<p>{props.category}</p>
						</Card.Text>
					</Link>
				</Card.Body>
			</Card>
		</>
	);
}

export default Thumbnail;
