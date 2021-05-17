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
      ]
    }
    
    import Arrow from '$lib/SVG/Arrow.svelte';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ante et nunc iaculis elementum non quis augue. Vestibulum tellus enim, ultricies at congue quis, lobortis eget tellus. Etiam nulla ipsum, volutpat sit amet laoreet ultricies, scelerisque non est. Integer vitae laoreet arcu, eu mollis risus. Duis a est vitae lectus ullamcorper mollis. Morbi elementum, enim cursus sagittis bibendum, leo nisl posuere urna, quis finibus risus velit a nibh. In a turpis cursus, congue est non, sodales arcu. Nam vulputate quam vel risus rutrum, id porttitor nunc imperdiet. Nunc sapien ligula, rutrum nec euismod vel, consequat sit amet erat. Proin mollis viverra ante vel porttitor. Ut ex sapien, consectetur sed." />

</svelte:head>

<section class="">
    <div class="container px-5  pb-12 md:pt-12 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="flex flex-col divide-y-2 sm:divide-x-2 sm:divide-y-0 divide-gray-100 dark:divide-gray-800 sm:flex-row">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class=" w-48 h-48 sm:w-24 sm:h-24 inline-flex items-center justify-center">
              <Head />
            </div>
            <div class="flex flex-col items-center sm:text-center justify-center">
              <h2 class="mt-4 mb-3 sm:mb-0 sm:text-lg font-extrabold text-4xl sm:font-semibold">{page.name}</h2>
              <div class="sm:w-12 w-24 h-0.5 bg-indigo-600 dark:bg-yellow-400 mt-2 mb-5 sm:mb-2"></div>
              {#each page.brief as brief}
                <p class="italic sm:text-sm sm:font-normal text-xl font-semibold">{brief}</p>  
              {/each}
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-left">
            {#each page.bio as bio}
              <p class="mb-4">{bio}</p>  
            {/each}
            <a href="{base}/about/" class="inline-flex items-center text-indigo-600 hover:text-indigo-500 dark:text-yellow-400 dark:hover:text-yellow-500">More About Me
              <span class="ml-2"><Arrow title="Read Post" direction="right" /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>