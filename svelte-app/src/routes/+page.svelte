<script>
  import { elements } from "$lib";
</script>

<div class="periodic-table">
  {#each elements as element}
    <div class="element {element.type}" style="grid-column: {element.group}; grid-row: {element.period}">
      <strong>{element.symbol}</strong>
      <small>{element.atomicNumber}</small>
    </div>
  {/each}
</div>

<style lang="scss">
  @import "./page.svelte.scss";
</style>
