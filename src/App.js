import { useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainRootLayout from './pages/MainRootLayout';
import MoviesListRootLayout from './pages/MoviesListRootLayout';
import MainError from './pages/MainError';
import MoviesListError from './pages/MoviesListError';
import Home from './pages/Home';
import MovieDetailsPage, {
	loader as MovieDetailsLoader,
} from './pages/MovieDetailsPage';
import Popular, { loader as popularMoviesLoader } from './pages/Popular';
import TopRated, { loader as topRatedMoviesLoader } from './pages/TopRated';
import NowPlaying from './pages/NowPlaying';
import Upcoming from './pages/Upcoming';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainRootLayout />,
		errorElement: <MainError />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: '/movie/:movieId',
				element: <MovieDetailsPage />,
				loader: MovieDetailsLoader,
			},

			{
				path: 'popular',
				element: <MoviesListRootLayout />,
				errorElement: <MoviesListError />,
				children: [
					{
						index: true,
						element: <Popular />,
						loader: popularMoviesLoader,
					},
				],
			},
			{
				path: 'top-rated',
				element: <MoviesListRootLayout />,
				children: [
					{
						index: true,
						element: <TopRated />,
						loader: topRatedMoviesLoader,
					},
				],
			},
			{
				path: 'now-playing',
				element: <MoviesListRootLayout />,
				children: [{ index: true, element: <NowPlaying /> }],
			},
			{
				path: 'upcoming',
				element: <MoviesListRootLayout />,
				children: [{ index: true, element: <Upcoming /> }],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
