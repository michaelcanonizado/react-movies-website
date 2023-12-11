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
		image: `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`,
		backdrop: `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`,
		releaseDate: movieDetails.release_date,
		language: movieDetails.original_language,
		description: movieDetails.overview,
		genres: movieDetails.genres,
		runtime: movieDetails.runtime,
		status: movieDetails.status,
		tagline: movieDetails.tagline,
	};

	console.log(movieDetails);

	// Check if movie does not have videos, else get trailer
	if (movieVideos.results.length === 0) {
		filteredMovieData.trailer = null;
	} else {
		const filteredVideo = movieVideos.results.filter((video) => {
			if (video.type === 'Trailer') {
				return video;
			}
		});

		// If no trailer was found, set trailer to null
		if (filterMovieData.length === 0) {
			filteredMovieData.trailer = null;
		} else {
			filteredMovieData.trailer = {
				youtubeLink: `https://www.youtube.com/watch?v=${filteredVideo[0].key}`,
				youtubeId: filteredVideo[0].key,
			};
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
	const credits = {
		casts: [movieCredits.cast[0], movieCredits.cast[1], movieCredits.cast[2]],
		directors: movieCredits.crew
			.filter((crew) => {
				if (crew.job === 'Director' || crew.department === 'Directing') {
					return crew;
				}
			})
			.slice(0, 3),
		writers: movieCredits.crew
			.filter((crew) => {
				if (crew.department === 'Writing') {
					return crew;
				}
			})
			.slice(0, 3),
	};

	filteredMovieData.credits = credits;

	return filteredMovieData;
};

export default filterMovieData;
