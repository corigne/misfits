import type { BlogPost } from "$lib/types"

export async function getPosts(): Promise<BlogPost[]> {
    const posts: BlogPost[] = []
    const paths = import.meta.glob('/src/blogposts/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '') as string
        if (file && typeof file === 'object' && 'metadata' in file) {
            const metadata = file.metadata as Omit<BlogPost, 'slug'>
            const post = { ...metadata, slug } satisfies BlogPost
            if (metadata.published) posts.push(post)
        }
    }
    return posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}
