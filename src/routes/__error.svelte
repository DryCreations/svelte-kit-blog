<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status,
                error,
			}
		};
	}
</script>

<script>
	export let status;
    export let error;
</script>

<div class="text-center right-0 left-0 fixed top-1/4">
    <h1 class="max-w-lg  mt-0 mb-3 md:mx-auto text-6xl font-extrabold">{status}</h1>
    <p class="text-xl font-semibold mt-3 ">Oops! Something went wrong.</p>
    <p class="text-sm italic font-normal dark:text-gray-400 text-gray-600 ">{error.message}</p>
</div>

