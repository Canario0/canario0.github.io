<header class="header">
  <nav class="header-links">
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
</style>
