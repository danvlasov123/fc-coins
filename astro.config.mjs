import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ninetycoins.com',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
