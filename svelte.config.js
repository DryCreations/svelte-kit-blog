import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';


const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/svelte-kit-blog',
			assets: dev ? '' : '/svelte-kit-blog'
		},
		trailingSlash: 'never'
	},
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'postcss'
			},
			postcss: true		
		}),
		mdsvex({ extensions: ['.svelte.md']})
	],
	extensions: ['.svelte', '.svelte.md'],
	
};

export default config;
