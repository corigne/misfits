<script lang="ts">
import "../app.css"
import Footer from "./footer.svelte"
import Header from "./header.svelte"
</script>

<svelte:head>
    <style>
    @import url("//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css");
    </style>
</svelte:head>

<div class="flex flex-col h-screen items-center overflow-scroll">
    <Header />
    <main class="bg-base text-text md:w-5/6 max-w-7xl w-full py-4 px-4 mb-auto md:rounded-lg">
        <slot />
    </main>
    <Footer />
</div>

<style>
</style>
