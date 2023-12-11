import React from 'react';

export default function RatesCard({ type, movieId, rating }) {
	let header = '-----';
	if (type === 'ratingResults') {
		header = 'TMDB RATING';
	} else if (type === 'castRating') {
		header = 'YOUR RATING';
	}

	const typographySharedClasses = 'text-[1rem] lg:text-[1.25rem]';

	const ratingResultsComponent = (
		<a
			className={`flex justify-center mr-[4px] mt-[6px]`}
			href={`/movie/${movieId}`}
		>
			<div className="grid place-content-center mt-[2px]">
				<img
					className="w-[30px] lg:w-[40px]"
					src="/icon-rating-star-red-16.svg"
					alt="Movie Rating"
				/>
			</div>
			<div className="tracking-wide lg:mt-[-2px]">
				<div className="">
					<span
						className={`font-bold ${typographySharedClasses} text-[1.25rem]`}
					>
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
					className="w-[20px] lg:w-[25px]"
					src="/icon-rating-star-blue-14.svg"
					alt="Movie Rating"
				/>
			</div>
			<div
				className="tracking-wide 
			
			lg:mt-[-2px] 
			
			ml-[4px]"
			>
				<span
					className={`text-accent-200 font-bold ${typographySharedClasses}`}
				>
					Rate
				</span>
			</div>
		</a>
	);

	return (
		<div className="">
			<div
				className="justify-center mb-[4px]
			
			hidden lg:flex
			"
			>
				<span
					className="text-secondary-400  tracking-widest font-bold
				
					text-[12px]
					xl:text-[14px]
				"
				>
					{header}
				</span>
			</div>
			<div
				className={`
				
				hover:backdrop-blur-xl
				hover:backdrop-brightness-[85%]
				hover:cursor-pointer 
				
				h-[40px] 
				
				grid place-items-center rounded-md`}
			>
				{type === 'ratingResults'
					? ratingResultsComponent
					: castRatingComponent}
			</div>
		</div>
	);
}
