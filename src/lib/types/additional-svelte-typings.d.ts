declare namespace svelteHTML {
  // enhance elements
  interface IntrinsicElements {
    article: { "on:active": (e: CustomEvent<unknown>) => void };
  }
}
