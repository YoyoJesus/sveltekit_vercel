import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss()
  ],  
  base: './', // Ensure relative paths for assets and scripts
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
