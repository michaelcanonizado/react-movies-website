import React from 'react';

import PrimaryNavbar from '../components/Header/PrimaryNavbar';
import { Outlet } from 'react-router-dom';

export default function MainRootLayout() {
	return (
		<div
			className="bg-primary text-neutral font-serif
		
		pb-[100px]
		"
		>
			<PrimaryNavbar />

			<main className="">
				<div className="px-4 m-auto max-w-[1248px]">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
