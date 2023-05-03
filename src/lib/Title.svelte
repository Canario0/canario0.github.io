<script lang="ts">
  export let style: string = undefined;
</script>

<h2 class="title" {style}>
  <slot />
</h2>

<style>
  .title {
    color: var(--text-color);
    line-height: 47px;
    font-weight: 800;
    font-size: 47px;
    font-family: "Playfair Display", serif;
    margin: 0;
  }
</style>
