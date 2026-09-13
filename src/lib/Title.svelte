<script lang="ts">
  import type { Snippet } from "svelte";

  let { style, children }: { style?: string; children: Snippet } = $props();
</script>

<h2 class="title" {style}>
  {@render children()}
</h2>

<style>
  .title {
    color: var(--text-color);
    line-height: 47px;
    font-weight: 800;
    font-size: 47px;
    font-family: "Playfair Display", serif;
    margin: 0;
    word-wrap: break-word;
  }
</style>
