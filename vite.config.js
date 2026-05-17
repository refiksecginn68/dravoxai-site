// dravoxai/vite.config.js — Vite build yapılandırması
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    target: 'es2022',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main:    'index.html',
        oteller: 'sektorler/oteller-icin-ai/index.html',
      },
      output: { manualChunks: { three: ['three'], gsap: ['gsap'] } }
    }
  },
  server: { host: true, port: 5173 }
});
