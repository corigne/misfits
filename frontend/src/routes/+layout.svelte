<script lang="ts">
import Footer from "./components/Footer.svelte"
import Header from "./components/Header.svelte"
import '../app.css'
import * as config from '../lib/config'
</script>

<svelte:head>
    <title>{config.title}</title>
    <meta name="description" content={config.description}/>

    <meta property="og:url" content="https://jodoin.io">
    <meta property="og:type" content="website">
    <meta property="og:title" content="njodoin::devlog">
    <meta property="og:description" content="devlog and resume site made with SvelteKit">
    <meta property="og:image" content="og-image.png">

    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="jodoin.io">
    <meta property="twitter:url" content="https://jodoin.io">
    <meta name="twitter:title" content="njodoin::devlog">
    <meta name="twitter:description" content="devlog and resume site made with SvelteKit">
    <meta name="twitter:image" content="og-twitter">

    <link rel="alternate" type="application/rss+xml" title="Subscribe to the jodoin.io RSS Feed!" href={`${config.url}/rss.xml`} />

    <script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    document.addEventListener("DOMContentLoaded",function(){
        let node = document.querySelector('.preload-transitions');
        node.classList.remove('preload-transitions');
    })
    </script>

    <style>
    @import url("//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css");
    </style>
</svelte:head>

<div class="flex flex-col h-screen items-center overflow-scroll">
    <Header />
    <main class="md:w-5/6 max-w-7xl w-full p-2 md:p-8 mb-auto md:rounded-lg">
        <slot />
    </main>
    <Footer />
</div>

<style>
</style>
