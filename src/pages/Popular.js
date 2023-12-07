import React from 'react';

import { options } from './../helpers/fecthOptions';

import MoviesList from '../components/Main/MoviesList/MoviesList';

import { useLoaderData, json } from 'react-router-dom';

export default function Popular() {
	const movies = useLoaderData();

	return <MoviesList pageTitle="Popular" movies={movies} />;
}

const filterMovieData = async (movies) => {
	const data = [];

	for (const movie of movies) {
		data.push({
			id: movie.id,
			title: movie.original_title,
			rating: movie.vote_average.toFixed(2),
			image: `https://image.tmdb.org/t/p/w342/${movie.poster_path}`,
			releaseDate: movie.release_date,
			language: movie.original_language,
		});
	}

	return data;
};

export async function loader() {
	const response = await Promise.all([
		fetch(
			'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
			options
		),
		fetch(
			'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2',
			options
		),
	]);

	if (!response[0].ok) {
		console.log(response);
		throw json(
			{
				message:
					'Something went wrong with the API request, could not fetch Popular movies. Please visit another list or try again later.',
				statusMessage: 'BAD REQUEST',
			},
			{ status: 400 }
		);
	} else {
		const pageOne = await response[0].json();
		const pageTwo = await response[1].json();

		const allMoviesData = [...pageOne.results, ...pageTwo.results];

		const filteredMoviesData = await filterMovieData(allMoviesData);

		return filteredMoviesData;
	}
}
