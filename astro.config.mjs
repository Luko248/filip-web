// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build
export default defineConfig({
  // GitHub Pages project site: https://luko248.github.io/filip-web/
  site: "https://luko248.github.io",
  base: "/filip-web",
  vite: {
    plugins: [tailwindcss()],
  },
});
