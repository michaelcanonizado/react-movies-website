import React from 'react';

import { useRouteError } from 'react-router-dom';

import SecondaryNavbar from '../components/Main/SecondaryNavbar/SecondaryNavbar';

export default function MoviesListError() {
	const error = useRouteError();

	return (
		<div className="pt-6">
			<div className="pb-6 text-[48px]">
				<span>What to Watch - React Movies</span>
			</div>
			<SecondaryNavbar className="pt-6" />
			<div className="pt-6">
				<div>
					<span>
						{error.status} - {error.data.statusMessage}
					</span>
				</div>
				<div>
					<span>{error.data.message}</span>
				</div>
			</div>
		</div>
	);
}
