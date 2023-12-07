import React from 'react';

import MovieCard from './MovieCard/MovieCard';

export default function MoviesList({ movies }) {
	console.log(movies);
	return (
		<section className="pt-6 grid grid-cols-6 grid-rows-auto gap-6">
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
