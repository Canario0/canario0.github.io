<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="container">
  {@render children()}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 100px 0;
  }
</style>
