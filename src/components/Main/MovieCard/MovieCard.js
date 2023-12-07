import React from 'react';

export default function MovieCard({
	id,
	rating,
	title,
	image,
	trailerLink,
	className,
}) {
	return (
		<div className={`bg-secondary-200 rounded-md overflow-hidden ${className}`}>
			<div className="h-[278px] w-full hover:cursor-pointer hover:brightness-90">
				<img src={image} alt={title} className="h-full object-cover" />
			</div>
			<div className="mt-[18px] mb-[18px] mx-[10px]">
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
				<div className="text-ellipsis overflow-hidden movie-card_line-clamp h-[48px]">
					<span className="font-medium tracking-[.03125em] leading-[1.5rem] ">
						{title}
					</span>
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
				<div className="mt-[11px] grid place-items-center">
					<a
						className="py-[9px] px-[16px] rounded flex hover:cursor-pointer hover:bg-secondary-100 transition-colors duration-150 ease-in-out"
						href={trailerLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="grid place-items-center">
							<img
								src="/icon-watch-trailer-16.svg"
								alt="Add to watchlist"
							/>
						</span>
						<span className="ml-[9px]">Trailer</span>
					</a>
				</div>
			</div>
		</div>
	);
}
