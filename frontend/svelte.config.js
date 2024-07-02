import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { createHighlighter } from '@svelte-dev/pretty-code'

import { mdsvex } from 'mdsvex';

/** @type {import{'mdsvex'}.MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md'],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],

    preprocess: [
        mdsvex(mdsvexOptions),
        vitePreprocess(),
    ],

    highlight: {
        highlighter: createHighlighter ({
            createBackground: true,
            theme: {
                dark: 'catppuccin-frappe',
                light: 'catppuccin-latte'
            }
        })
    },

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
