import React from 'react';
import { useLoaderData, json } from 'react-router-dom';

import { options } from './../helpers/fecthOptions';

import MovieDetails from '../components/Main/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
	const movieDetails = useLoaderData();

	console.log(movieDetails);

	return <MovieDetails />;
}

export async function loader({ request, params }) {
	const response = await fetch(
		`https:api.themoviedb.org/3/movie/${params.movieId}`,
		options
	);

	if (!response.ok) {
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
		return response;
	}
}
