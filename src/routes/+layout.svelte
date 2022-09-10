<script>
    import '../app.css'
    import Menu from '$lib/Menu.svelte'

    const links = [
        { name: 'Home', href: "/"},
        { name: 'Samples', href: '/samples'}
    ]
</script>

<div>
    <Menu {links}/>
    <main>
        <slot/>
    </main>
</div>

<style>
    div {
        background: linear-gradient(-45deg, rgba(90, 90, 90, 0.5), rgba(90, 90, 90, 1));
        height: 100vh;
    }
</style>