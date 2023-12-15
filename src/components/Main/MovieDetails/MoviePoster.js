import React from 'react';

export default function MoviePoster({ link, title, className }) {
	return (
		<div className={`${className} aspect-poster h-fit`}>
			<img className="h-full object-cover" src={link} alt={title} />
		</div>
	);
}
