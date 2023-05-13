<script lang="ts">
  import ArticlePage from "../lib/ArticlePage.svelte";
  import Subtitle from "../lib/Subtitle.svelte";
  import Title from "../lib/Title.svelte";

  export let title: string;
  export let entries: string[];
</script>

<ArticlePage>
  <svelte:fragment slot="title">
    <div>
      <Subtitle style="color: var(--primary-color)">About Me</Subtitle>
    </div>
    <div>
      <Title>{title}</Title>
    </div>
  </svelte:fragment>
  <div class="content" slot="content">
    <div>
      <h3 class="content-title">I embrace complex challenges and keep up with new technologies.</h3>
    </div>
    <div>
      {#each entries as entry}
        <p class="content-entry">
          {entry}
        </p>
      {/each}
    </div>
  </div>
</ArticlePage>

<style>
  .content {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    flex-wrap: nowrap;
  }

  .content > div {
    width: 100%;
    height: 100%;
    gap: 100px 0;
  }
  .content > div:first-child {
    padding-right: 100px;
  }

  .content-title {
    font-family: "Playfair Display", serif;
    color: var(--primary-color);
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.5rem;
    word-wrap: break-word;
  }

  .content-entry {
    word-wrap: break-word;
    margin-top: 0px;
  }

  .content-entry:nth-child(even) {
    color: var(--text-color-light);
  }

  .content-entry:last-child {
    margin: 0;
  }

  /* Midsize Screens */
  @media (max-width: 869px) {
    .content {
      flex-wrap: wrap;
    }
    .content > div:first-child {
      height: unset;
      padding: 0 0 25px;
    }
  }
</style>
