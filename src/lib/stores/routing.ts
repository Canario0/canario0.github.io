import { readable } from "svelte/store";

export const activeRoute = readable(window.location.hash, (set) => {
  let currentHash: string;
  const onChange = () => {
    const windowHash = window.location.hash;
    if (currentHash !== windowHash) {
      currentHash = windowHash;
      set(windowHash);
    }
  };
  addEventListener("hashchange", onChange);
  addEventListener("scroll", onChange);
  return () => {
    removeEventListener("hashchange", onChange);
    removeEventListener("scroll", onChange);
  };
});
