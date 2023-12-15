import React, { Suspense } from 'react';

import { options } from './../helpers/fecthOptions';
import filterMovieData from '../helpers/filterMovieData';

import MovieDetails from '../components/Main/MovieDetails/MovieDetails';

import SkeletonMovieDetails from '../components/Skeletons/SkeletonMovieDetails';

import { useLoaderData, json, defer, Await } from 'react-router-dom';

export default function MovieDetailsPage() {
	const { movieDetails } = useLoaderData();

	return (
		<Suspense fallback={<SkeletonMovieDetails />}>
			<Await resolve={movieDetails}>
				{(loadedMovieData) => <MovieDetails movie={loadedMovieData} />}
			</Await>
		</Suspense>
	);
}

async function getMovieDetails(params) {
	const response = await Promise.all([
		fetch(`https://api.themoviedb.org/3/movie/${params.movieId}`, options),
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
		console.log('SOMETHING WENT WRONG');
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

		// console.log(filteredMovieData);
		return filteredMovieData;
	}
}

export async function loader({ request, params }) {
	return defer({
		movieDetails: getMovieDetails(params),
	});
}
