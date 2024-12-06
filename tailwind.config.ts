import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				hack: '#2dcf76',
				back_cath: '#143927',
				p11: "#065143",
				p12: "#129490",
				p13: "#70B77E",
				p21: "#4A4238",
				p22: "#508484",
				p23: "#4D5359",
				p31: "#DBCDC6",
				p32: "#DD99BB",
				p33: "#EAD7D1",
				p41: "#334139",
				p42: "#C52184",
				p43: "#1E2D24",
				p51: "#94A89A",
				p52: "#9CB380",
				p53: "#9CB380",
			},
		},
	},

	plugins: [
		require('daisyui')
	]
} satisfies Config;