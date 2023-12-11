import React from 'react';
import { Outlet } from 'react-router-dom';

import screenBreakpoints from '../helpers/screenBreakpoints';

import SecondaryNavbar from '../components/Main/MoviesList/SecondaryNavbar/SecondaryNavbar';

export default function MoviesListRootLayout() {
	return (
		<div className={`px-4 m-auto ${screenBreakpoints}`}>
			<div className="pt-6 pb-[50px]">
				<div
					className="pb-6 
			
			leading-[2.5rem]
			font-bold
			text-[32px]
			md:leading-[3.125rem]
			md:font-normal
			md:text-[48px]"
				>
					<span className="whitespace-[wrap]">
						What to Watch - React Movies
					</span>
				</div>
				<SecondaryNavbar className="pt-6" />
				<Outlet />
			</div>
		</div>
	);
}
