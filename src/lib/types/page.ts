import type { ComponentProps, ComponentType, SvelteComponent } from "svelte";

export type Page<T extends SvelteComponent> = {
  id: string;
  linkName: string;
  component: ComponentType<T>;
  props: ComponentProps<T>;
};
