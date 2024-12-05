import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				hack: '#2dcf76',
				back_cath: '#143927',
			},
		},
	},

	plugins: [
		require('daisyui')
	]
} satisfies Config;