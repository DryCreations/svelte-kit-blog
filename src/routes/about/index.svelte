<script>
    let blurb = [
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.'
    ]

    let bio_left = [
        [
            'Nulla Vel Semper',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis laoreet ultrices. Sed semper dapibus neque ut tempor. Duis ullamcorper bibendum felis, in sagittis felis ultricies eu. Suspendisse tincidunt mollis dignissim. Cras quis metus sed magna semper ornare. Etiam interdum tellus mauris, eu porttitor neque pulvinar ut. Curabitur id vestibulum libero. In tempor nisl at orci ultrices egestas. Suspendisse lacus tellus, malesuada quis elit sollicitudin, commodo pellentesque nulla. Morbi condimentum suscipit ipsum quis sagittis. Aliquam gravida elit lorem, et porttitor enim pulvinar non.',
            'Cras ultrices ligula at sapien fermentum blandit. Integer consectetur eros non nisi tincidunt, ut viverra risus finibus. Aliquam cursus neque est, eu lobortis sapien congue vel. Duis lacinia dui quis blandit viverra. Suspendisse eu mi nec mi porttitor vehicula sed eu odio. Pellentesque non metus eu ipsum elementum egestas eu eu est. Suspendisse vel auctor purus. Suspendisse ullamcorper venenatis est vel sagittis.'
        ]
    ]

    let bio_right = [
        [
            'Sed iaculis finibus',
            'Vestibulum malesuada lobortis sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin eu arcu ac ligula sagittis sollicitudin. Suspendisse potenti. Morbi at dolor sed quam semper rutrum egestas id tortor. Etiam in metus malesuada, molestie odio non, aliquam ligula. Integer at cursus velit. In hac habitasse platea dictumst. Mauris aliquet nisl at porta fringilla. Phasellus ultricies metus a nibh scelerisque, at dictum leo bibendum. Cras nec viverra purus. Aliquam sed orci eu turpis viverra lacinia.'
        ],
        [
            'Aliquam Feugiat Pellentesque Nulla',
            'Etiam interdum ut ex a vulputate. Mauris neque orci, posuere sed accumsan et, fringilla a metus. Duis ut lobortis elit. Nullam at malesuada enim, et suscipit sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin diam lacus, tempus nec luctus eu, faucibus sit amet magna. Ut quis dolor vel magna molestie varius vel in nulla. Nullam facilisis dui purus, vitae maximus lectus vulputate eu.'
        ]
    ]
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ante et nunc iaculis elementum non quis augue. Vestibulum tellus enim, ultricies at congue quis, lobortis eget tellus. Etiam nulla ipsum, volutpat sit amet laoreet ultricies, scelerisque non est. Integer vitae laoreet arcu, eu mollis risus. Duis a est vitae lectus ullamcorper mollis. Morbi elementum, enim cursus sagittis bibendum, leo nisl posuere urna, quis finibus risus velit a nibh. In a turpis cursus, congue est non, sodales arcu. Nam vulputate quam vel risus rutrum, id porttitor nunc imperdiet. Nunc sapien ligula, rutrum nec euismod vel, consequat sit amet erat. Proin mollis viverra ante vel porttitor. Ut ex sapien, consectetur sed." />
</svelte:head>

<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 class="max-w-lg mb-6 md:mx-auto">
            About
        </h1>
        <p class="">
            {#each blurb as i}
                {i}
            {/each}
        </p>
      </div>
    </div>
    <div class="max-w-screen-xl sm:mx-auto">
      <div class="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
        <div class="space-y-8">
            {#each bio_left as i}
                 <div>
                    <p class="mb-4">
                        {i[0]}
                    </p>
                    {#each i.slice(1) as j}
                        <p class="mb-2">
                            {j}
                        </p>
                    {/each}
                 </div>
            {/each}
        </div>
        <div class="space-y-8">
            {#each bio_right as i}
            <div>
               <p class="mb-4">
                   {i[0]}
               </p>
               {#each i.slice(1) as j}
                   <p class="">
                       {j}
                   </p>
               {/each}
            </div>
         {/each}
        </div>
      </div>
    </div>
  </div>