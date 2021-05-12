import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === "development" ? '/' : '/svelte-kit-blog/',
			assets: process.env.NODE_ENV === "development" ? '/' : '/svelte-kit-blog/'

		},
		vite: () => ({
			// base: process.env.NODE_ENV === "development" ? '/' : '/svelte-kit-blog/'
		})
	},
	preprocess: [
		mdsvex({ extensions: ['.svx']})
	],
	extensions: ['.svelte', '.svx'],
	
};

export default config;
