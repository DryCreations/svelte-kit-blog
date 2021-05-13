<script>
    import {base} from '$app/paths';
    import Head from '$lib/SVG/skribbli_head.svelte';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section class="text-gray-600">
    <div class="container px-5 py-12 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="flex  flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-24 h-24 inline-flex items-center justify-center">
              <Head />
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Hayden Mankin</h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p class="text-base">Wright State University 2018-Present</p>
              <p class="text-base">B.A. Computer Science</p>
              <p class="text-base">Minor in Mathematics</p>
              <p class="text-base">Lic. PK-12 Computer Information Science</p>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-lg mb-4">I'm a teacher... almost at least. I'm studying Computer Science and Education, planning on teaching K-12 graders about computer science. I am a senior at Wright State University preparing to begin student teaching, I'll be posting about a variety of things on this blog while I do that.</p>
            <p class="leading-relaxed text-lg mb-4">Have you ever wondered what Computer Science education was like for younger kids? Or do you want some ideas for your own classroom? Or just want to hear about my experiences to get an idea of how my ideas go? Then you might want to stick around and read a few posts</p>
            <p class="leading-relaxed text-lg mb-4">I won't just be posting about education, I do plan on posting about some things outside the realm of what I would teach a high schooler. I do love learning after all and I want a place to share whatever new thing I'm learning about any given week.</p>
            <a href="{base}/about" class="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>