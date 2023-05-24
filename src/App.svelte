<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import carp from './assets/carp.jpg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  
  <div>
    <h1>
      Under Construction...
    </h1>
    <img src={carp} alt="An image of a carp.">
  </div>

  <div class="card">
    <Counter />
  </div>

  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h2>Vite + Svelte</h2>

</main>

<style>
  .logo {
    height: 3em;
    padding: 1em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
