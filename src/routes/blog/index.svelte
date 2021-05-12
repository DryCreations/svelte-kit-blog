<script context="module">
    export async function load () {
        let imports = import.meta.globEager('./../../posts/*/index.svx');
        let blog = Object.entries(imports);

        let posts = blog.map(([slug, { metadata }]) => ({
            metadata: metadata,
            link: `blog/${slug.split('/').slice(-2)[0]}`
        }))

        return {
            props: {
                posts,
            }
        }
    }
</script>

<script>
    export let posts;
</script>

{#each posts as {metadata, link}}
    <a sveltekit:prefetch href={link}>
        <h1>{metadata.title}</h1>
        <h2>{metadata.description}</h2>
    </a>    
{/each}

