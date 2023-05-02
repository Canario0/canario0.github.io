<script lang="ts">
  import { activeArticle } from "./actions/activeSection";

  export let id: string;

  const handleVisibility = () => {
    history.replaceState(undefined, undefined, `#${id}`);
  };
</script>

<article use:activeArticle on:active={handleVisibility}>
  <div {id} class="anchor" />
  <slot />
</article>

<style>
  .anchor {
    position: relative;
    top: -75px;
    visibility: hidden;
  }
</style>
