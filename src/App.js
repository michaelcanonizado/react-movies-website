import { useEffect } from 'react';

import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import Home from './pages/Home';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import NowPlaying from './pages/NowPlaying';
import Upcoming from './pages/Upcoming';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWU4Yzg0ZWU3NTA2MmYxOGZmZThhNGI3M2U1YWRhOSIsInN1YiI6IjY1NzA1OGI5NDFhZDhkMDZlNGQxZjBiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pCQduxZZcjV9NsgekRzeq1a-QeaZ0SHRTDvp-2pXM_Q',
	},
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'popular',
				element: <Popular />,
				loader: async () => {
					const response = await fetch(
						'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
						options
					);
					if (!response.ok) {
						console.log(response);
					} else {
						const movies = response.json();
						return movies;
					}
				},
			},
			{ path: 'top-rated', element: <TopRated /> },
			{ path: 'now-playing', element: <NowPlaying /> },
			{ path: 'upcoming', element: <Upcoming /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
