/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            sans: ['Hack', 'sans-serif'],
            monospace: ['Hack Mono', 'monospace']
        },
        extend: {},
    },
    darkMode: "class",
    plugins: [
        require("@catppuccin/tailwindcss"),
    ],
}
