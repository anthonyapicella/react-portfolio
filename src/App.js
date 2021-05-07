import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
// import Contact from './components/Contact'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutMe />
			<MyWork />
			{/* <Contact /> */}
		</>
	);
}

export default App;
