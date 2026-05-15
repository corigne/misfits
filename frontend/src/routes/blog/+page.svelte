<script lang="ts">
    import { goto } from "$app/navigation";
    import type { BlogPost } from "$lib/types";
    export let data: { posts: BlogPost[] }
</script>

<header>
    <h1>Blog Posts</h1>
</header>

<section>
    <div class="posts flex flex-col md:flex-row flex-wrap justify-start items-start" >
        {#each data.posts as post}
            <div class="post-container">
                <button aria-label={`Blog Post`} class="post" on:click={() => goto(`blog/${post.slug}`)}>
                    <span class="text-cyan-700 dark:text-sapphire text-lg font-bold">{post.title}</span>
                    <p class="date text-overlay font-semibold italic">Published: {post.date}</p>
                    <p class="description">{post.description}</p>
                </button>
            </div>
        {/each}
    </div>
</section>

<style>
@reference "../../app.css";

.post-container {
    @apply w-full p-1;
    @media (min-width: 768px) { width: 50%; }
    @media (min-width: 1280px) { width: 33.333333%; }
    @media (min-width: 1536px) { width: 25%; }
}
.post {
    @apply border-overlay2 border bg-crust p-1 drop-shadow-sm w-full;
    border-style: outset;
}
.post:hover {
    @apply drop-shadow-md bg-mantle translate-y-1 transition-all duration-300 ease-in-out;
    @media (prefers-reduced-motion: reduce) {
        transition: none;
        transform: none;
    }
}
</style>
