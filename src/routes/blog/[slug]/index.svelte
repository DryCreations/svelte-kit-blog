<script context="module">
    export async function load ({ page }) {
        let {metadata, default: Component} = await import(`./../../../posts/${page.params.slug}/index.svelte.md`)

        return {
            props: {
                post: {
                    metadata,
                    Component
                }
            }
        }
    }
</script>

<script>
    export let post;

    let {metadata, Component: Post} = post;
</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
</svelte:head>

<article> 
    <Post />
</article>
