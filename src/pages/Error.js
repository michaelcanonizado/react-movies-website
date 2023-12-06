import React from 'react';

import PrimaryNavbar from '../components/Header/PrimaryNavbar';

export default function Error() {
	return (
		<div className="bg-primary text-neutral h-screen font-serif">
			<PrimaryNavbar />
			<main>
				<h1>Error! Something went wrong!</h1>
			</main>
		</div>
	);
}
