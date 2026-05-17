// dravoxai/vite.config.js — Vite build yapılandırması
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main:   resolve(__dirname, 'index.html'),
        oteller: resolve(__dirname, 'sektorler/oteller-icin-ai/index.html'),
      },
      output: { manualChunks: { three: ['three'], gsap: ['gsap'] } }
    }
  },
  server: { host: true, port: 5173 }
});
