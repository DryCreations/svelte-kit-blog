<script context="module">
    export async function load ({ page }) {
        let {metadata, default: Component} = await import(`./../../../posts/${page.params.slug}/index.svx`)

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

<h1>{metadata.title}</h1>
<h2>{metadata.description}</h2>
<Post />

