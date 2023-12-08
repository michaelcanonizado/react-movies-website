import React from 'react';

export default function MoviePoster({ link, title }) {
	return (
		<div className="w-[278px] aspect-poster">
			<img src={link} alt={title} />
		</div>
	);
}
