<script lang="ts">
import Footer from "./footer.svelte";
import Header from "./header.svelte";
</script>

<svelte:head>
    <style>
    @import url("//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css");
    </style>
</svelte:head>

<div class="layout">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>

<style>
* {
    font-family: "Hack", monospace;
}
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-inline: 1em;
}
</style>
