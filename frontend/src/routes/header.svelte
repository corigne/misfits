<script lang="ts">
import * as config from '$lib/config'
import { Icon, Moon, Sun } from 'svelte-hero-icons'
import { darkMode } from '../stores'

</script>

<div class="text-lg w-5/6 max-w-7xl flex justify-center">
    <nav class="w-full py-5 gap-5 flex flex-col justify-between items-center md:flex-row ">
        <a href="/" class="title">
            <b>{config.title}</b>
        </a>

        <ul class="flex flex-grow gap-12 justify-center list-none">
            <li>
                <a href="/blog/test">blog</a>
            </li>
            <li>
                <a href="/about">about</a>
            </li>
            <li>
                <a href="/contact">contact</a>
            </li>
            <li>
                <a href="/" >rss</a>
            </li>
        </ul>

        <label for="dark-mode-toggle" />
        <button
            id="dark-mode-toggle"
            class={ "h-8 p-1 text-sapphire outline outline-2 outline-base "
                + "hover:bg-sapphire hover:text-base font-bold rounded-md transition-colors" }
            on:click={ () => {darkMode.update((d) => !d)} }
        >
            <Icon src="{($darkMode) ? Moon : Sun}" solid />
        </button>
    </nav>
</div>
