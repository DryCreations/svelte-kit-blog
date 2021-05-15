<li class="{className} mt-2 mb-2"><slot></slot></li>

<script>
    let className = "";
    export {className as class};
</script>

<style>
    li:global(.task-list-item) {
        list-style: none;
    }
</style>