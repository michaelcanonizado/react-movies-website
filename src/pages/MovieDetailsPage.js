import React from 'react';
import { useLoaderData, json } from 'react-router-dom';

import { options } from './../helpers/fecthOptions';
import filterMovieData from '../helpers/filterMovieData';

import MovieDetails from '../components/Main/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
	const movieDetails = useLoaderData();

	console.log(movieDetails);

	return <MovieDetails movieDetails={movieDetails} />;
}

export async function loader({ request, params }) {
	const response = await Promise.all([
		fetch(`https:api.themoviedb.org/3/movie/${params.movieId}`, options),
		fetch(
			`https://api.themoviedb.org/3/movie/${params.movieId}/credits`,
			options
		),
		fetch(
			`https://api.themoviedb.org/3/movie/${params.movieId}/similar`,
			options
		),
		fetch(
			`https://api.themoviedb.org/3/movie/${params.movieId}/videos`,
			options
		),
	]);

	if (!response[0].ok || !response[1].ok || !response[2].ok || !response[3].ok) {
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
		const movieDetails = await response[0].json();
		const movieCredits = await response[1].json();
		const movieSimilars = await response[2].json();
		const movieVideos = await response[3].json();

		const filteredMovieData = await filterMovieData(
			movieDetails,
			movieCredits,
			movieSimilars,
			movieVideos
		);
		return filteredMovieData;
	}
}
