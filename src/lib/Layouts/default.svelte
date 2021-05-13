<script context="module">
    import { h1, h2, h3, h4, h5, h6,
             p,
             ul, ol, li,
             em, strong,
             blockquote,
             a,
             code,
             img } from './default/components.js';
    export { h1, h2, h3, h4, h5, h6,
             p,
             ul, ol, li,
             em, strong,
             blockquote,
             a,
             code,
             img };
             
    export let title;
    export let description;
    export let date;
    export let categories;
    export let tags;
</script>  

<slot></slot>
