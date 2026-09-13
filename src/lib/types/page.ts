import type { Component, ComponentProps } from "svelte";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Page<T extends Component<any> = Component<any>> = {
  id: string;
  linkName: string;
  component: T;
  props: ComponentProps<T>;
};
