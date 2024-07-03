import { get, writable } from 'svelte/store'
import { browser, dev } from '$app/environment'

const localDarkModeSet: boolean = browser && (localStorage.getItem('darkMode') !== null)
const userPrefersDarkMode: boolean = browser && window.matchMedia('(prefers-color-scheme: dark)').matches
export const darkMode = writable( (localDarkModeSet) ? (localStorage.getItem('darkMode') === 'true') : userPrefersDarkMode )

if (dev) {
    browser && console.log( `PAGE THEME DEBUG: \n`
    + `Local storage has var darkMode: ${localDarkModeSet}\n`
    + `Local darkMode set to: ${localStorage.getItem('darkMode')}\n`
    + `User prefers-color-scheme ${(userPrefersDarkMode) ? 'dark' : 'light'}\n`
    + `Store has darkMode = ${get(darkMode)}\n`
    )
}

darkMode.subscribe((newVal) => {
    if (browser && document) newVal
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')
    if (browser) return localStorage.darkMode = newVal
})
