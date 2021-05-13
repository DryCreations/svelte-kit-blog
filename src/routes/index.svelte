<script>
    import {base} from '$app/paths';
    import Head from '$lib/SVG/skribbli_head.svelte';

    let page = {
      name: 'Lorem Ipsum',
      brief: [
        'In Dictum Sollicitudin',
        'B.S. Interdum Ullamcorper',
        'Vestibulum Mattis',
      ],
      bio: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id aliquet enim. Suspendisse maximus in turpis quis tincidunt. Vestibulum vel lacus egestas, congue lectus nec, efficitur eros. Vestibulum nunc ex, viverra et egestas a, varius non metus. Nulla vitae velit mi. Nullam a arcu placerat, facilisis neque ac, convallis lorem. Quisque efficitur egestas nibh, sed bibendum tortor dignissim ut.',
        'Aenean gravida nisi diam, quis semper eros cursus quis. Duis accumsan sed erat nec hendrerit. Sed fringilla orci ut magna ullamcorper imperdiet. Integer quis nibh eu lectus sagittis hendrerit nec at est. Pellentesque porta leo nunc, non pharetra libero semper sed. Vivamus molestie dui ut ipsum vestibulum, in porta odio viverra. Integer et mi tincidunt, sodales sem quis, fermentum neque. Morbi id ornare ipsum.',
        'Nulla sed magna leo. Nullam vehicula ipsum magna, et facilisis lacus dictum eu. Sed et tristique ex. Cras ut lacus lorem. Quisque sed nulla pellentesque enim posuere feugiat. Donec laoreet fringilla finibus. Integer porta risus rutrum nibh accumsan convallis. Suspendisse lacinia turpis sit amet tristique ullamcorper. Aliquam erat volutpat. In iaculis tellus ac urna tincidunt scelerisque.'
      ]
    }
    
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Learn about Computer Science, K12 Education, and everything in between from Hayden Mankin." />

</svelte:head>

<section class="text-gray-600">
    <div class="container px-5 py-12 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="flex  flex-col sm:flex-row">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-24 h-24 inline-flex items-center justify-center">
              <Head />
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{page.name}</h2>
              <div class="w-12 h-1 bg-indigo-600 rounded mt-2 mb-4"></div>
              {#each page.brief as brief}
                <p class="text-base">{brief}</p>  
              {/each}
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            {#each page.bio as bio}
              <p class="leading-relaxed text-lg mb-4">{bio}</p>  
            {/each}
            <a href="{base}/about" class="text-indigo-600 inline-flex items-center">More About Me
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>