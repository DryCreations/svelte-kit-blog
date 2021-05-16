<script>
  import {base} from '$app/paths'
  import {getStores} from '$app/stores';
  import Search from './Search.svelte';

  let path;

  getStores().page.subscribe((o) => {path= o.path})

  let info = {
    title: 'My Blog'
  }
</script>

<header class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="{base}/" class="flex items-center mb-4 md:mb-0">
        <span class=" text-2xl font-semibold">{info.title}</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center justify-center dark:text-gray-400 text-gray-500">
        <a href="{base}/" class:border-b-2="{path == '/'}" class:dark:text-white="{path == '/'}" class:text-gray-900="{path == '/'}" class="border-indigo-600 dark:border-yellow-400 dark:hover:text-white hover:text-gray-900 mr-5 ">Home</a>
        <a href="{base}/about/" class:border-b-2="{path.startsWith('/about')}" class:dark:text-white="{path.startsWith('/about')}" class:text-gray-900="{path.startsWith('/about')}" class="border-indigo-600 dark:border-yellow-400  dark:hover:text-white hover:text-gray-900 mr-5 ">About</a>
        <a href="{base}/blog/" class:border-b-2="{path.startsWith('/blog')}" class:dark:text-white="{path.startsWith('/blog')}" class:text-gray-900="{path.startsWith('/blog')}" class="border-indigo-600 dark:border-yellow-400  dark:hover:text-white hover:text-gray-900 mr-5">Blog</a>
        <Search />
      </nav>
</header>