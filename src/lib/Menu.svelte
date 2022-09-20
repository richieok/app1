<script>
    import {page} from '$app/stores';

    export let links = [];
    // const menu = [
    //     { name: 'Home', href: "/"},
    //     { name: 'Samples', href: '/samples'}
    // ]
</script>

<ul>
    {#each links as t}
        <li class:active={$page.url.pathname === `${t['href']}`}><a href={t['href']}>{t['name']}</a></li>
    {/each}
    <!-- <li class:active={$page.url.pathname === '/'}><a href="/">Home</a></li>
    <li class:active={$page.url.pathname === '/samples'}><a href="/">Samples</a></li> -->
</ul>

<style>
    ul {
        display: flex;
        z-index: 10;
        background-color: var(--color-1);
    }
    li {
        list-style: none;
        padding:  1em 0em 1em 1em;
        text-transform: capitalize;
    }
    a {
        text-decoration: none;
        color: black;
    }
    a:visited {
        color: black;
    }
    .active {
        font-weight: bold;
        text-transform: uppercase;
    }
</style>