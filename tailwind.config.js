/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: { serif: ['Roboto'], display: ['Bebas Neue'] },
		extend: {
			colors: {
				primary: '#000000',
				secondary: {
					100: '#2C2C2C',
					200: '#1A1A1A',
				},
				accent: '#E50914',
				neutral: '#FFFFFF',
				IMDb: '#F5C518',
			},
		},
	},
	plugins: [],
};
