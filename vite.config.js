import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: './', // Ensure relative paths for assets and scripts
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    fs: {
      allow: ['public'],
    },
  },
});
