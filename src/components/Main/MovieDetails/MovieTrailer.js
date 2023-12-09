import React from 'react';

export default function MovieTrailer({ trailer, height, width }) {
	return (
		<div
			className=""
			style={{
				position: 'relative',
				paddingBottom: '56.25%',
				height: '0',
			}}
		>
			<iframe
				src={`https://www.youtube.com/embed/${trailer.youtubeId}`}
				width="560"
				height="315"
				title="A YouTube video"
				frameborder="0"
				allowfullscreen
				style={{
					position: 'absolute',
					top: '0',
					left: '0',
					width: '100%',
					height: '100%',
				}}
			></iframe>
		</div>
	);
}
