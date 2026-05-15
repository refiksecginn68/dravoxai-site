// dravoxai/vite.config.js — Vite build yapılandırması
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    minify: 'esbuild',
    rollupOptions: {
      output: { manualChunks: { three: ['three'], gsap: ['gsap'] } }
    }
  },
  server: { host: true, port: 5173 }
});
