import type { PageLoad } from "./$types"
import type { BlogPost } from "$lib/types"

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('api/posts')
    const posts: BlogPost[] = await response.json()
    return { posts }
}
