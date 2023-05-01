import { readable } from "svelte/store";

export const activeRoute = readable(window.location.hash, (set) => {
  const onChange = () => {
    set(window.location.hash);
  };
  addEventListener("hashchange", onChange);
  addEventListener("scroll", onChange);
  return () => {
    removeEventListener("hashchange", onChange);
    removeEventListener("scroll", onChange);
  };
});
