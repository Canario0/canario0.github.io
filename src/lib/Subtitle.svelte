<script lang="ts">
  import type { Snippet } from "svelte";

  let { style = "", children }: { style?: string; children: Snippet } = $props();
</script>

<h6 class="subtitle" {style}>
  {@render children()}
</h6>

<style>
  .subtitle {
    color: var(--text-color);
    line-height: 1.25rem;
    font-weight: 500;
    font-size: 1rem;
    margin: 0 0 10px 0;
  }
</style>
