import React from 'react';

import PrimaryNavbar from '../components/Header/PrimaryNavbar';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
	return (
		<div className="bg-primary text-neutral h-screen font-serif">
			<PrimaryNavbar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
