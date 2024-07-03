<script lang="ts">
import Footer from "./footer.svelte"
import Header from "./header.svelte"
import '../app.css'
</script>

<svelte:head>
    <style>
    @import url("//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css");
    </style>
</svelte:head>

<div class="flex flex-col h-screen items-center overflow-scroll">
    <Header />
    <main class="md:w-5/6 max-w-7xl w-full p-8 mb-auto md:rounded-lg">
        <slot />
    </main>
    <Footer />
</div>

<style>
</style>
