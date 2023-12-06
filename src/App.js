import { useEffect } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
	useEffect(() => {
		// https://imdb-api.com/en/API/Title/k_w5557402/tt1375666/FullActor,FullCast,Posters,Images,Trailer,Ratings,
		const fetchMovie = async () => {
			const response = await fetch(
				'https://imdb-api.com/en/API/Title/k_w5557402/tt0110413'
			);
			const movie = await response.json();
			console.log(movie);
		};
		fetchMovie();
	}, []);

	return (
		<div className="bg-primary text-neutral h-screen font-serif">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
