<script lang="ts">
  import type { Snippet } from "svelte";
  import { activeArticle } from "./actions/activeSection";

  let { id, children }: { id: string; children: Snippet } = $props();

  const handleVisibility = () => {
    history.replaceState(undefined, "", `#${id}`);
  };
</script>

<article use:activeArticle onactive={handleVisibility}>
  <div {id} class="anchor"></div>
  {@render children()}
</article>

<style>
  .anchor {
    position: relative;
    top: -75px;
    visibility: hidden;
  }
</style>
