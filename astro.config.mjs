import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: "static",
  site: 'https://abidali22.github.io/', // Update this to your actual production URL
  integrations: [tailwind(), sitemap()],
  devToolbar: {
    enabled: false
  }
});
