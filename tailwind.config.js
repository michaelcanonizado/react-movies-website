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
					300: '#121212',
				},
				accent: {
					100: '#E50914',
					200: '#ABCCF7',
					300: '#18B7D9',
				},
				neutral: '#FFFFFF',
			},
		},
	},
	plugins: [],
};