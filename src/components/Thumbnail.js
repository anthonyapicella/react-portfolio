import React from 'react'; // Import the Component component from React
import { Link } from 'react-router-dom'; // Import the Link component
import { Card } from 'react-bootstrap';

function Thumbnail(props) {
	return (
		<>
			<Card
				className='mx-auto shadow border-3 '
				style={{ width: '18rem', backgroundColor: 'var(--light)' }}
				border=''
			>
				<Card.Body>
					<Link to={props.link} style={{ color: 'var(--dark)' }}>
						<Card.Title className='project-title text-center'>
							<h5>{props.title}</h5>
						</Card.Title>
						<Card.Img
							className=' shadow'
							style={{ backgroundColor: 'var(--dark)' }}
							src={props.image}
							alt='Project Image'
							fluid
						/>

						<Card.Text className='project-category text-center mt-2'>
							<p>{props.category}</p>
						</Card.Text>
					</Link>
				</Card.Body>
			</Card>
		</>
	);
}

export default Thumbnail;
