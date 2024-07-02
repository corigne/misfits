import { dev } from '$app/environment'
import { get, writable } from 'svelte/store'
import { browser } from '$app/environment'

export const darkMode = writable((browser) ? localStorage.getItem('darkMode') === 'true' : true)
darkMode.subscribe((newVal) => {
    if (browser && document) newVal
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')
    if (dev) console.log(`Toggling ${(get(darkMode)) ? 'dark' : 'light'} mode.`)
    if (browser) return localStorage.darkMode = newVal
})
