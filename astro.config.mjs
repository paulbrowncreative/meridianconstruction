// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production origin. Canonical URLs, Open Graph URLs and the sitemap are all
// built from this value, so it must match the live domain exactly.
const SITE = 'https://www.mymeridianconstruction.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Utility pages carry noindex and must stay out of the sitemap.
      filter: (page) => !/\/(contact\/thank-you|404)\/?$/.test(page),
    }),
  ],
});
