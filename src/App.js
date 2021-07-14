import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/ContactForm/ContactUs';


import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// import ResumePage from './components/Resume/ResumePage';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollUp/ScrollToTop';
import ScrollToButton from './components/ScrollUp/ScrollToButton';
import VvsProjectCard from './components/ProjectCards/VvsProjectCard';
import EmpTrackProjectCard from './components/ProjectCards/EmpTrackProjectCard';
import WeatherProjectCard from './components/ProjectCards/WeatherProjectCard';
import EcommerceProjectCard from './components/ProjectCards/EcommerceProjectCard';
import TeamProProjectCard from './components/ProjectCards/TeamProProjectCard';
import XpProjectCard from './components/ProjectCards/XpProjectCard';


function App() {
	return (
		<Router>
			<Navbar />
			<ScrollToButton/>
			<ScrollToTop />
			<Switch>
				<Route path='/' exact component={Hero} />
				<Route path='/about' exact component={AboutMe} />
				<Route path='/portfolio' exact component={Portfolio} />
				{/* <Route path='/resumepage' exact component={ResumePage} /> */}
				<Route path='/contact' exact component={Contact} />
				<Route path='/versatile-voice-studio' exact component={VvsProjectCard} />
				<Route path='/employee-tracker' exact component={EmpTrackProjectCard} />
				<Route path='/weather' exact component={WeatherProjectCard} />
				<Route path='/e-commerce' exact component={EcommerceProjectCard} />
				<Route path='/team-profile-generator' exact component={TeamProProjectCard} />
				<Route path='/xp' exact component={XpProjectCard} />
			</Switch >
			<Footer />
		</Router>
	);
}

export default App;
