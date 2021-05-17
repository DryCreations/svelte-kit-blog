<script>
import {base} from '$app/paths'

import { goto } from "$app/navigation";

    let search;

    $: qs = `?search=${encodeURIComponent(search)}`;

    let redirect = (e) => {
        if (e.which === 13) {
            goto(`${base}/blog/${qs}`);
        }
    }

    let textBox;
    let focusOnSearch = () => {
        textBox.focus()
    }
</script>

    <label class="flex flex-row-reverse items-center">
    <input bind:this={textBox} bind:value={search} on:keydown={redirect} class="ml-5 outline-none dark:text-gray-400 text-gray-500 dark:focus:text-white focus:text-gray-900 bg-transparent w-0 focus:w-32 border-b-2 dark:focus:border-white focus:border-gray-900 dark:border-gray-400 border-gray-500" >

    <button on:click={focusOnSearch} tabindex="-1" class="">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:hover:text-white hover:text-gray-900 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <title>search</title>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </button>
    </label>


<style>
    input:focus + button {
        @apply dark:text-white text-gray-900
    }

    input {
        transition-property: width;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        transition-delay: 5s;

    }

    input:focus {
        transition-delay: 0s;
    }
</style>