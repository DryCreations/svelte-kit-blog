<ol class="{className} list-decimal list-inside  mt-5 mb-5"><slot></slot></ol>

<script>
    let className = "";
    export {className as class};
</script>

<style>
ol :global(ol), ol :global(ul) {
    @apply mt-0
}

ol > :global(li li) {
    @apply pl-7
}
</style>