<script context="module">
    export async function load ({ page }) {
        try {
            let {metadata, default: Component} = await import(`./../../../posts/${page.params.slug}/index.svelte.md`)

            return {
                props: {
                    post: {
                        metadata,
                        Component
                    }
                }
            }
        } catch {
            return;
        }
    }
</script>

<script>

import { base } from '$app/paths';

    export let post;

    let {metadata, Component: Post} = post;
</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <link rel="stylesheet" href="{base}/code.css" />
</svelte:head>

<article> 
    <Post />
</article>
