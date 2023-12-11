import React from 'react';

export default function AddToWatchlistCTA() {
	return (
		<button
			className="bg-accent-100 text-secondary-300 w-full rounded overflow-hidden
        
        flex

        transition-all
        "
		>
			<div
				className="flex grow shrink px-[16px] py-[6px] h-[48px]
            
            bg-[inherit]
            hover:brightness-110"
			>
				<div className="flex justify-left content-center w-[25px]">
					<img
						className="w-[12px]"
						src="/icon-add-to-watchlist-black.svg"
						alt="Add to Wishlist"
					/>
				</div>

				<div
					className="
                flex flex-col justify-center
                
                tracking-normal leading-[1rem]"
				>
					<span className="text-[14px] font-bold">Add to Watchlist</span>
					<span className="text-[12px] mt-[-2px]">
						Added by 100k users
					</span>
				</div>
			</div>
			<div
				className="aspect-square w-[48px] grid place-items-center border-l-[2px] border-secondary-300
            
             bg-[inherit]
             hover:brightness-110"
			>
				<img
					className=""
					src="/icon-chevron-black-down.svg"
					alt="View Wishlist"
				/>
			</div>
		</button>
	);
}
