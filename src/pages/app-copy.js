import { Suspense, lazy } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';

// Skeletons
import SkeletonMoviesList from './components/Skeletons/SkeletonMoviesList';
import SkeletonMovieDetails from './components/Skeletons/SkeletonMovieDetails';

// Components - Layouts
import MainRootLayout from './pages/MainRootLayout';
import MoviesListRootLayout from './pages/MoviesListRootLayout';
// Components - Erros pages
import MainError from './pages/MainError';
import MoviesListError from './pages/MoviesListError';
// Components - Home Page
import HomePage from './pages/HomePage';
// Components - Movie Details Page
import { loader as MovieDetailsLoader } from './pages/MovieDetailsPage';
// Components - Movie Lists
import { loader as popularMoviesLoader } from './pages/Popular';
import { loader as topRatedMoviesLoader } from './pages/TopRated';
import { loader as nowPlayingMoviesLoader } from './pages/NowPlaying';
import { loader as upcomingMoviesLoader } from './pages/Upcoming';

// Components - Lazy Pages
const LazyMovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const LazyPopular = lazy(() => import('./pages/Popular'));
const LazyTopRated = lazy(() => import('./pages/TopRated'));
const LazyNowPlaying = lazy(() => import('./pages/NowPlaying'));
const LazyUpcoming = lazy(() => import('./pages/Upcoming'));


function App() {
	return (
		<SkeletonTheme baseColor="#2C2C2C" highlightColor="#3C3C3C" duration={0.8}>
			<HashRouter>
                
            </HashRouter>
		</SkeletonTheme>
	);
}
