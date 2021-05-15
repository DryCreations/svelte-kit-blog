<a {href} {rel} {title} class="text-indigo-600 hover:text-indigo-500 dark:hover:text-yellow-500 dark:text-yellow-400 underline font-medium"><slot></slot></a>

<script>
    export let href;
    export let rel="";
    export let title=href;
</script>