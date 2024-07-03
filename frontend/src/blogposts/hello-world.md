---
title: First Post
description: Hello world for the markdown renderer.
date:  '2024-3-7'
categories:
    - svelte
    - mdsvex
    - markdown
published: true
---

# 世界はこんにちは- Hello World

Welcome to my dev blog, built with:
<ul class="ulist">
    <li>SvelteKit </li>
    <li>mdsvex</li>
    <li>tailwind</li>   
</ul>

## Markdown?
Using mdsvex, we can convert markdown to a dynamically rendered svelte component. This blog post is a single markdown file.

## We also have highlighted code blocks!

The main-site utilizes [@svelte-dev/pretty-code](https://pretty-code.js.cool/) for syntax highlighting, which is shiki with some added 
funtionality.
```ts
// typescript
function greet(name: string) {
    console.log(`Hello ${name}!`)
}
```

Some *more* text.
