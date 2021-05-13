<script>
    import {base} from '$app/paths';

    import Footer from '$lib/Core/Footer.svelte';
    import Header from '$lib/Core/Header.svelte';
</script>

<svelte:head>
    <link rel="icon" href={`${base}/favicon.ico`} />
</svelte:head>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<Header />

<main>
    <slot></slot>
</main>

<Footer />
