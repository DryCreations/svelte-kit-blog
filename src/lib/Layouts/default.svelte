<script context="module">
    import {h1, h2, h3, h4, h5, h6,
            p,
            ul, ol, li,
            em, strong,
            blockquote,
            a,
            img,
            code,
            table, tbody, td, th, thead, tr,
            hr,
            input } from './default/components.js';
    export {h1, h2, h3, h4, h5, h6,
            p,
            ul, ol, li,
            em, strong,
            blockquote,
            a,
            img,
            code,
            table, tbody, td, th, thead, tr,
            hr,
            input  };


</script>  

<script>
    import { onMount, tick } from 'svelte';

    export let title;
    export let description;
    export let date;
    export let categories;
    export let tags;
    export let author;


    onMount(async () => {
        if (window.klipse)
            window.klipse.plugin.init(window.klipse_settings)
    })
</script>

<slot></slot>


<style>
    
</style>