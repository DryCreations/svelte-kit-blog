<script context="module">
    import { base } from '$app/paths';

    export async function load ( { page: {query, params} } ) {
        let pageNum = 0;

        if (!isNaN(params.rest)) {
            pageNum = params.rest;
        } else {
            return {
                status: 404,
                error: 'Page Does Not Exist'
            }
        }

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
                    page: pageNum
                }
            }
        }
    }
</script>

<script>
import { page } from '$app/stores';
import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';


    export let posts;
    export let query;

    export let perPage = 8;
    export let currPage = query.page || 0;

    $: filteredPosts = posts.filter((o) => {
        let flag = false;

        let contains_tag = !query.tags?.length;
        contains_tag |= query.tags?.some((e) => {
            return o.metadata.tags.includes(e);
        });
        
        let in_category = !query.categories?.length;
        in_category |= query.categories?.some((e) => {
            return o.metadata.categories.includes(e);
        });

        let title_matches_search = o.metadata.title.toLowerCase().includes(query.search?.toLowerCase() || '');

        let desc_matches_search = o.metadata.description.toLowerCase().includes(query.search?.toLowerCase() || '');
        return (contains_tag && in_category && (title_matches_search || desc_matches_search))
    });

    $: numPages = Math.ceil(filteredPosts.length / perPage);

    $: currPage = Math.max(0, Math.min(numPages - 1, currPage))

    $: currentPage = filteredPosts.slice(currPage * perPage, currPage * perPage + perPage);

    $: pagination = [];

    let scrollY = 0;
    let scrollX = 0;

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

        scrollY = 0;
        scrollX = 0;
    }

    $: prev = (currPage > 0);
    $: next = (currPage < numPages - 1);
</script>
<svelte:window bind:scrollY={scrollY} bind:scrollX={scrollX} />

<svelte:head>
    <title>Blog</title>
    <meta name="description" content="Learn about Computer Science, K12 Education, and everything in between from Hayden Mankin." />
</svelte:head>

<!-- <textarea bind:value={query.search}></textarea> -->


<section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 sm:py-24 py-5 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        {#each currentPage as {metadata, link} (link)}
            <div class="py-8 flex flex-col md:flex-row flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                {#each metadata.categories as category}
                    <span class="font-semibold title-font text-gray-700">{category}</span>    
                {/each}
                <span class="mt-1 text-gray-500 text-sm">{new Date(metadata.date).toDateString()}</span>
            </div>
            <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{metadata.title}</h2>
                <p class="leading-relaxed">{metadata.description}</p>
                <a href={link} class="text-indigo-600 hover:text-indigo-900 inline-flex items-center mt-4">Read Post
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
                </a>
            </div>
            </div>
        {/each}
        
      </div>
      <div class="flex justify-center space-x-1 text-gray-500 mt-12">
        <button disabled={!prev} on:click={() => { currPage -= 1; goto(`${base}/blog/${currPage}`); }} class:cursor-not-allowed={!prev} class:hover:text-gray-900={prev} class:text-gray-400={!prev} class=" z-50 flex items-center justify-center h-8 px-2 text-sm font-medium rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>Prev
        </button>    

        {#if pagination[0] > 0}
            <span class="flex items-center justify-center w-8 h-8 text-sm font-medium rounded dark:bg-violet-200 dark:text-violet-500">...</span>
        {/if}
        
        {#each pagination as num (num)}
            <button on:click="{() => { currPage = num; goto(`${base}/blog/${currPage}`); }}" class:text-indigo-600="{num==currPage}" class:hover:text-gray-900={num!=currPage} class:border-t-2="{num==currPage}" class="z-50 rounded-none border-indigo-600 flex items-center justify-center w-8 h-8 text-sm font-medium dark:bg-violet-200 dark:text-violet-500">{num}</button>
        {/each}
        {#if pagination[pagination.length - 1] < numPages - 1}
            <span class="flex items-center justify-center w-8 h-8 text-sm font-medium rounded dark:bg-violet-200 dark:text-violet-500">...</span>
        {/if}

        <button disabled={!next} on:click={() => { currPage += 1; goto(`${base}/blog/${currPage}`); }} class:cursor-not-allowed={!next} class:hover:text-gray-900={next} class:text-gray-400={!next} class=" z-50 flex items-center justify-center h-8 px-2 text-sm font-medium rounded">Next
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
        </button>
    </div>
    </div>
  </section>