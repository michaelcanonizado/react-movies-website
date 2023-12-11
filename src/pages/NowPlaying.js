import React from 'react';

import { options } from './../helpers/fecthOptions';
import filterMoviesData from '../helpers/filterMoviesData';

import MoviesList from '../components/Main/MoviesList/MoviesList';

import SkeletonMoviesList from './../components/Skeletons/SkeletonMoviesList';

import { useLoaderData, json } from 'react-router-dom';

export default function NowPlaying() {
	const movies = useLoaderData();

	return <MoviesList movies={movies} />;
}

export async function loader() {
	const response = await Promise.all([
		fetch(
			'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
			options
		),
		fetch(
			'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2',
			options
		),
	]);

	if (!response[0].ok) {
		console.log(response);
		throw json(
			{
				message:
					'Something went wrong with the API request, could not fetch Popular movies. Please visit another list or try again later.',
				statusMessage: 'INTERNAL SERVER ERROR',
			},
			{ status: 500 }
		);
	} else {
		const pageOne = await response[0].json();
		const pageTwo = await response[1].json();

		const allMoviesData = [...pageOne.results, ...pageTwo.results];

		const filteredMoviesData = await filterMoviesData(allMoviesData);

		return filteredMoviesData;
	}
}
