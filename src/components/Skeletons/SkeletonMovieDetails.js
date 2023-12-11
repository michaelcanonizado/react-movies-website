import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import SkeletonMovieCredits from './SkeletonMovieCredits';

import screenBreakpoints from '../../helpers/screenBreakpoints';

export default function SkeletonMovieDetails() {
	return (
		<>
			<section
				className={`px-4 m-auto relative pt-[52px] leading-[1] ${screenBreakpoints}`}
			>
				<div className="flex justify-between mb-[0.5rem]">
					<div className="w-[70%] lg:w-[50%]">
						{/* MOVIE TITLE */}
						<div className={`text-[3rem] mr-[8px] `}>
							<Skeleton width="100%" />
						</div>

						{/* MOVIE SHORT DETAILS */}
						<div className="flex self-center text-[.875rem] mt-[8px]">
							<Skeleton containerClassName="flex-1" width="100px" />
						</div>
					</div>
					{/* MOVIE RATING CARD */}
					<div className="hidden lg:flex gap-[8px]">
						<Skeleton
							containerClassName="flex-1"
							width="100px"
							height="65px"
						/>
						<Skeleton
							containerClassName="flex-1"
							width="100px"
							height="65px"
						/>
					</div>
				</div>

				<div
					className="
                    flex
                    flex-col-reverse
                    md:flex-row
                    
                    gap-[10px]"
				>
					{/* MOVIE POSTER */}
					<div
						className="aspect-poster hidden
                            md:block
                            md:w-[300px]
                            lg:w-[231px] 
                            xl:w-[278px]"
					>
						<Skeleton
							containerClassName="flex-1"
							width="100%"
							height="100%"
						/>
					</div>
					{/* MOVIE TRAILER */}
					<div
						className="aspect-video
                        sm:w-full
                        md:w-[800px]
                        lg:w-[604px] 
                        xl:w-[741px]
                        "
					>
						<Skeleton
							containerClassName="flex-1"
							width="100%"
							height="100%"
						/>
					</div>
					{/* MOVIE VIDEOS AND IMAGES */}
					<div className="grow gap-[10px] hidden lg:grid">
						<Skeleton
							containerClassName="flex-1"
							width="100%"
							height="100%"
						/>
						<Skeleton
							containerClassName="flex-1"
							width="100%"
							height="100%"
						/>
					</div>
				</div>
			</section>

			<div
				className={`pt-[16px] px-4 m-auto
                    flex flex-col lg:flex-row lg:justify-between relative pb-[50px] ${screenBreakpoints}`}
			>
				<section
					className="w-full lg:max-w-[653px] xl:max-w-[813px] 
                        flex gap-[10px]"
				>
					{/* MOVIE POSTER */}
					<div className="">
						<div
							className="aspect-poster 
                        sm:block
                        md:hidden
                        w-[120px]"
						>
							<Skeleton
								containerClassName="flex-1"
								width="100%"
								height="100%"
							/>
						</div>
					</div>
					<div className="shrink grow w-[100px]">
						{/* MOVIE GENRE PILL */}
						<div className="flex gap-[.5rem] mb-[.5rem] w-fit overflow-hidden">
							<Skeleton
								containerClassName="flex-1"
								width="75px"
								height="25px"
								borderRadius="9999px"
							/>
							<div className="hidden xs:block">
								<Skeleton
									containerClassName="flex-1"
									width="75px"
									height="25px"
									borderRadius="9999px"
								/>
							</div>

							<div className="hidden sm:block">
								<Skeleton
									containerClassName="flex-1"
									width="75px"
									height="25px"
									borderRadius="9999px"
								/>
							</div>
						</div>

						{/* MOVIE DESCRIPTION */}
						<div className="mb-[1rem]">
							<p
								className="
                                    w-full
                                    text-sm
                                    md:text-base"
							>
								<Skeleton count={2} />
								<Skeleton count={2} />
								<div className="block md:hidden">
									<Skeleton count={3} />
								</div>
							</p>
						</div>

						{/* MOVIE CREDITS */}
						<div className="hidden md:block">
							<div className="overflow-hidden">
								<SkeletonMovieCredits creditCount={3} />
								<SkeletonMovieCredits creditCount={3} />
								<SkeletonMovieCredits creditCount={3} />
							</div>
						</div>
					</div>
				</section>
				<section className="mt-[10px] lg:mt-0 lg:max-w-[295px] xl:max-w-[356px] w-full flex flex-col lg:items-center justify-center">
					{/* MOVIE CREDITS */}
					<div className="block md:hidden ">
						<div className="overflow-hidden">
							<SkeletonMovieCredits creditCount={3} />
							<SkeletonMovieCredits creditCount={3} />
							<SkeletonMovieCredits creditCount={3} />
						</div>
					</div>
					{/* MOVIE RATING */}
					<div className="flex lg:hidden gap-[8px] w-fit">
						<Skeleton
							containerClassName="flex-1"
							width="75px"
							height="25px"
						/>
						<Skeleton
							containerClassName="flex-1"
							width="75px"
							height="25px"
						/>
					</div>
					<div
						className="w-full max-w-[432px] lg:w-full mt-[20px] lg:mt-0 leading-[1]
                        "
					>
						{/* MOVIE ADD TO WISHLIST CTA */}
						<div className="flex grow shrink h-[48px]">
							<Skeleton
								containerClassName="flex-1"
								width="100%"
								height="100%"
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
