import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginSvelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginSvelte.configs['flat/prettier'],
    {
        files: ["**/*.svelte", "*.svelte"],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: [".svelte"], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
            },
        },
        rules: {
            // override/add rules settings here, such as:
            // 'svelte/rule-name': 'error'
        },
    },
];
