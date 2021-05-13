<script>
    import {base} from '$app/paths'
</script>

<svelte:head>
    <link rel="icon" href={`${base}/favicon.ico`} />
</svelte:head>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<slot></slot>