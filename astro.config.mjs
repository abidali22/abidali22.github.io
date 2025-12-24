import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://triasoft.io', // Update this to your actual production URL
  integrations: [tailwind(), sitemap()],
  devToolbar: {
    enabled: false
  }
});
