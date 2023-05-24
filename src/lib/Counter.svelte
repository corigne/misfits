<script lang="ts">
  let count: number = parseInt(localStorage.getItem("click_count"))

  if (!count) {
    count = 0
  }

  const increment = () => {
    count += 1
    localStorage.setItem("click_count", count)
  }

  const load_count = () => {
    count = localStorage.getItem("click_count")
  }

</script>

<button on:click={increment} on:load={load_count} >
  count is {count}
</button>
