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
				<div className="absolute w-full h-full  backdrop-brightness-[60%]"></div>
				<div
					className="absolute w-full h-[50%] bottom-0"
					style={{
						background:
							'linear-gradient(to top, black 5%, rgba(255, 255, 255, 0))',
					}}
				></div>
				<div
					className={`px-4 pb-[24px] m-auto
					${screenBreakpoints} relative`}
				>
					<div className="flex justify-between">
						<div className="">
							<div className="text-[3rem]">{title}</div>

							<div className="mt-[12px] flex self-center font-light text-xs tracking-wider">
								<span className="">{releaseYear}</span>
								<span className="font-black mx-[6px] grid place-items-center">
									<img
										src="/icon-dot-4.svg"
										alt={`${title} details`}
									/>
								</span>
								<span className="">{language.toUpperCase()}</span>
								<span className="font-black mx-[6px] grid place-items-center">
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

						<div className="flex">
							<RatesCard />
							<RatesCard />
							<RatesCard />
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
							<MovieTrailer
								trailer={trailer}
								height="417px"
								width="741px"
							/>
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
			</section>

			<section
				className={`px-4 m-auto
			${screenBreakpoints}`}
			>
				<div className="flex">
					<GenrePill />
					<GenrePill />
					<GenrePill />
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
			</section>
		</>
	);
}
