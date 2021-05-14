import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import fs from 'fs'

const dev = process.env.NODE_ENV === 'development';

const getDirectories = source =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const posts_dir = getDirectories('./src/posts').map(dir => `/blog/${dir}`);

const pages = [...Array(Math.ceil(posts_dir.length / 8)).keys()].map(dir => `/blog/${dir}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/svelte-kit-blog',
			assets: dev ? '' : '/svelte-kit-blog'
		},
		trailingSlash: 'always',
		prerender: {
			crawl: true,
			enabled: true,
			force: false,
			pages: ['*', ...posts_dir, ...pages]
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
