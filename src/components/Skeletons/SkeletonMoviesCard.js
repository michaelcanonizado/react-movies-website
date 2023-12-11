import React from 'react';
import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonMoviesCard() {
	return (
		<div className={`bg-secondary-200 rounded-md overflow-hidden`}>
			{/* Movie Poster */}
			<div className="aspect-poster w-full mt-[-4px]">
				<Skeleton width="100%" height="100%" />
			</div>
			<div className="mt-[18px] mb-[10px] mx-[10px] flex flex-col">
				{/* Movie Rating */}
				<div className="text-base">
					<Skeleton width="60%" />
				</div>
				{/* Movie Title */}
				<div className="h-[44px]">
					<Skeleton width="100%" />
				</div>
				{/* Movie Short Details */}
				<div className="mt-[14px] grid w-[80%] mx-auto grid-cols-3 gap-[6px]">
					<div className="text-sm">
						<Skeleton width="100%" />
					</div>
					<div className="text-sm">
						<Skeleton width="100%" />
					</div>
					<div className="text-sm">
						<Skeleton width="100%" />
					</div>
				</div>
				{/* Movie Add to Watchlist CTA */}
				<div
					className="mt-[4px] 
                        h-[36px]
                        md:h-[36px]
						lg:h-[38px]
                        xl:h-[42px]"
				>
					<Skeleton height="90%" width="100%" />
				</div>
			</div>
		</div>
	);
}
