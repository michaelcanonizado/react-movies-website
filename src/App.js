import { Suspense, lazy } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Skeletons
import SkeletonMoviesList from './components/Skeletons/SkeletonMoviesList';

// Components - Layouts
import MainRootLayout from './pages/MainRootLayout';
import MoviesListRootLayout from './pages/MoviesListRootLayout';
// Components - Erros pages
import MainError from './pages/MainError';
import MoviesListError from './pages/MoviesListError';
// Components - Home Page
import Home from './pages/Home';
// Components - Movie Details Page
import MovieDetailsPage, {
	loader as MovieDetailsLoader,
} from './pages/MovieDetailsPage';
// Components - Movie Lists
import { loader as popularMoviesLoader } from './pages/Popular';
import TopRated, { loader as topRatedMoviesLoader } from './pages/TopRated';
import NowPlaying, { loader as nowPlayingMoviesLoader } from './pages/NowPlaying';
import Upcoming, { loader as upcomingMoviesLoader } from './pages/Upcoming';

// Components - Lazy Pages
const LazyPopular = lazy(() => import('./pages/Popular'));

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
						element: (
							<Suspense fallback={<SkeletonMoviesList />}>
								<LazyPopular />
								{/* <SkeletonMoviesList /> */}
							</Suspense>
						),
						loader: popularMoviesLoader,
					},
				],
			},
			{
				path: 'top-rated',
				element: <MoviesListRootLayout />,
				errorElement: <MoviesListError />,
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
				errorElement: <MoviesListError />,
				children: [
					{
						index: true,
						element: <NowPlaying />,
						loader: nowPlayingMoviesLoader,
					},
				],
			},
			{
				path: 'upcoming',
				element: <MoviesListRootLayout />,
				errorElement: <MoviesListError />,
				children: [
					{
						index: true,
						element: <Upcoming />,
						loader: upcomingMoviesLoader,
					},
				],
			},
		],
	},
]);

function App() {
	return (
		<SkeletonTheme baseColor="#2C2C2C" highlightColor="#3C3C3C">
			<RouterProvider router={router} />
		</SkeletonTheme>
	);
}

export default App;
