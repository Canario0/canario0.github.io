<script lang="ts">
  import CustomLink from "./lib/CustomLink.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import Article from "./lib/Article.svelte";
  import { PAGES } from "./content";

  // const paths: { [key: string]: string } = {
  //   home: "#home",
  //   whoami: "#whoami",
  //   experience: "#experience",
  //   education: "#education",
  //   contact: "#contact"
  // };
</script>

<div class="header-container">
  <NavBar>
    {#each PAGES as { id, linkName } (id)}
      <CustomLink path={`#${id}`}><p class="link-content">{linkName}</p></CustomLink>
    {/each}
    <!-- <CustomLink path={paths.education}><p class="link-content">Education</p></CustomLink> -->
    <!-- <CustomLink path={paths.contact}><p class="link-content">Contact</p></CustomLink> -->
  </NavBar>
</div>
<div class="content">
  {#each PAGES as { id, component, props } (id)}
    <Article {id}>
      <svelte:component this={component} {...props} />
    </Article>
  {/each}
</div>

<style>
  .header-container,
  .content {
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .header-container {
    position: sticky;
    top: 0;
    background-color: var(--background-color);
    border-width: 0 0 1px;
    border-color: var(--border-color);
    border-style: solid;
  }

  .link-content {
    font-size: 1rem;
    min-width: 40px;
    text-align: center;
    padding: 0 1rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  /* Small Screens */
  @media (min-width: 625px) {
    .header-container,
    .content {
      max-width: 100%;
    }
  }

  /* Midsize Screens */
  @media (min-width: 869px) {
    .header-container,
    .content {
      max-width: 1240px;
    }
  }

  /* Midsize Screens */
  @media (max-width: 869px) {
    .header-container {
      padding: 0;
    }
  }

  /* Big Screens more than 1113px*/
</style>
