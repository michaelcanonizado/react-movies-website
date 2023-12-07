const filterMovieData = async (movies) => {
	const data = [];

	for (const movie of movies) {
		data.push({
			id: movie.id,
			title: movie.original_title,
			rating: movie.vote_average.toFixed(2),
			image: `https://image.tmdb.org/t/p/w342/${movie.poster_path}`,
			releaseDate: movie.release_date,
			language: movie.original_language,
		});
	}

	return data;
};

export default filterMovieData;
