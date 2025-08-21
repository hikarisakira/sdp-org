// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';

import unocss from '@unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), mdx(), unocss({ injectReset: true })],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  // 添加以下設定
  vite:{
    // @ts-ignore
  }
});