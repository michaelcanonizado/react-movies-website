import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinkClasses =
	'h-[48px] px-6 grid place-items-center hover:bg-secondary-300 hover:cursor-pointer tracking-wide';

export default function SecondaryNavbar({ className }) {
	return (
		<ul className={`${className} flex justify-start font-[900] text-sm`}>
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
