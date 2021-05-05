import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import Particles from 'react-particles-js';

function App() {
	return (
		<>
			<Particles
				className='particles-canvas'
				params={{
					particles: {
						number: {
							value: 18,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 2,
								color: '#5888a6',
							},
						},
					},
				}}
			/>
			<Navbar />
			<Hero />
		</>
	);
}

export default App;
