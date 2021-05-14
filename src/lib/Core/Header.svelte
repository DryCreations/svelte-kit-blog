<script>
  import {base} from '$app/paths'
  import {getStores} from '$app/stores';

  let path;

  getStores().page.subscribe((o) => {path= o.path})

  let info = {
    title: 'My Blog'
  }
</script>

<header class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="{base}/" class="flex items-center mb-4 md:mb-0">
        <span class="">{info.title}</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center justify-center">
        <a href="{base}/" class:border-b-2="{path == '/'}" class="border-indigo-600 mr-5 ">Home</a>
        <a href="{base}/about/" class:border-b-2="{path.startsWith('/about')}" class="border-indigo-600 mr-5 ">About</a>
        <a href="{base}/blog/" class:border-b-2="{path.startsWith('/blog')}" class="border-indigo-600">Blog</a>
      </nav>
</header>