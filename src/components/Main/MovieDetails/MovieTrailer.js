import React from 'react';

export default function MovieTrailer({ trailer, movieId }) {
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
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${trailer.youtubeId}?vq=hd1080`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
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
