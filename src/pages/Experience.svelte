<script lang="ts">
  import ArticlePage from "../lib/ArticlePage.svelte";
  import Title from "../lib/Title.svelte";
</script>

<ArticlePage>
  <svelte:fragment slot="title">
    <div>
      <Title>Experience</Title>
    </div>
  </svelte:fragment>
  <div class="content" slot="content" />
</ArticlePage>
