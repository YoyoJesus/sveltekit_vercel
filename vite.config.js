import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
    Icons({
      compiler: 'svelte',
      autoInstall: true,
    })
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
