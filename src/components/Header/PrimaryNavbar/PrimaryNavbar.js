import React from 'react';

export default function Navbar() {
	return (
		<nav className="font flex gap-8 content-center">
			<div className="">
				<div className="bg-accent rounded w-fit pt-[2px] pb-[0px] px-[10px]">
					<a className="" href="/">
						<span className="text-secondary-200 font-display text-3xl">
							REACT MOVIES
						</span>
					</a>
				</div>
			</div>
			<div className="">
				<form className="h-full w-[720px]">
					<input type="text" className="h-full w-[90%]" />
					<button className="bg-neutral text-secondary-200 h-full w-[10%] outline-[none] border-[none]">
						X
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
