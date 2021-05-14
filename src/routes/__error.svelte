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
    <h1 class="text-6xl font-black">{status}</h1>
    <p class="text-xl">Oops! Something went wrong.</p>
    <p class="">{error.message}</p>
</div>

