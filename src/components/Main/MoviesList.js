import React from 'react';

import SecondaryNavbar from './SecondaryNavbar/SecondaryNavbar';
import MovieCard from './MovieCard/MovieCard';

export default function MoviesList({ pageTitle, movies }) {
	console.log(movies);

	return (
		<section className="pt-6 grid grid-cols-6 grid-rows-auto gap-6">
			{movies.map((movie) => {
				return (
					<MovieCard
						id={movie.id}
						rating={movie.rating}
						title={movie.title}
						image="https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
						trailerLink={movie.trailerLink}
					/>
				);
			})}
		</section>
	);
}
