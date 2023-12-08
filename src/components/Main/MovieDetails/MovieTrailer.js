import React from 'react';
import Youtube from 'react-youtube';

const options = {
	height: '417px',
	width: '741px',
	playerVars: {
		autoplay: 0,
	},
};

export default function MovieTrailer({ trailer, height, width }) {
	const options = {
		height: height,
		width: width,
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<div className="">
			<Youtube videoId={trailer.youtubeId} opts={options} />
		</div>
	);
}
