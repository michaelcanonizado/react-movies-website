import React, { useState, useEffect } from 'react';

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

	const [isDescExpanded, setIsDescExpanded] = useState(false);
	const [isLongDesc, setIsLongDesc] = useState(false);
	const [isLongTitle, setIsLongTitle] = useState(false);

	// Check for the length of description and title
	useEffect(() => {
		if (description.length > 300) {
			setIsLongDesc(true);
		}
		if (title.length > 35) {
			setIsLongTitle(true);
		}
	}, [description, title]);

	// If description is long, show expand description button
	const onExpandDescriptionHandler = (e) => {
		setIsDescExpanded(!isDescExpanded);
	};
	const descriptionStyle = {
		webkitLineClamp: isDescExpanded ? '' : '5',
	};

	const dateObject = new Date(releaseDate);
	const releaseYear = dateObject.getFullYear();

	return (
		<>
			<div
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

				<section
					className={`px-4 m-auto
					${screenBreakpoints} relative pt-[52px]`}
				>
					<div className="flex justify-between mb-[0.5rem]">
						<div className="">
							<div
								className={`${
									isLongTitle ? 'text-[2rem]' : 'text-[3rem]'
								} mr-[8px] leading-[2.125rem]`}
							>
								{title}
							</div>

							<div
								className="flex self-center text-neutral font-normal text-[.875rem] tracking-wider 
							
							mt-[8px]
							ml-[4px]"
							>
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

						<div className="hidden lg:flex gap-[8px]">
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
							sm:hidden
							md:block
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
				</section>

				<div
					className={`pt-[16px] px-4 m-auto
					flex flex-col lg:flex-row lg:justify-between
				${screenBreakpoints} relative`}
				>
					<section className="lg:max-w-[653px] xl:max-w-[813px] w-full flex gap-[10px]">
						<MoviePoster
							link={image}
							title={title}
							className="
							sm:block
							min-w-[120px]
							md:hidden
							grow
							"
						/>
						<div className="">
							<div className="flex gap-[.5rem] mb-[.5rem] overflow-x-scroll">
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
							<div className="mb-[1rem]">
								<p
									className="tracking-[0.03125em] leading-[1.5rem] font-normal
								
								text-ellipsis overflow-hidden movie-details_line-clamp
								"
									style={descriptionStyle}
								>
									{description}
								</p>
								{isLongDesc ? (
									<span
										className="text-accent-200 hover:cursor-pointer hover:underline"
										onClick={onExpandDescriptionHandler}
									>
										{isDescExpanded ? 'Read Less' : 'Read More'}
									</span>
								) : (
									''
								)}
							</div>
							<div className="hidden md:block ">
								<MovieCredits credits={credits} movieId={id} />
							</div>
						</div>
					</section>
					<section className="mt-[20px] lg:mt-0 lg:max-w-[295px] xl:max-w-[356px] w-full">
						<div className="block md:hidden ">
							<MovieCredits credits={credits} movieId={id} />
						</div>

						<div className="">Add to Watchlist</div>
					</section>
				</div>
			</div>
		</>
	);
}
