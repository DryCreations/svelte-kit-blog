<ul class="{className} list-disc list-inside mt-5 mb-5"><slot></slot></ul>

<script>
    let className = "";
    export {className as class};
</script>

<style>
    ul :global(ul), ul :global(ol) {
        @apply mt-0
    }
    
    ul > :global(li li) {
        @apply pl-7
    }
</style>