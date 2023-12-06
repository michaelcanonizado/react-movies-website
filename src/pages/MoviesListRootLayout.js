import React from 'react';
import { Outlet } from 'react-router-dom';

import SecondaryNavbar from '../components/Main/SecondaryNavbar/SecondaryNavbar';

export default function MoviesListRootLayout() {
	return (
		<div className="pt-6">
			<div className="pb-6 text-[48px]">
				<span>What to Watch - React Movies</span>
			</div>
			<SecondaryNavbar className="pt-6" />
			<Outlet />
		</div>
	);
}
