<section class="content">
  <slot />
</section>

<style>
  .content {
    padding: 100px 0 0;
  }

  /* Midsize Screens */
  @media (max-width: 869px) {
    .content {
      padding: 50px 0 0;
    }
  }
</style>
