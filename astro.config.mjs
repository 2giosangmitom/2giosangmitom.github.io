// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://2giosangmitom.is-a.dev',
  integrations: [sitemap(), vue()],
  adapter: netlify({
    edgeMiddleware: true
  })
});
