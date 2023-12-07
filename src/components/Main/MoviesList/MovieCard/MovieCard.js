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

	return (
		<div className={`bg-secondary-200 rounded-md overflow-hidden ${className}`}>
			<Link to={`/movie/${id}`}>
				<div className="h-[278px] w-full hover:cursor-pointer hover:brightness-90">
					<img src={image} alt={title} className="h-full object-cover" />
				</div>
			</Link>
			<div className="mt-[18px] mb-[10px] mx-[10px] flex flex-col">
				<div className="flex">
					<div className="flex">
						<span className="mt-[4px]">
							<img
								src="/icon-rating-star-yellow-14.svg"
								alt={`${title}'s rating is ${rating}`}
							/>
						</span>
						<span className="ml-[6px] font-semibold">{rating}</span>
					</div>
					<div className="grid h-[28px] w-[40px] px-[12px] ml-[8px] pt-[4px] hover:cursor-pointer hover:bg-secondary-100 rounded">
						<img
							src="/icon-rating-star-blue-14.svg"
							alt={`${title}'s rating is ${rating}`}
						/>
					</div>
				</div>
				<Link
					to={`/movie/${id}`}
					className="text-ellipsis overflow-hidden movie-card_line-clamp h-[48px]
				
					hover:cursor-pointer group
				"
				>
					<span className="font-medium tracking-[.03125em] leading-[1.5rem] group-hover:underline">
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
					<a className="text-accent-200 flex" href={trailerLink}>
						<span className="grid place-items-center">
							<img
								src="/icon-add-to-watchlist-16.svg"
								alt="Add to watchlist"
							/>
						</span>
						<span className="ml-[9px]">Watchlist</span>
					</a>
				</div>
			</div>
		</div>
	);
}
