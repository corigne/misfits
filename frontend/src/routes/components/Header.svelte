<script lang="ts">
import * as config from '$lib/config'
import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="header text-lg w-full md:w-5/6 max-w-7xl">
    <nav class="w-full flex flex-col md:flex-row justify-evenly md:justify-around items-center">
        <a href="/" class="title">
            <b>{config.title}</b>
        </a>

        <ul id="header-navbar" class="header-navbar">
            <li>
                <a href="/blog">blog</a>
            </li>
            <li>
                <a href="/projects">projects</a>
            </li>
            <li>
                <a href="/contact">contact</a>
            </li>
            <li>
                <a href="/" >rss</a>
            </li>
        </ul>

        <ThemeToggle />
    </nav>
</div>
