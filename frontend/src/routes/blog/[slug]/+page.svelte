<script lang='ts'>
import type { PageData } from '../$types'
export let data : PageData
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />
</svelte:head>

<article>

    <hgroup>
        <h1 class="text-4xl">{data.meta.title}</h1>
        <p>Published on {new Date(data.meta.date).toLocaleDateString()}</p>
    </hgroup>

    <div class="tags">
        {#each data.meta.categories as category}
            <span>&num;{category} </span>
        {/each}
    </div>

    <div class="prose">
        <svelte:component this={data.content}/>
    </div>

</article>

<style>

</style>
