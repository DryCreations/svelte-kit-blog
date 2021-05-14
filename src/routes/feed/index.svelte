<!-- <script context="module">
    import { base } from '$app/paths';

    export async function load ( { page: {query} } ) {
        let imports = import.meta.globEager('./../../posts/*/index.svelte.md');
        let blog = Object.entries(imports);

        let posts = blog.map(([slug, { metadata }]) => ({
            metadata: metadata,
            link: `${base}/blog/${slug.split('/').slice(-2)[0]}`
        })).sort((a,b)=>{
            return new Date(b.metadata.date) - new Date(a.metadata.date);
        })

        return {
            props: {
                posts,
                query: {
                    tags: query.getAll('tag'),
                    categories: query.getAll('category'),
                    search: query.get('search'),
                    page: query.get('page')
                }
            }
        }
    }
</script>

<script>
import { page } from '$app/stores';

    export let posts;
</script>

<svelte:head>
    <title>Feed</title>
    <meta name="description" content="Learn about Computer Science, K12 Education, and everything in between from Hayden Mankin." />
</svelte:head>

{#each posts as {metadata, link} (link)}
    <p class="text-gray-500 text-sm">{new Date(metadata.date).toDateString()}<a href={link} class="text-indigo-600 hover:text-indigo-900 inline-flex items-center mt-4 ml-4">{metadata.title}</a></p>
{/each} -->