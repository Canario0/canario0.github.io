<script lang="ts">
  import type { NavigatorLocation } from "svelte-navigator";
  import { link, useLocation } from "svelte-navigator";
  export let path: string;
  const location = useLocation();
  const isActivePath = (location: NavigatorLocation, href: string) => location.pathname === href;
</script>

<a href={path} class="link" use:link class:active={isActivePath($location, path)}>
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
</style>
