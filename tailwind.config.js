/** @type {import('tailwindcss').Config} */
import colors from './tailwind/colors';

const px0_201 = Array.from({length : 200}, (_, i)=>`${i+1}px`);
const px0_21 = Array.from({length : 20}, (_, i)=>`${i+1}px`);

export default {
  content: [
		"./index.html",
		'./src/**/*.{js,ts,jsx,tsx}'
	],
  theme: {
    extend: {
			spacing : {
				...px0_201,
			},
			borderWidth:{
				...px0_21,
			},
			borderRadius:{
				...px0_21,
			},
			fontSize:{
				...px0_201
			},
			colors,
		},
  },
  plugins: [],
}

