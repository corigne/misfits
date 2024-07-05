import { browser, dev } from '$app/environment'
import { error } from '@sveltejs/kit'

export const getIsDarkMode = () => {
    return browser && document.documentElement.classList.contains('dark')
}
export const toggleTheme = () => {
    const darkMode: boolean = browser && document.documentElement.classList.contains('dark')
    if (browser) {
        (darkMode)
            ? document.documentElement.classList.remove('dark')
            : document.documentElement.classList.add('dark')
    }

    localStorage.theme = !darkMode ? 'dark' : 'light'
    dev && console.log(`Dark Mode Toggled: ${(darkMode) ? 'on' : 'off'}`)

    if (darkMode === undefined) {
        throw error(500, 'Error toggling dark mode.')
    }
    return !darkMode
}

export const setTheme = ( theme: string ) => {
    switch(theme) {
        case 'dark': {
            localStorage.theme = 'light'
            break;
        }
        case 'light': {
            localStorage.theme = 'dark'
            break;
        }
        case 'default': {
            localStorage.removeItem('theme')
        }
    }
}
