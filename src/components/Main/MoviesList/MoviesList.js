import React from 'react';

import MovieCard from './MovieCard/MovieCard';

export default function MoviesList({ movies }) {
	console.log(movies);
	return (
		<section
			className="pt-[32px] grid grid-rows-auto 

		grid-cols-2
		md:grid-cols-4
		lg:grid-cols-6
		
		gap-y-[16px]
		gap-x-[10px]
		sm:gap-x-[12px]
		md:gap-[12px]
		lg:gap-[16px] 
		xl:gap-[24px]"
		>
			{movies.map((movie) => {
				return (
					<MovieCard
						id={movie.id}
						rating={movie.rating}
						title={movie.title}
						image={movie.image}
						releaseDate={movie.releaseDate}
						language={movie.language}
					/>
				);
			})}
		</section>
	);
}
