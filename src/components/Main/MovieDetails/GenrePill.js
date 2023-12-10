import React from 'react';

export default function GenrePill({ genre, movieId }) {
	return (
		<a
			className="px-[12px] py-1 text-[0.875rem] rounded-full border border-secondary-400 bg-secondary-100 bg-opacity-10 hover:bg-opacity-100 hover:brightness-120 transition-all"
			href={`/movie${movieId}`}
		>
			<span className="">{genre}</span>
		</a>
	);
}
