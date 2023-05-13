<script lang="ts">
  import ArticleContainer from "./ArticleContainer.svelte";
  import ArticleContentContainer from "./ArticleContentContainer.svelte";
</script>

<ArticleContainer>
  <slot name="title" />
  <ArticleContentContainer>
    <slot name="content" />
  </ArticleContentContainer>
</ArticleContainer>
