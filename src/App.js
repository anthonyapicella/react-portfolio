import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';

import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutMe />
			<MyWork />
			<Footer />
		</>
	);
}

export default App;
