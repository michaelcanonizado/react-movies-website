// Helper function to get the needed movie details to be displayed in /movie/${movieId}

import filterMoviesData from './filterMoviesData';

const filterMovieData = async (
	movieDetails,
	movieCredits,
	movieSimilars,
	movieVideos
) => {
	// Filter needed information from main movie details response
	const filteredMovieData = {
		id: movieDetails.id,
		title: movieDetails.original_title,
		rating: movieDetails.vote_average.toFixed(2),
		image: `https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`,
		releaseDate: movieDetails.release_date,
		language: movieDetails.original_language,
		backdrop: movieDetails.backdrop_path,
		description: movieDetails.overview,
		genres: movieDetails.genres,
		runtime: movieDetails.runtime,
		status: movieDetails.status,
		tagline: movieDetails.tagline,
	};

	// Check if movie does not have videos, else get trailer
	if (movieVideos.results.length === 0) {
		filteredMovieData.trailerLink = null;
	} else {
		const filteredVideo = movieVideos.results.filter((video) => {
			if (video.type === 'Trailer') {
				return video;
			}
		});

		// If no trailer was found, set trailerLink to null
		if (filterMovieData.length === 0) {
			filteredMovieData.trailerLink = null;
		} else {
			filteredMovieData.trailerLink = `https://www.youtube.com/watch?v=${filteredVideo[0].key}`;
		}
	}

	// Get similar movies
	if (movieSimilars.results.length === 0) {
		filteredMovieData.similarMovies = null;
	} else {
		filteredMovieData.similarMovies = await filterMoviesData(
			movieSimilars.results
		);
	}

	// Get movie credits
	console.log(movieCredits);
	const credits = {
		cast: [movieCredits.cast[0], movieCredits.cast[1], movieCredits.cast[2]],
		director: movieCredits.crew.filter((crew) => {
			if (crew.job === 'Director') {
				return crew;
			}
		}),
		producer: movieCredits.crew.filter((crew) => {
			if (crew.job === 'Producer') {
				return crew;
			}
		}),
	};

	filteredMovieData.credits = credits;

	return filteredMovieData;
};

export default filterMovieData;
