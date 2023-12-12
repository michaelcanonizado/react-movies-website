import React from 'react';

import { Link } from 'react-router-dom';

export default function GenrePill({ genre, movieId }) {
	return (
		<Link
			className="
			
			px-[12px] py-1 
			text-[10px]
			md:text-[0.875rem] 
			
			rounded-full border border-secondary-400 bg-secondary-100 bg-opacity-10 
			
			hover:bg-opacity-100 
			hover:brightness-120 
			transition-all"
			href={`/movie/${movieId}`}
		>
			<span className="whitespace-nowrap">{genre}</span>
		</Link>
	);
}
