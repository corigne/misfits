import { browser } from '$app/environment'
import type { LayoutData } from "./$types"
import { darkMode } from "../stores"

//export const prerender = true

/** @type {import('./$types').LayoutLoad} */
export function load(): LayoutData {
    const localDarkMode: boolean = browser && localStorage.getItem('darkMode') === 'true'
    darkMode.set(localDarkMode)
}
