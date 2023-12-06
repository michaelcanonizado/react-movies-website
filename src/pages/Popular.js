import React from 'react';

import MoviesList from './../components/Main/MoviesList';

import { useLoaderData } from 'react-router-dom';

export default function Popular() {
	const movies = useLoaderData();

	return <MoviesList pageTitle="Popular" movies={movies} />;
}
