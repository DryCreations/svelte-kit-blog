import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/svelte-kit-blog',
			assets: dev ? '' : '/svelte-kit-blog'
		}
	},
	preprocess: [
		mdsvex({ extensions: ['.svx']})
	],
	extensions: ['.svelte', '.svx'],
	
};

export default config;
