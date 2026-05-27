// dravoxai/vite.config.js — Vite build yapılandırması
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    target: 'es2022',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main:              'index.html',
        oteller:           'sektorler/oteller-icin-ai/index.html',
        restoranlar:       'sektorler/restoranlar-icin-ai/index.html',
        eticaret:          'sektorler/eticaret-icin-ai/index.html',
        yedekParca:        'sektorler/yedek-parca-icin-ai/index.html',
        disKlinigi:        'sektorler/dis-klinikleri-icin-ai/index.html',
        guzellikMerkezi:   'sektorler/guzellik-merkezleri-icin-ai/index.html',
        avukatlar:         'sektorler/avukatlar-icin-ai/index.html',
        blog:              'blog/index.html',
        blogOteller2026:   'blog/oteller-icin-ai-chatbot-rehberi-2026/index.html',
        blogBooking:       'blog/otel-booking-komisyonundan-kurtulma/index.html',
        blogRestoran:      'blog/restoran-whatsapp-otomasyon-rehberi/index.html',
        blogSesli:         'blog/sesli-ai-nedir-n8n-giris/index.html',
        blogLead:          'blog/n8n-whatsapp-crm-lead-entegrasyonu/index.html',
        blogPms:           'blog/otel-pms-entegrasyonlu-chatbot-rezervasyon/index.html',
        projeler:          'projeler/index.html',
        iletisim:          'iletisim/index.html',
        hakkimizda:        'hakkimizda/index.html',
      },
      output: { manualChunks: { three: ['three'], gsap: ['gsap'] } }
    }
  },
  server: { host: true, port: 5173 }
});
