import React from 'react';

import MoviesList from './../components/Main/MoviesList';

import { options } from './../helpers/fecthOptions';

import { useLoaderData } from 'react-router-dom';

export default function Popular() {
	const movies = useLoaderData();

	return <MoviesList pageTitle="Popular" movies={movies} />;
}

export async function loader() {
	const response = await fetch(
		'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
		options
	);
	if (!response.ok) {
		console.log(response);
	} else {
		const movies = response.json();
		return movies;
	}
}
