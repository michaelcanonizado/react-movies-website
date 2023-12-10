import React from 'react';

import Credits from './Credits';

export default function MovieCredits({ credits, movieId }) {
	return (
		<ul className="">
			<Credits type="Directors" data={credits.directors} movieId={movieId} />
			<Credits type="Writers" data={credits.writers} movieId={movieId} />
			<Credits type="Stars" data={credits.casts} movieId={movieId} />
		</ul>
	);
}
