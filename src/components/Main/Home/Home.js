import React from 'react';

import screenBreakpoints from '../../../helpers/screenBreakpoints';

export default function Home() {
	return (
		<section
			className={`px-4 m-auto h-screen grid place-items-center ${screenBreakpoints}`}
		>
			<div className="sm:max-w-[350px]">
				<div className="mb-[15px]">
					<span className="text-[1.5rem] xs:text-[2rem] md:text-[3rem]">
						COMING SOON
					</span>
				</div>
				<div className="mb-[10px]">
					<p className="tracking-[0.05em] leading-[1.5rem] font-normal w-full text-sm md:text-base text-center">
						The home page for React Movies is currently under
						construction. Please visit the movies list instead!
					</p>
				</div>

				<span className="pt-[10px] block">
					<a
						className="rounded bg-accent-100 w-full pb-[9px] pt-[8px] block text-center hover:brightness-110"
						href="/popular"
					>
						Go to Movies List
					</a>
				</span>
			</div>
		</section>
	);
}
