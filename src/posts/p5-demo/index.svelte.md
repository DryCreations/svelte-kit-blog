---
title: p5 Demo
description: A demo of p5 js embedded in a blog post.
author: Hayden Mankin
date: 2021-05-21T00:51:32.459Z
categories:
- Blog Features
tags:
- p5
- p5.js
- js
- javascript
---

# p5 Demo

## The Component

By creating a simple component to contain the p5.js library, I can embed p5.js canvases in blog posts easily.

The component looks like this:

```svelte
<script>
	export let id;
	export let sketch;

	import { onMount } from "svelte";

	onMount(async () => {
        let p5 = (await import('p5')).default;
	    let p5Instance = new p5(sketch, id);
	});
</script>

<style>
    div {
        margin: 1rem 0;
    }
    
    div :global(canvas) {
        width: 100%!important;
        height: auto!important;
    }
</style>

<div {id}></div>
```

It's important that we load p5.js asynchronously in onMount because it calls window, which is undefined during SSR.

## Embedding Sketches

Now we can easily add sketches to our blog post: 

```svelte
<script>
	import P5Canvas from "$lib/Components/P5Canvas.svelte";

    let sketch1 = {
        width: 50,
        height: 50,
        sketch: (p5) => {
            p5.setup = () => {
                p5.createCanvas(400, 400);
            };

            p5.draw = () => {
                p5.background('white');
                p5.ellipse(p5.width / 2, p5.height / 2, sketch1.width, sketch1.height);
            };
        }
    }
    
</script>

<label>
  Width
  <input type="range" bind:value={sketch1.width} min="0" max="200" step="0.01" />
  {sketch1.width}
</label>

<br>

<label>
  Height
  <input type="range" bind:value={sketch1.height} min="0" max="200" step="0.01" />
  {sketch1.height}
</label>

<P5Canvas id="example" sketch={sketch1.sketch}/>
```

<label>
  Width
  <input type="range" bind:value={sketch1.width} min="0" max="200" step="0.01" />
  {sketch1.width}
</label>

<br>

<label>
  Height
  <input type="range" bind:value={sketch1.height} min="0" max="200" step="0.01" />
  {sketch1.height}
</label>

<P5Canvas id={sketch1.id} sketch={sketch1.sketch}/>

### More Sketches

Since I can only include one script tag per post, I seperated out sketch1 to be it's own object. This makes it easier to see at a glance what sketch corresponds to what object in the script tag.

By adding another block to our script tag, and repeating the code from before, we can display another sketch in the same post.

```svelte
<label>
  Width
  <input type="range" bind:value={sketch2.width} min="0" max="200" step="0.01" />
  {sketch2.width}
</label>

<br>

<label>
  Height
  <input type="range" bind:value={sketch2.height} min="0" max="200" step="0.01" />
  {sketch2.height}
</label>

<P5Canvas id={sketch2.id} sketch={sketch2.sketch}/>

<script>
    /* code for sketch1 */

    let sketch2 = {
        width: 50,
        height: 50,
        id: 'sketch2',
        sketch: (p5) => {
            p5.setup = () => {
                p5.createCanvas(400, 400);
            };

            p5.draw = () => {
                p5.background('white');
                p5.rectMode(p5.CENTER)
                p5.rect(p5.width / 2, p5.height / 2, sketch2.width, sketch2.height);
            };
        }
    }
</script>
```

<label>
  Width
  <input type="range" bind:value={sketch2.width} min="0" max="200" step="0.01" />
  {sketch2.width}
</label>

<br>

<label>
  Height
  <input type="range" bind:value={sketch2.height} min="0" max="200" step="0.01" />
  {sketch2.height}
</label>

<P5Canvas id={sketch2.id} sketch={sketch2.sketch}/>

<script>
	import P5Canvas from "$lib/Components/P5Canvas.svelte";

    let sketch1 = {
        width: 50,
        height: 50,
        id: 'sketch1',
        sketch: (p5) => {
            p5.setup = () => {
                p5.createCanvas(400, 400);
            };

            p5.draw = () => {
                p5.background('white');
                p5.ellipse(p5.width / 2, p5.height / 2, sketch1.width, sketch1.height);
            };
        }
    }

    let sketch2 = {
        width: 50,
        height: 50,
        id: 'sketch2',
        sketch: (p5) => {
            p5.setup = () => {
                p5.createCanvas(400, 400);
            };

            p5.draw = () => {
                p5.background('white');
                p5.rectMode(p5.CENTER)
                p5.rect(p5.width / 2, p5.height / 2, sketch2.width, sketch2.height);
            };
        }
    }
</script>