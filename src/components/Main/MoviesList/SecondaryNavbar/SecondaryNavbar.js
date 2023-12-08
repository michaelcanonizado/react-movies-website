import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkClasses =
	'h-[48px] px-6 grid place-items-center hover:bg-secondary-300 hover:cursor-pointer tracking-wide w-fit whitespace-nowrap';

export default function SecondaryNavbar({ className }) {
	useEffect(() => {
		const currActiveLink = document.querySelector('ul a.active');
		console.log(currActiveLink);

		currActiveLink.scrollIntoView({
			behavior: 'smooth',
			inline: 'nearest',
			block: 'end',
		});
	}, []);

	return (
		<ul
			className={`${className} flex justify-start font-[900] text-sm overflow-x-scroll`}
			onLoad="window.scroll(250,0)"
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
