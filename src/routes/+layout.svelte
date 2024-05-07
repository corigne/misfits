<script lang="ts">
    import Footer from "./footer.svelte";
    import Header from "./header.svelte";

</script>

<svelte:head>
  <style>
    @import url("//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css");
  </style>
</svelte:head>

<Header />
<slot />
<Footer />

<style>
  * {
    font-family: "Hack", monospace;
  }
</style>
