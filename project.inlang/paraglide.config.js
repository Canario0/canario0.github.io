export default {
  outdir: "./.paraglide",
  emitTsDeclarations: true,
  // The Vite plugin defaults to "locale-modules" in dev while the CLI (pnpm check/lint)
  // always emits "message-modules"; both share the outdir, so pin one structure.
  outputStructure: "message-modules",
  // The locale is resolved and stored by src/i18n.svelte.ts
  strategy: ["globalVariable", "baseLocale"]
};
