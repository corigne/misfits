import type { BlogPost } from "$lib/types"
import type { RouteParams } from "../$types"
import { error } from "@sveltejs/kit"
import * as POSTS_API from "../../api/posts/+server"

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
    const response = await POSTS_API.GET()
    const posts: BlogPost[] = await response.json()
    console.log(posts)
    return posts.map((post) => {
        return {slug: post.slug}
    });
}

//export const prerender = true;

interface RestParams extends RouteParams {
    slug: string
}
/** @type {import('.$types').PageLoad} */
export const load = async ({ params }: { params: RestParams}) => {
    try {
        const post = await import(`../../../blogposts/${params.slug}.md`)
        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }
}
