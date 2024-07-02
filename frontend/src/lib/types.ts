
export type Categories = 'sveltekit' | 'mdsvex' | 'dev'

export type BlogPost = {
    title: string,
    description: string,
    categories: Categories[],
    date: Date,
    slug: string,
    published: boolean
}
