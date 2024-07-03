import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { createHighlighter } from '@svelte-dev/pretty-code'
import remarkBreaks from 'remark-breaks'

import { mdsvex } from 'mdsvex';

/** @type {import{'mdsvex'}.MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md', '.svelte'],
    remarkPLugins: [
        [remarkBreaks]
    ],
    highlight: {
        highlighter: createHighlighter({
            theme: {
                light: 'catppuccin-latte',
                dark: 'catppuccin-macchiato',
            }
        })
    },
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],

    preprocess: [
        mdsvex(mdsvexOptions),
        vitePreprocess(),
    ],

    kit: {
        prerender: {
            handleHttpError: ({ path, message }) => {
                if (path === '/not-found' ) {
                    return
                }

                // fail path
                throw new Error(message)
            }
        },
        adapter: adapter(),
    },
};

export default config;
