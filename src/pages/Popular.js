import React from 'react';

import MoviesList from './../components/Main/MoviesList';

import { options } from './../helpers/fecthOptions';

import { useLoaderData, json } from 'react-router-dom';

export default function Popular() {
	const movies = useLoaderData();

	return <MoviesList pageTitle="Popular" movies={movies} />;
}

export async function loader() {
	const movies = [];

	const pageOneResponse = await fetch(
		'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
		options
	);
	const pageTwoResponse = await fetch(
		'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2',
		options
	);
	if (!pageOneResponse.ok || !pageTwoResponse.ok) {
		throw json(
			{
				message:
					'Something went wrong with the API request, could not fetch Popular movies. Please visit another list or try again later.',
				statusMessage: 'BAD REQUEST',
			},
			{ status: 400 }
		);
	} else {
		//return movies[...pageOneResponse.results.json(), ...pageTwoResponse.results.json()]

		// movies.push(
		// 	...pageOneResponse.results.json(),
		// 	...pageTwoResponse.results.json()
		// );
		// console.log(movies);
		console.log(pageOneResponse);
	}
}
