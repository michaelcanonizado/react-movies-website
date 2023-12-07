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
				<div className="px-4 m-auto lg:max-w-[1024px] xl:max-w-[1280px]">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
