import React from 'react';

import SecondaryNavbar from './SecondaryNavbar/SecondaryNavbar';

export default function MoviesList({ pageTitle, movies }) {
	console.log(movies);

	return (
		<div className="pt-6">
			<div className="pb-6 text-[48px]">
				<span>{pageTitle}</span>
				<span> - </span>
				<span>React Movies</span>
			</div>
			<SecondaryNavbar className="pt-6" />
			<section className="pt-6">MoviesList</section>
		</div>
	);
}
