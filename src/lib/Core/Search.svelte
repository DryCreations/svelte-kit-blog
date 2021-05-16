<script>
import { goto } from "$app/navigation";

    let search;

    $: qs = `?search=${encodeURIComponent(search)}`;

    let redirect = (e) => {
        if (e.which === 13) {
            console.log()
            goto(`/blog/${qs}`);
        }
    }
</script>

<div class="flex flex-row items-center border-1 border-gray-800">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:hover:text-white hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <title>search</title>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input bind:value={search} on:keydown={redirect} class="ml-5" >
</div>