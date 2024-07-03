<script lang="ts">
import * as config from '$lib/config'
import { Icon, Moon, Sun } from 'svelte-hero-icons'
import { darkMode } from '../stores'
</script>

<div class="header text-lg w-5/6 max-w-7xl flex justify-center">
    <nav class="w-full py-5 gap-5 flex flex-col justify-between items-center md:flex-row ">
        <a href="/" class="title">
            <b>{config.title}</b>
        </a>

        <div class="flex flex-grow gap-12 items-center justify-end list-none">

            <ul class="flex flex-grow justify-center gap-10">
                <li>
                    <a href="/blog">blog</a>
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
                class={ "h-8 w-8 p-1 text-sapphire outline outline-1 outline-overlay0 shadow-md transition-all ease-in duration-300 "
                    + "font-bold rounded-md [@media(hover:hover)]:hover:bg-sapphire [@media(hover:hover)]:hover:text-base" }
                on:click={ () => {darkMode.set(!$darkMode)} }
            >
                <Icon src="{($darkMode) ? Moon : Sun}" solid />
            </button>
        </div>
    </nav>
</div>
