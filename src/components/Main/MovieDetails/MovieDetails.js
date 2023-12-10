import React from 'react';

import screenBreakpoints from './../../../helpers/screenBreakpoints';

import RatesCard from './RatesCard';
import MoviePoster from './MoviePoster';
import MovieTrailer from './MovieTrailer';
import GenrePill from './GenrePill';
import MovieCredits from './MovieCredits';

export default function MovieDetails({ movie }) {
	const {
		id,
		title,
		rating,
		ratingCount,
		image,
		releaseDate,
		backdrop,
		credits,
		description,
		genres,
		language,
		runtime,
		similarMovies,
		status,
		tagline,
		trailer,
	} = movie;

	const dateObject = new Date(releaseDate);
	const releaseYear = dateObject.getFullYear();

	return (
		<>
			<section
				className={`bg-no-repeat bg-cover bg-center relative`}
				style={{ backgroundImage: `url(${backdrop})` }}
			>
				<div
					className="absolute w-full h-full  backdrop-brightness-[60%] backdrop-blur-sm
				"
				></div>
				{/* rgba(44, 44, 44, 0.5) */}
				<div
					className="absolute w-full h-[75%] bottom-0"
					style={{
						background:
							'linear-gradient(to top, rgb(15, 15, 15, 0.9) 50%, rgb(255, 255, 255,0)',
					}}
				></div>

				<div
					className={`px-4 m-auto
					${screenBreakpoints} relative pt-[52px]`}
				>
					<div className="flex justify-between mb-[0.5rem]">
						<div className="mt-[-20px]">
							<div className="text-[3rem] mr-[8px]">{title}</div>

							<div className="flex self-center text-neutral font-normal text-[.875rem] tracking-wider mt-[-4px]">
								<span className="">{releaseYear}</span>
								<span className="font-black mx-[6px] w-[2px] grid place-items-center">
									<img
										src="/icon-dot-4.svg"
										alt={`${title} details`}
									/>
								</span>
								<span className="">{language.toUpperCase()}</span>
								<span className="font-black mx-[6px] w-[2px] grid place-items-center">
									<img
										src="/icon-dot-4.svg"
										alt={`${title} details`}
									/>
								</span>
								<span className="">
									{(runtime / 60).toFixed(1)}h
								</span>
							</div>
						</div>

						<div className="flex gap-[8px]">
							<RatesCard
								type="ratingResults"
								movieId={id}
								rating={rating}
								ratingCount={ratingCount}
							/>
							<RatesCard type="castRating" movieId={id} />
						</div>
					</div>

					<div
						className="
					flex
					flex-col-reverse
					md:flex-row
					
					gap-[10px]"
					>
						<MoviePoster
							link={image}
							title={title}
							className="
							sm:w-[120px]
							md:w-[300px]
							lg:w-[231px] 
							xl:w-[278px]"
						/>
						<div
							className="
							sm:w-full
						md:w-[800px]
						lg:w-[604px] 
						xl:w-[741px]
						"
						>
							<MovieTrailer trailer={trailer} movieId={id} />
						</div>
						<div className="grow gap-[10px] hidden lg:grid">
							<div
								className=" backdrop-blur-xl
							backdrop-brightness-[70%]
							 hover:cursor-pointer"
							>
								<span className=""></span>
							</div>
							<div
								className="backdrop-blur-xl
							backdrop-brightness-[70%]
							 hover:cursor-pointer"
							>
								<span className=""></span>
							</div>
						</div>
					</div>
				</div>

				<div
					className={`pt-[24px] px-4 m-auto
				${screenBreakpoints} relative`}
				>
					<div className="flex gap-[.5rem] mb-[.5rem]">
						{genres.map((genre) => {
							return (
								<GenrePill
									genre={genre.name}
									movieId={id}
									genreId={id}
									key={genre.id}
								/>
							);
						})}
					</div>
					<div className="">Description</div>
					<div className="">
						<div className="">
							<MovieCredits />
							<MovieCredits />
							<MovieCredits />
						</div>
						<div className="">Add to Watchlist</div>
					</div>
				</div>
			</section>
		</>
	);
}
