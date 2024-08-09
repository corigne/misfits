<script lang="ts">
import Footer from "./components/Footer.svelte"
import Header from "./components/Header.svelte"
import '../app.css'
import * as config from '../lib/config'
</script>

<svelte:head>
    <title>{config.title}</title>
    <meta name="description" content={config.description}/>
    <link rel="alternate" type="application/rss+xml" title="Subscribe to the jodoin.io RSS Feed!" href={`${config.url}/rss.xml`} />
    <script>
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
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
