import React from 'react';

import { Link } from 'react-router-dom';

export default function MovieCard({
	id,
	rating,
	title,
	image,
	trailerLink,
	className,
	releaseDate,
	language,
}) {
	const dateObject = new Date(releaseDate);
	const releaseYear = dateObject.getFullYear();

	// sm:h-full
	// md:h-fit
	// md:max-h-[353px]
	// lg:h-[225px]
	// xl:h-[278px]

	return (
		<div className={`bg-secondary-200 rounded-md overflow-hidden ${className}`}>
			<Link to={`/movie/${id}`}>
				<div
					className="
					aspect-poster 
				w-full hover:cursor-pointer hover:brightness-90"
				>
					<img src={image} alt={title} className="w-full object-cover" />
				</div>
			</Link>
			<div className="mt-[18px] mb-[10px] mx-[10px] flex flex-col">
				<div className="flex">
					<div className="flex">
						<span
							className="
						mt-[4px] 
						xl:mt-[3px]"
						>
							<img
								src="/icon-rating-star-red-14.svg"
								alt={`${title}'s rating is ${rating}`}
							/>
						</span>
						<span className="ml-[6px] text-secondary-400">{rating}</span>
					</div>
					<div
						className="grid h-[28px] w-[40px] px-[12px] ml-[8px] 
					
					pt-[4px]
					xl:pt-[3px] 
					
					hover:cursor-pointer hover:bg-secondary-100 rounded"
					>
						<img
							src="/icon-rating-star-blue-14.svg"
							alt={`${title}'s rating is ${rating}`}
						/>
					</div>
				</div>

				<Link
					to={`/movie/${id}`}
					className="text-ellipsis overflow-hidden movie-card_line-clamp 
					
					h-[44px]
				
					hover:cursor-pointer group 

					leading-[1.3rem]
				"
				>
					<span className="font-normal tracking-[.03125em]  group-hover:underline">
						{title}
					</span>
				</Link>

				<div className="mt-[12px] flex self-center font-light text-xs tracking-wider">
					<span className="">{releaseYear}</span>
					<span className="font-black mx-[6px] grid place-items-center">
						<img src="icon-dot-4.svg" alt={`${title} details`} />
					</span>
					<span className="">{language.toUpperCase()}</span>
					<span className="font-black mx-[6px] grid place-items-center">
						<img src="icon-dot-4.svg" alt={`${title} details`} />
					</span>
					<span className="">Movie</span>
				</div>

				<div className="mt-[12px] py-[9px] rounded grid place-items-center bg-secondary-100 hover:cursor-pointer hover:bg-[#30353C] transition-colors duration-150 ease-in-out">
					<a className="text-accent-200 flex" href="/popular">
						<span
							className="grid place-items-center 
						
						w-[12px]
						xl:w-[16px]"
						>
							<img
								src="/icon-add-to-watchlist-blue.svg"
								alt="Add to watchlist"
							/>
						</span>
						<span
							className="font-medium tracking-wider

						text-sm
						lg:text-sm 
						xl:text-base

						mb-[-2px]

						ml-[6px]
						lg:mt-[2px]
						xl:ml-[9px]"
						>
							Watchlist
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}
