<script lang="ts">
  import type { Snippet } from "svelte";
  import ArticleContainer from "./ArticleContainer.svelte";
  import ArticleContentContainer from "./ArticleContentContainer.svelte";

  let { heading, content }: { heading: Snippet; content: Snippet } = $props();
</script>

<ArticleContainer>
  {@render heading()}
  <ArticleContentContainer>
    {@render content()}
  </ArticleContentContainer>
</ArticleContainer>
