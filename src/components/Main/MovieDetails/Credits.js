import React from 'react';

export default function Credits({ type, data, movieId }) {
	return (
		<li
			className="flex py-[0.75rem] border-t-[1px] border-secondary-400
		"
		>
			<span className="pr-[18px] font-bold">{type}</span>
			<ul className="flex overflow-x-scroll overflow-hidden hide-scrollbar">
				{data.map((person, index) => {
					return (
						<>
							<li className="" key={person.id}>
								<a
									className="text-accent-200
                        
                        			hover:cursor-pointer
                        			hover:underline
									whitespace-nowrap
                        			"
									href={`/movie/${movieId}`}
								>
									{person.name}
								</a>
							</li>
							{data.length !== index + 1 ? (
								<div className="font-black mx-[8px] w-[3px] md:w-[2px] grid place-items-center">
									<img src="/icon-dot-4.svg" alt={type} />
								</div>
							) : (
								''
							)}
						</>
					);
				})}
			</ul>
		</li>
	);
}
