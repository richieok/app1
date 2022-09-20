<script>
    import {page} from "$app/stores"
</script>

<svelte:head>
    <title>Error</title>
</svelte:head>

<div>
    <h3>Status: {$page.status}<br>{$page.error.message}</h3>
</div>

<style>
    div {
        width: 300px;
        background-color: var(--color-1);
        margin: 4em auto;
        border-radius: 10px;
    }

    h3 {
        padding: 1em;
    }
</style>