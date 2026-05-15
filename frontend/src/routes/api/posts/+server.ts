import { getPosts } from "$lib/posts"
import { json } from "@sveltejs/kit"

export async function GET() {
    const posts = await getPosts()
    return json(posts.filter((p) => p.published), {
        headers: { 'Cache-Control': 'max-age=0, s-max-age=600' }
    })
}
