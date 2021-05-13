<script>
  import {base} from '$app/paths'

  let page = {
    title: 'My Blog'
  }
</script>

<header class="text-gray-600 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="{base}/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <h1 class="text-xl">{page.title}</h1>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="{base}/" class="mr-5 hover:text-gray-900">Home</a>
        <a href="{base}/about" class="mr-5 hover:text-gray-900">About</a>
        <a href="{base}/blog" class="hover:text-gray-900">Blog</a>
      </nav>
</header>