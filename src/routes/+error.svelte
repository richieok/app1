<script>
    import {page} from "$app/stores"
</script>

<svelte:head>
    <title>Error</title>
</svelte:head>

<h3>{$page.status}: {$page.error.message}</h3>
