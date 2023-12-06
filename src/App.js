import { useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainRootLayout from './pages/MainRootLayout';
import MoviesListRootLayout from './pages/MoviesListRootLayout';
import Error from './pages/Error';
import Home from './pages/Home';
import Popular, { loader as popularMoviesLoader } from './pages/Popular';
import TopRated from './pages/TopRated';
import NowPlaying from './pages/NowPlaying';
import Upcoming from './pages/Upcoming';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainRootLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'popular',
				element: <MoviesListRootLayout />,
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
				children: [{ index: true, element: <TopRated /> }],
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
