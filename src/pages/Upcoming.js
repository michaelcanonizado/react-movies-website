import React from 'react';

import { options } from './../helpers/fecthOptions';
import filterMovieData from '../helpers/filterMovieData';

import MoviesList from '../components/Main/MoviesList/MoviesList';

import { useLoaderData, json } from 'react-router-dom';

export default function Upcoming() {
	const movies = useLoaderData();

	return <MoviesList movies={movies} />;
}

export async function loader() {
	const response = await Promise.all([
		fetch(
			'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
			options
		),
		fetch(
			'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2',
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
