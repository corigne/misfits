<script lang="ts">
import * as config from '$lib/config'
</script>

<div class="w-5/6 text-xl max-w-7xl flex justify-center items-center">
    <nav class="py-5 gap-5 flex mx-auto flex-col w-10/12 items-center justify-around md:flex-row md:w-5/6 ">
        <a href="/" class="title">
            <b>{config.title}</b>
        </a>

        <ul class="flex gap-12 justify-evenly list-none">
            <li>
                <a href="">about</a>
            </li>
            <li>
                <a href="">contact</a>
            </li>
            <li>
                <a href="" target="_blank">rss</a>
            </li>
        </ul>

        <button class="bg-overlay2 hover:bg-sapphire font-bold py-1 px-2 rounded transition-colors">Toggle</button>
    </nav>
</div>
