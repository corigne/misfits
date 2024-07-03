<script lang="ts">
    import type { BlogPost } from "$lib/types";
    export let data: { posts: BlogPost[] }
</script>

<header>
    <h1>Blog Posts</h1>
</header>

<section>
    <ul class="posts" >
        {#each data.posts as post}
            <li class="post">
                <a href="/blog/{post.slug}" class="title text-lg font-bold">{post.title}</a>
                <p class="date text-overlay1 italic">Published: {post.date}</p>
                <p class="description">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

<style>
</style>
