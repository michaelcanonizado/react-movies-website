import React, { useState } from 'react';

export default function Navbar({ className }) {
	const [focusedInput, setFocusedInput] = useState(false);
	const [searchBarIsShown, setSearchBarIsShown] = useState(false);

	const onFocus = () => setFocusedInput(true);
	const onBlur = () => setFocusedInput(false);

	const toggleSearchBar = () => {
		setSearchBarIsShown(!searchBarIsShown);
	};

	return (
		<header className="bg-secondary-300 w-full">
			<nav
				className={`py-3 px-6 
			
				max-w-[1280px] 
				
				m-auto flex 
				
				gap-2
				md:gap-8 
				
				content-center
				 ${className}`}
			>
				<div className="grid place-items-center">
					<div
						className="bg-accent-100 rounded w-fit 
					
					sm:h-[40px]
					
					px-[10px] pt-[2px] grid place-items-center"
					>
						<a className="" href="/popular">
							<span
								className="text-secondary-200 font-display whitespace-nowrap

							text-xl
							sm:text-2xl
							xl:text-3xl"
							>
								REACT MOVIES
							</span>
						</a>
					</div>
				</div>

				<div
					className=" grow shrink  justify-end

				flex
				md:hidden
				"
				>
					<div
						className={`fixed z-50 inset-x-0 top-0 bg-secondary-100
					
						transition-all
						duration-[100ms]

						translate-y-[-100%]
						${searchBarIsShown ? 'translate-y-[0%]' : ''}
						`}
					>
						<div className="flex">
							<form className="grow shrink min-w-[50px]">
								<input
									type="text"
									className="text-lg tracking-wider bg-secondary-100 font-neutral h-full  outline-none
								
								px-[15px]
								py-[18px]
								"
									placeholder="Search coming soon..."
								></input>
							</form>
							<button className="w-[40px]" onClick={toggleSearchBar}>
								<div className="w-[15px]">
									<img
										src="/icon-search-exit-white.svg"
										alt="exit search"
										className="w-full h-full"
									/>
								</div>
							</button>
						</div>
					</div>
					<button
						className=" text-secondary-200 h-full border-[none] grid place-items-center"
						onClick={toggleSearchBar}
					>
						<div className="w-[20px]">
							<img src="/icon-search-white.svg" alt="Search movie" />
						</div>
					</button>
				</div>

				<div
					className="bg-neutral rounded-md overflow-hidden w-[720px] group shrink
				
				hidden
				md:block
				"
				>
					<form
						className={`flex h-full pl-5 rounded-[inherit] text-secondary-200  border-2 ${
							focusedInput
								? 'border-accent-100'
								: 'border-[transparent]'
						} transition-all`}
					>
						<input
							type="text"
							className="h-full grow shrink min-w-[50px]
							
							outline-none tracking-wide pb-[2px]"
							placeholder="Search React Movies"
							onFocus={onFocus}
							onBlur={onBlur}
						/>
						<button className=" text-secondary-200 h-full w-[70px] border-[none] grid place-items-center">
							<div className="w-[20px]">
								<img
									src="/icon-search-grey.svg"
									alt="Search movie"
								/>
							</div>
						</button>
					</form>
				</div>

				<div className="flex content-center">
					<div className="grid items-center">
						<a
							className="h-fit"
							href="https://www.themoviedb.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span
								className="
							lg:text-sm
							xl:text-base 
							
							font-bold tracking-[0.02em] 
							
							flex flex-wrap justify-center
							"
							>
								<span
									className="  place-items-center mr-1 mb-[-4px]
								
								hidden
								lg:grid
								"
								>
									Powered by
								</span>
								<span
									className="text-accent-300  font-black tracking-wider grid place-items-center 
								
								text-sm
								sm:text-base

								mr-[0px]
								md:mr-1
								"
								>
									TMDB
								</span>{' '}
								<span
									className="
								text-xs
								xl:text-base 
								
								lg:mt-[5px]
								xl:mt-[-1px]
								
								hidden
								lg:block
								"
								>
									API
								</span>
							</span>
						</a>
					</div>
					<div className="grid place-items-center">
						<div
							className="h-[75%] w-[2px] rounded 
						
						mx-2
						md:mx-5 
						
						bg-secondary-100"
						></div>
					</div>
					<div className="grid items-center">
						<a className="h-fit" href="/">
							<span
								className="
							text-sm
							sm:text-base 
							
							font-bold tracking-[0.03em]"
							>
								Wishlist
							</span>
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}
