import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import SkeletonMoviesCard from './SkeletonMoviesCard';

export default function SkeletonMoviesList() {
	return (
		<section
			className="pt-[32px] grid grid-rows-auto 
            grid-cols-2 
            md:grid-cols-4 
            lg:grid-cols-6 
            
            gap-y-[16px] 
            gap-x-[10px] 
            
            sm:gap-x-[12px] 
            md:gap-[12px] 
            lg:gap-[16px]  
            xl:gap-[24px]"
		>
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
			<SkeletonMoviesCard />
		</section>
	);
}
