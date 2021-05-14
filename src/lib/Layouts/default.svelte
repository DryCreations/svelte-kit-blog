<script context="module">
    import { h1, h2, h3, h4, h5, h6,
             p,
             ul, ol, li,
             em, strong,
             blockquote,
             a,
             img,
             code } from './default/components.js';
    export { h1, h2, h3, h4, h5, h6,
             p,
             ul, ol, li,
             em, strong,
             blockquote,
             a,
             img,
             code  };


</script>  

<script>
    import { onMount, tick } from 'svelte';

    export let title;
    export let description;
    export let date;
    export let categories;
    export let tags;


    onMount(async () => {
        if (window.klipse)
            window.klipse.plugin.init(window.klipse_settings)
    })
</script>

<slot></slot>
