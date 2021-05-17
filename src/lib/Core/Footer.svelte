<script>
  import Hero from '$lib/SVG/all_nighter.svelte';

  let page = {
    text: [
      '© 2021 Designed by Hayden Mankin',
      'Powered by Svelte Kit, Tailwind, and MDsveX'
    ]
  }
</script>
<div class="h-96 lg:h-40"></div>
<div  class="bottom-0 absolute lg:static">
<footer class=" z-50 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 container px-5 py-8 mx-auto flex items-center lg:flex-row flex-col">
    <div class="text-center lg:text-left mt-4 lg:mt-0 lg:py-2 text-xs text-gray-500 dark:text-gray-400">
    {#each page.text as text}
      <p class="">{text}</p>
    {/each}
    </div>
    <span class="inline-flex lg:ml-auto lg:mt-0 mt-4 justify-center lg:justify-start dark:text-yellow-400 text-indigo-600">
      <a href="http://facebook.com/" class="dark:hover:text-yellow-500 hover:text-indigo-500 p-3 md:p-0">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <title>Facebook</title>
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href="http://twitter.com/" class="ml-3 dark:hover:text-yellow-500 hover:text-indigo-500 p-3 md:p-0">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <title>Twitter</title>
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href="http://instagram.com/" class="ml-3 dark:hover:text-yellow-500 hover:text-indigo-500 p-3 md:p-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <title>Instagram</title>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/" class="ml-3 dark:hover:text-yellow-500 hover:text-indigo-500 p-3 md:p-0">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <title>Linkedin</title>
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
</footer>
<div class="z-0 relative lg:absolute bottom-0 left-0 right-0 h-64">
  <Hero />
</div>
</div>