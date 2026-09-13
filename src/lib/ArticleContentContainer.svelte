<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<section class="content">
  {@render children()}
</section>

<style>
  .content {
    padding: 100px 0 0;
  }

  /* Midsize Screens */
  @media (max-width: 869px) {
    .content {
      padding: 50px 0 0;
    }
  }
</style>
