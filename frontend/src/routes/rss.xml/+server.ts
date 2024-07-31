import type { BlogPost } from "$lib/types";
import * as config from "$lib/config"

async function getPosts():Promise<BlogPost[]> {
    const posts: BlogPost[] = []

    const paths = import.meta.glob('/src/blogposts/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '') as string
        if (file && typeof file === 'object' && 'metadata' in file) {
            const metadata = file.metadata as Omit<BlogPost, 'slug'>
            const post = { ...metadata, slug } satisfies BlogPost
            metadata.published && posts.push(post)
        }
    }
    posts.sort((a: BlogPost, b:BlogPost) => new Date(a.date).getTime() - new Date(b.date).getTime())
    return posts
}

const render = (posts: BlogPost[]) => {
    const body = `<?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <atom:link rel="self" href="${config.url}/rss.xml"/>
            <title>Nathan Jodoin's Devlog</title>
            <link>${config.url}</link>
            <description>Nathan Jodoin's blog, with topics including software,
            computer science, and random thoughts.</description>
            ${
            posts.map( (post) => {
            (post.published)
            ?
            `<item>
            <guid>${config.url}/blog/${post.slug}</guid>
            <title>${post.title}</title>
            <link>${config.url}/blog/${post.slug}</link>
            <description>${post.description}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            </item>`
            : ''
            }).join('')
            }
        </channel>
        </rss>
        `
    return body
}

export async function GET(): Promise<Response> {
    const posts = await getPosts()
    const body = render(posts);
    const headers = {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml'
    };
    const response = new Response(body)
    for (let [key, value] of Object.entries(headers)) {
        response.headers.set(key, value)
    }
    return response;
}
