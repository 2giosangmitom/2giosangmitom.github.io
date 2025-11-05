// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://2giosangmitom.is-a.dev',
  integrations: [sitemap()]
});
