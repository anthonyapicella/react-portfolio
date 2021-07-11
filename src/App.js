import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/ContactForm/Contact';


import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ResumePage from './components/Resume/ResumePage';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollUp/ScrollToTop';
import ScrollToButton from './components/ScrollUp/ScrollToButton';

function App() {
	return (
		<Router>
			<Navbar />
			<ScrollToButton />
			<ScrollToTop />
			<Switch>
				<Route path='/' exact component={Hero} />
				<Route path='/about' exact component={AboutMe} />
				<Route path='/projects' exact component={Projects} />
				<Route path='/resumepage' exact component={ResumePage} />
				<Route path='/contact' exact component={Contact} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
