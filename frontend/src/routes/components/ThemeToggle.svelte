<script lang="ts">

import { Icon, Moon, Sun } from 'svelte-hero-icons'
import { getIsDarkMode, toggleTheme } from '$lib/ui'
import { onMount } from 'svelte';

let darkMode: boolean = true
let isLoading: boolean = true

onMount(() => {
    darkMode = getIsDarkMode() 
    isLoading = false
})

</script>
<button
    id="dark-mode-toggle"
    aria-label="Theme Toggle"
    class={ "darkMode_toggle " + (isLoading && "text-crust") }
    on:click={ () => { darkMode = toggleTheme()} }
>
    <Icon src={ (darkMode) ? Sun : Moon } solid />
</button>
