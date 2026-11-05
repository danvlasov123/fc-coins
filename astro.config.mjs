import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ninetycoins.com',
  compressHTML: true,
  integrations: [sitemap({ filter: (page) => !page.includes('/go/') })],
  build: { inlineStylesheets: 'auto' },
});
