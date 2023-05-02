<script lang="ts">
  import CustomLink from "./lib/CustomLink.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import Article from "./lib/Article.svelte";
  import Home from "./pages/Home.svelte";

  const paths: { [key: string]: string } = {
    home: "#home",
    whoami: "#whoami",
    experience: "#experience",
    education: "#education",
    contact: "#contact"
  };
</script>

<div class="header-container">
  <NavBar>
    <CustomLink path={paths.home}><p class="link-content">Home</p></CustomLink>
    <CustomLink path={paths.whoami}><p class="link-content">Whoami</p></CustomLink>
    <CustomLink path={paths.experience}><p class="link-content">Experience</p></CustomLink>
    <CustomLink path={paths.education}><p class="link-content">Education</p></CustomLink>
    <CustomLink path={paths.contact}><p class="link-content">Contact</p></CustomLink>
  </NavBar>
</div>
<div class="content">
  <Article id="home">
    <Home />
  </Article>
  <!-- <Article id="whoami"> -->
  <!--   <div>magia</div> -->
  <!--   <section style="min-height: 90vh;">asfas</section> -->
  <!--   <section style="min-height: 90vh;">asfas</section> -->
  <!-- </Article> -->
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
