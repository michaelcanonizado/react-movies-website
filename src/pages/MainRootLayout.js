import React from 'react';

import screenBreakpoints from './../helpers/screenBreakpoints';

import ScrollToTop from './../helpers/ScrollToTop';

import PrimaryNavbar from '../components/Header/PrimaryNavbar';
import { Outlet } from 'react-router-dom';

export default function MainRootLayout() {
	return (
		<div
			className="bg-primary text-neutral
		"
		>
			<ScrollToTop />

			<PrimaryNavbar className={`px-4 m-auto ${screenBreakpoints}`} />

			<main className="">
				<Outlet />
			</main>
		</div>
	);
}
