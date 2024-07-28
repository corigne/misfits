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

Welcome to my dev blog, built using:
<ul class="ulist">
    <li>SvelteKit </li>
    <li>mdsvex</li>
    <li>tailwind</li>   
</ul>
The site is hosted using nodejs, deployed to AWS Lightsail using GitHub actions, and is proxied via Cloudflare.

## Using pretty-code.js have highlighted code blocks!

The main-site utilizes [@svelte-dev/pretty-code](https://pretty-code.js.cool/) for syntax highlighting, which is shiki with some added 
funtionality.
```ts
// typescript
function greet(name: string) {
    console.log(`Hello ${name}!`)
}
```

## Markdown?
Using mdsvex, svelteKit knows how to parse markdown into a svelte component.  
For example, this is the source for this blog post:


```markdown
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

## We also have highlighted code blocks!

The main-site utilizes [@svelte-dev/pretty-code](https://pretty-code.js.cool/) for syntax highlighting, which is shiki with some added 
funtionality.

//```
ts
// typescript
function greet(name: string) {
    console.log(`Hello ${name}!`)
}
//```

## Markdown Blog!
Using mdsvex, svelteKit understands how to parse markdown into a svelte component. This blog post is a single markdown file, for instance.

/// This example markdown in a code block.

Some *more* text.

```
Some *more* text.
