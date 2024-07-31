import type { BlogPost } from "$lib/types";
import { json } from "@sveltejs/kit";

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

export async function GET() {
    const posts = await getPosts()
    return json(posts.filter((post) => post.published))
}
