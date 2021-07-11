import React, { useEffect, useState } from 'react';
import './scrollUp.css'

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled up to given distance
	const toggleVisibility = () => {
		if (window.pageYOffset > 170) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Set the top coordinate to 0
	// make scrolling smooth
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<>
			{isVisible && (
				<div className='move-up' onClick={scrollToTop}>
					<i className='bi bi-arrow-up-circle-fill display-4 up-arrow'></i>
				</div>
			)}
		</>
	);
};

export default ScrollToTopButton;
