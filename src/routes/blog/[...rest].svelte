<script context="module">
    import { base } from '$app/paths';

    export async function load ( { page: {query, params} } ) {
        let pageNum = 0;
        let rest = params.rest.split('/');

        if (!isNaN(rest[0]) && !rest[1]) {
            pageNum = rest[0];
        } else {
            return {
                status: 404,
                error: "I couldn't find that post"
            }
        }

        let imports = import.meta.globEager('./../../posts/*/index.svelte.md');
        let blog = Object.entries(imports);

        let posts = blog.map(([slug, { metadata }]) => ({
            metadata: metadata,
            link: `${base}/blog/${slug.split('/').slice(-2)[0]}/`
        })).sort((a,b)=>{
            return new Date(b.metadata.date) - new Date(a.metadata.date);
        })

        return {
            props: {
                posts,
                pageNum,
            }
        }
    }
</script>

<script>
    import { getStores } from '$app/stores';
    let stores = getStores();

    let {page} = stores;

	import { onMount } from 'svelte';

    let mountParams;

    onMount(() => {
        console.log(($page)?.query.get('search'), window.location.search);
        if (window.location.search) mountParams = new URLSearchParams(window.location.search); 
    });

    $: params = ($page).params;
    $: query = mountParams || ($page).query;

    $: tags = (query)?.getAll('tag');
    $: categories = (query)?.getAll('category');
    $: search = (query)?.get('search');
    
    export let posts;
    export let pageNum

    export let perPage = 8;

    $: filteredPosts = posts.filter((o) => {
        let flag = false;

        let contains_tag = !tags?.length;
        contains_tag |= tags?.some((e) => {
            return o.metadata.tags.includes(e);
        });
        
        let in_category = !categories?.length;
        in_category |= categories?.some((e) => {
            return o.metadata.categories.includes(e);
        });

        let title_matches_search = o.metadata.title.toLowerCase().includes(search?.toLowerCase() || '');

        let desc_matches_search = o.metadata.description.toLowerCase().includes(search?.toLowerCase() || '');
        return (contains_tag && in_category && (title_matches_search || desc_matches_search))
    });


    $: currPage = pageNum || (params)?.rest.split('/')[0] || 0;

    $: numPages = Math.ceil(filteredPosts.length / perPage);

    $: currPage = Math.max(0, Math.min(numPages - 1, currPage))

    $: currentPage = filteredPosts.slice(currPage * perPage, currPage * perPage + perPage);

    $: pagination = [];

    $: {
        pagination = [...Array(numPages).keys()];

        let min = Math.max(currPage - 2, 0)
        let max = Math.min(currPage + 2, numPages - 1)
        
        if (min == 0) {
            max = Math.min(5,numPages - 1);
        }

        if (max == numPages - 1) {
            min = Math.max(numPages - 6, 0);
        }

        pagination = pagination.slice(min, max + 1);
    }

    $: prev = (currPage > 0);
    $: next = (currPage < numPages - 1);

    $: qs = (query.toString() == '') ? '' : `?${query.toString()}`;

    import Arrow from '$lib/SVG/Arrow.svelte';
</script>

<svelte:head>
    <title>Blog</title>
    <meta name="description" content="Learn about Computer Science, K12 Education, and everything in between from Hayden Mankin." />
</svelte:head>

<!-- <textarea bind:value={query.search}></textarea> -->


<section class="overflow-hidden">
    <div class="container px-5 sm:pb-24 py-5 mx-auto">
      <div class="my-8 divide-y-2 divide-gray-100 dark:divide-gray-800">
        {#each currentPage as {metadata, link} (link)}
            <div class="py-8 flex flex-col md:flex-row flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                {#each metadata.categories as category}
                    <span class="font-semibold">{category}</span>    
                {/each}
                <span class="mt-1 text-sm dark:text-gray-400 text-gray-500">{new Date(metadata.date).toDateString()}</span>
            </div>
            <div class="md:flex-grow">
                <h2 class=" mb-2 text-xl font-semibold">{metadata.title}</h2>
                <p class="">{metadata.description}</p>
                <a href={link} class="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-500 dark:text-yellow-400 dark:hover:text-yellow-500">Read Post
                <span class="ml-2"><Arrow title="Read Post" direction="right" /></span>
                </a>
            </div>
            </div>
        {/each}
        
      </div>
      <div class="flex justify-center space-x-1 mt-12 dark:text-gray-400 text-gray-500">
        <a href="{base}/blog/{Math.max(currPage - 1, 0)}/{qs}" class:pointer-events-none={!prev} class:dark:text-gray-700={!prev} class:text-gray-300={!prev} class:hover:text-gray-900={prev} class:dark:hover:text-white={prev} class=" z-50 flex items-center justify-center h-8 px-2 rounded">
            <Arrow title={"previous page"} direction={"left"} />
        </a>    

        {#if pagination[0] > 0}
            <span class="flex items-center justify-center w-8 h-8 rounded">...</span>
        {/if}
        
        {#each pagination as num (num)}
            <a href="{base}/blog/{num}/{qs}" class:text-indigo-600="{num==currPage}" class:dark:text-yellow-400="{num==currPage}" class:hover:text-gray-900={num!=currPage} class:dark:hover:text-white={num!=currPage} class:border-t-2="{num==currPage}" class="z-50 rounded-none  dark:border-yellow-400 border-indigo-600 flex items-center justify-center w-8 h-8 text-sm font-medium dark:bg-violet-200 dark:text-violet-500">{num}</a>
        {/each}
        {#if pagination[pagination.length - 1] < numPages - 1}
            <span class="flex items-center justify-center w-8 h-8 rounded">...</span>
        {/if}

        <a href="{base}/blog/{Math.min( numPages - 1,currPage + 1)}/{qs}" class:pointer-events-none={!next} class:dark:text-gray-700={!next} class:text-gray-300={!next} class:hover:text-gray-900={next} class:dark:hover:text-white={next} class="  z-50 flex items-center justify-center h-8 px-2 rounded">
            <Arrow title={"next page"} direction={"right"} />
        </a>
    </div>
    </div>
  </section>