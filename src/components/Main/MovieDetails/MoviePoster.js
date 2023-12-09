import React from 'react';

export default function MoviePoster({ link, title, className }) {
	return (
		<div className={`aspect-poster ${className}`}>
			<img src={link} alt={title} />
		</div>
	);
}
