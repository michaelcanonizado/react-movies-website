import React from 'react';

import { Link } from 'react-router-dom';

import screenBreakpoints from '../../../helpers/screenBreakpoints';

export default function Home() {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

	return (
		<section
			className={`px-4 m-auto h-[75vh] sm:h-[80vh] grid place-items-center ${screenBreakpoints}`}
		>
			<div className="sm:max-w-[350px]">
				<div className="flex justify-center">
					<span className="text-[1.5rem] xs:text-[2rem] md:text-[3rem] text-center">
						COMING SOON
					</span>
				</div>
				<div className="mb-[10px] flex justify-center">
					<p className="tracking-[0.05em] leading-[1.5rem] font-normal w-full text-sm md:text-base text-center">
						The home page for React Movies is currently under
						construction. Please visit the movies list instead!
					</p>
				</div>

				<span className="pt-[10px] flex justify-center">
					<Link
						className="rounded bg-accent-100 w-full pb-[9px] pt-[8px] block text-center hover:brightness-110"
						to="/popular"
					>
						Movies List
					</Link>
				</span>
			</div>
		</section>
	);
}
