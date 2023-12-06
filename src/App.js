import { useEffect } from 'react';

import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import Home from './pages/Home';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import NowPlaying from './pages/NowPlaying';
import Upcoming from './pages/Upcoming';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'popular', element: <Popular /> },
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
