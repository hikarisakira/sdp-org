// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tinaDirective from "./astro-tina-directive/register";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || `https://${process.env.VERCEL_URL}`,
  integrations: [mdx(), sitemap(), react(), tinaDirective(), svelte()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/about": {
      status: 302,
      destination: "/302",
    },
    "/about/team": {
      status: 302,
      destination: "/302",
    },
    "/about/officials": {
      status: 302,
      destination: "/302",
    },
    "/about/documents": {
      status: 302,
      destination: "/302",
    },
    "/about/finance": {
      status: 302,
      destination: "/302",
    },
    "/join": {
      status: 302,
      destination: "/302",
    },
  },
});
