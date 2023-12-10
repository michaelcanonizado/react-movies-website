import React from 'react';

export default function MoviePoster({ link, title, className }) {
	return (
		<div className={`${className} aspect-poster`}>
			<img className="w-full object-cover" src={link} alt={title} />
		</div>
	);
}
