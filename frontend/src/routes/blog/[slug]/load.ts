import type { BlogPost } from "$lib/types";
import { error } from "@sveltejs/kit";

/** @type {import('.$types').PageLoad} */
export const load = async (params) => {
    const post = await import(`../../../blogposts/${params.slug}.md`);
    if (!(post as BlogPost)) error(404, 'Not found');
    console.log(post.default);
    console.log(post.metadata);
};
