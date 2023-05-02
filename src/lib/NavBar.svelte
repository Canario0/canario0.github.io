<script lang="ts">
  import MenuIcon from "./MenuIcon.svelte";

  let active = false;
  const handleClick = () => {
    active = !active;
  };
</script>

<header class="header">
  <div class="burger">
    <MenuIcon on:click={handleClick} />
  </div>
  <nav class="header-links" class:active>
    <slot />
  </nav>
</header>

<style>
  .header {
    width: 100%;
    height: 70px;
  }
  .header-links {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
    align-items: center;
  }

  .burger {
    display: none;
  }

  @media (max-width: 800px) {
    .header-links {
      height: unset;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      position: relative;
      background-color: var(--background-color);
      border-width: 1px 0 0 0;
      border-color: var(--border-color);
      border-style: solid;
      visibility: collapse;
    }
    .active {
      visibility: visible;
    }

    .burger {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      flex-wrap: nowrap;
      align-items: center;
      padding-right: 30px;
    }
  }
</style>
