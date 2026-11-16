import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mavcui.github.io/Code-2-Video-Lab/',
  output: 'static',
  markdown: { shikiConfig: { theme: 'github-light' } },
  devToolbar: { enabled: false },
});
