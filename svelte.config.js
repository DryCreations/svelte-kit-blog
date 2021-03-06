import { mdsvex } from "mdsvex";
import static_adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		adapter: static_adapter(),
		paths: {
			base: dev ? '' : '/svelte-kit-blog',
			assets: dev ? '' : '/svelte-kit-blog'
		},
		trailingSlash: 'ignore',
		prerender: {
			crawl: true,
			enabled: true,
			force: false,
			pages: ['*']
		},

	},
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'postcss'
			},
			postcss: true		
		}),
		mdsvex({ 
			extensions: ['.svelte.md'],
			layout: {
				_: "src/lib/Layouts/default.svelte"
			}
		})
	],
	extensions: ['.svelte', '.svelte.md'],
	
};

export default config;
