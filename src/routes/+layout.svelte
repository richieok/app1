<script>
    import '../app.css'
    import Menu from '$lib/Menu.svelte'

    export let data;
    const links = data.menu;

</script>

<div class="base">
    <div class="bg-img"></div>
    <Menu {links}/>
    <main>
        <slot/>
    </main>
</div>

<style>
    main {
        padding: 3em 0;
        height: calc(100% - 54px);
    }
    .base {
        position: relative;
    }
    .bg-img {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: -10;
        background-image: url('background-3-600.svg');
        top: 50%;
        left: 50%;
        translate: -50% -50%;
    }

    @media screen and (min-width: 600px){
        main {
            height: calc(100vh - 54px);
        }

        .bg-img {
            background-image: url('/background-2.svg');
        }
    }
</style>