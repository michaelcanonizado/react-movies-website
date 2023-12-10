import React from 'react';
import YouTube from 'react-youtube';

const opts = {
	height: '390',
	width: '640',
	playerVars: {
		autoplay: 0,
	},
};

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
			{/* <YouTube
				videoId={trailer.youtubeId}
				opts={opts}
				style={{
					position: 'absolute',
					top: '0',
					left: '0',
					width: '100%',
					height: '100%',
				}}
			/> */}
			{/* &origin=https://localhost:3000/movie/${movieId} */}
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${trailer.youtubeId}`}
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
