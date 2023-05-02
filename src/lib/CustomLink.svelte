<script lang="ts">
  import { activeRoute } from "./stores/routing";

  export let path: string;
  const isActivePath = (route: string, href: string) => route === href;
</script>

<a href={path} class="link" class:active={isActivePath($activeRoute, path)}>
  <slot />
</a>

<style>
  .link {
    text-decoration: none;
    color: var(--text-color);
    transition: all 0.2 linear;
  }
  .link:visited {
    color: inherit;
  }
  .link:hover {
    color: var(--primary-color);
  }
  .link.active {
    color: var(--primary-color);
  }
  @media (max-width: 800px) {
    .link {
      width: 100%;
      border-width: 0 0 1px 0;
      border-color: var(--border-color);
      border-style: solid;
    }
  }
</style>
