import React from 'react';

import screenBreakpoints from './../../../helpers/screenBreakpoints';

export default function MovieDetails({ movieDetails }) {
	return (
		<>
			<section
				className={`px-4 m-auto
			${screenBreakpoints}`}
			>
				<div className="">Header</div>
				<div className="">Poster and Trailer</div>
			</section>
			<section
				className={`px-4 m-auto
			${screenBreakpoints}`}
			>
				<div className="">Description</div>
				<div className="">
					<div className="">Credits</div>
					<div className="">Add to Watchlist</div>
				</div>
			</section>
		</>
	);
}
