import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), paraglideVitePlugin({ project: "./project.inlang" })]
});
