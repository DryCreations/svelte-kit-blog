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
        let klipse = 'https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js';

        if (document.querySelectorAll('[src="' + klipse + '"]').length > 0) {

            Object.values(window.eval_languages).forEach((o) => {
                let mode = o[1];
                let selector = o[0];
                document.querySelectorAll(selector).forEach((e) => {
                    window.klipse.plugin.klipsify(e, window.klipse_settings, mode);
                })
            })
        } else {

            let script = document.createElement('script');
            script.setAttribute('src', klipse);
            document.getElementsByTagName('head')[0].appendChild(script);
            script.setAttribute('defer', '');
        }
    })


</script>

<slot></slot>


<style>
    
</style>