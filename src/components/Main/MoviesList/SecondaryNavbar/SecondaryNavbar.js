import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkClasses =
	'h-[48px] px-6 grid place-items-center hover:bg-secondary-300 hover:cursor-pointer tracking-wide w-fit whitespace-nowrap';

export default function SecondaryNavbar({ className }) {
	// Target the currently active link to be able to transition to it into view when secondary navbar becomes scrollable on smaller screen sizes
	useEffect(() => {
		const currActiveLink = document.querySelector('ul a.active');

		currActiveLink.scrollIntoView({
			behavior: 'smooth',
			inline: 'nearest',
			block: 'end',
		});
	}, []);

	return (
		<ul
			className={`${className} flex justify-start font-[900] text-sm overflow-x-scroll md:overflow-auto`}
		>
			<NavLink to="/popular" className={navLinkClasses}>
				POPULAR
			</NavLink>
			<NavLink to="/top-rated" className={navLinkClasses}>
				TOP RATED
			</NavLink>
			<NavLink to="/now-playing" className={navLinkClasses}>
				NOW PLAYING
			</NavLink>
			<NavLink to="/upcoming" className={navLinkClasses}>
				UPCOMING
			</NavLink>
		</ul>
	);
}
