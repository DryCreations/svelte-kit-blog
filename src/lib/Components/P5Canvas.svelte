<script>
	export let id;
	export let sketch;

	import { onMount } from "svelte";

	onMount(async () => {
        let p5 = (await import('p5')).default;
	    let p5Instance = new p5(sketch, id);
	});
</script>

<style>
    div {
        margin: 1rem 0;
    }

    div :global(canvas) {
        width: 100%!important;
        height: auto!important;
    }
</style>

<div {id}></div>