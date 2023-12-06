import React, { useState } from 'react';

export default function Navbar() {
	const [focusedInput, setFocusedInput] = React.useState(false);
	const onFocus = () => setFocusedInput(true);
	const onBlur = () => setFocusedInput(false);

	return (
		<nav className="py-3 px-6 flex gap-8 content-center bg-secondary-300">
			<div className="">
				<div className="bg-accent-100 rounded w-fit pt-[2px] pb-[0px] px-[10px]">
					<a className="" href="/">
						<span className="text-secondary-200 font-display text-3xl">
							REACT MOVIES
						</span>
					</a>
				</div>
			</div>
			<div className="bg-neutral rounded-md overflow-hidden w-[720px] group">
				<form
					className={`flex h-full pl-5 rounded-[inherit] text-secondary-200  border-2 ${
						focusedInput ? 'border-accent-100' : 'border-[transparent]'
					} transition-all`}
				>
					<input
						type="text"
						className="h-full w-[90%] outline-none tracking-wide"
						placeholder="Search React Movies"
						onFocus={onFocus}
						onBlur={onBlur}
					/>
					<button className=" text-secondary-200 h-full w-[10%] border-[none] grid place-items-center">
						<img src="/icon-search.svg" alt="Search movie" />
					</button>
				</form>
			</div>
			<div className="flex content-center">
				<div className="grid items-center">
					<a className="h-fit" href="/">
						<span className="text-base font-bold tracking-[0.0125em]">
							Powered by <span className="text-IMDb">IMDb</span> API
						</span>
					</a>
				</div>
				<div className="h-full w-[2px] rounded mx-5 bg-neutral"></div>
				<div className="grid items-center">
					<a className="h-fit" href="/">
						<span>+</span>
						<span className="text-base font-bold tracking-[0.03em]">
							Wishlist
						</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
