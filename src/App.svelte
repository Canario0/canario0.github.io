<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import CustomLink from "./lib/CustomLink.svelte";
  import NavBar from "./lib/NavBar.svelte";
  const paths: { [key: string]: string } = {
    home: "/",
    whoami: "/whoami",
    experience: "/experience",
    education: "/education",
    contact: "/contact"
  };
</script>

<Router>
  <div class="header-container">
    <NavBar>
      <CustomLink path={paths.home}><p class="link-content">Home</p></CustomLink>
      <CustomLink path={paths.whoami}><p class="link-content">Whoami</p></CustomLink>
      <CustomLink path={paths.experience}><p class="link-content">Experience</p></CustomLink>
      <CustomLink path={paths.education}><p class="link-content">Education</p></CustomLink>
      <CustomLink path={paths.contact}><p class="link-content">Contact</p></CustomLink>
    </NavBar>
  </div>
  <div style="z-index: 1; position: relative;">
    <Route path="/">
      <div>Home</div>
      <section style="min-height: 90vh;">asfas</section>
      <section style="min-height: 90vh;">asfas</section>
    </Route>
    <Route path="blog/*">
      <Route path="/">
        <div>magia</div>
      </Route>
    </Route>
  </div>
</Router>

<style>
  .header-container {
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
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

  @media (min-width: 544px) {
    .header-container {
      max-width: 100%;
    }
  }

  @media (min-width: 922px) {
    .header-container {
      max-width: 1240px;
    }
  }
</style>
