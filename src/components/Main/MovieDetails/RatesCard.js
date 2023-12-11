import React from 'react';

export default function RatesCard({ type, movieId, rating }) {
	let header = '-----';
	if (type === 'ratingResults') {
		header = 'TMDB RATING';
	} else if (type === 'castRating') {
		header = 'YOUR RATING';
	}

	const ratingResultsComponent = (
		<a
			className={`flex justify-center mr-[4px] mt-[6px]`}
			href={`/movie/${movieId}`}
		>
			<div className="grid place-content-center">
				<img
					className="w-[40px]"
					src="/icon-rating-star-red-16.svg"
					alt="Movie Rating"
				/>
			</div>
			<div className="tracking-wide mt-[-2px]">
				<div className="">
					<span className="font-bold text-[1.25rem]">
						{parseFloat(rating).toFixed(1)}
					</span>
					<span className="">/10</span>
				</div>
			</div>
		</a>
	);

	const castRatingComponent = (
		<a className={`flex justify-center`} href={`/movie/${movieId}`}>
			<div className="grid place-content-center">
				<img
					className="w-[25px]"
					src="/icon-rating-star-blue-14.svg"
					alt="Movie Rating"
				/>
			</div>
			<div className="tracking-wide mt-[-2px] ml-[4px]">
				<span className="text-accent-200 font-bold text-[1.25rem]">
					Rate
				</span>
			</div>
		</a>
	);

	return (
		<div className="">
			<div className="flex justify-center mb-[4px]">
				<span className="text-secondary-400 text-[14px] tracking-widest font-bold">
					{header}
				</span>
			</div>
			<div
				className={`hover:bg-secondary-100 hover:backdrop-blur-xl hover:bg-opacity-10 hover:cursor-pointer h-[40px] grid place-items-center rounded-md`}
			>
				{type === 'ratingResults'
					? ratingResultsComponent
					: castRatingComponent}
			</div>
		</div>
	);
}
