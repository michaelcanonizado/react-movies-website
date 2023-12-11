import React from 'react';

import Skeleton from 'react-loading-skeleton';

export default function SkeletonMovieCredits({ creditCount }) {
	const numOfCredit = [...Array(creditCount)];

	console.log(numOfCredit);
	return (
		<ul className="text-normal ">
			<li className="flex py-[0.75rem] border-t-[1px] border-[#2C2C2C]">
				<span className="pr-[18px] leading-[1] grid place-items-center">
					<Skeleton
						containerClassName="flex-1"
						width="100px"
						height="20px"
					/>
				</span>
				<ul className="flex">
					<div className="flex gap-[6px]">
						{numOfCredit.map(() => {
							return (
								<Skeleton
									containerClassName="flex-1"
									width="100px"
								/>
							);
						})}
					</div>
				</ul>
			</li>
		</ul>
	);
}
