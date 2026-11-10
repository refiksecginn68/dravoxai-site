# DRAVOXAI — Proje Devir Dokümanı (Handoff)

> Bu doküman, Dravoxai web sitesi SEO/GEO büyütme projesinin tam durumunu içerir.
> Yeni bir AI geliştirme ortamına (Google Antigravity) geçişte, AI asistanına bu
> dokümanı vererek projeye kaldığın yerden devam edebilirsin.

**Son güncelleme:** Hafta 1 tamamlandı, Hafta 2 Gün 8'de (e-ticaret sayfası eklendi)
**Site:** https://dravoxai.com
**Sahibi:** Refik (Aksaray, Türkiye)

---

## 1. PROJE AMACI

Dravoxai, Türkiye merkezli bir **AI otomasyon stüdyosu**. Hedef: web sitesini SEO + GEO
(Generative Engine Optimization) ile büyütmek, Google'dan organik trafik çekmek, marka
otoritesi kurmak, müşteri (lead) toplamak.

**Birincil hedef sektör:** Turizm (otel + restoran) — Türkçe içerik, Türkiye odaklı
**İkincil sektörler:** E-ticaret, yedek parça (ileride)
**Hedef kitle:** Önce küçük işletmeler/KOBİ, büyüdükçe kurumsal firmalar ve tesisler

---

## 2. TEKNİK STACK

| Bileşen | Teknoloji |
|---|---|
| Build tool | Vite 5.4 (multi-page setup) |
| Dil | Vanilla JS (React/TS YOK) |
| 3D / Animasyon | Three.js 0.160, GSAP 3.12, Lenis 1.1 (smooth scroll) |
| Hosting | Netlify (GitHub auto-deploy) |
| Versiyon kontrol | GitHub (Claude Code tarafından kuruldu) |
| Form | Netlify Forms |

**Önemli:** Site multi-page Vite yapısında. Her yeni sayfa `vite.config.js` içindeki
`build.rollupOptions.input` listesine eklenmeli.

---

## 3. MARKA & TASARIM KURALLARI (KRİTİK — DEĞİŞTİRME)

**Görsel dil:** Editorial, dark, premium, sessiz/sakin ton.

| Öğe | Değer |
|---|---|
| Arka plan | Siyah (#0a0a0a / #000) |
| Ana metin | Krem / soft beyaz (#f5f0e8 civarı) |
| **Vurgu rengi** | **Sıcak altın (#D4B896)** — italik serif vurgular için |
| İkincil metin | Soft gri |
| Başlık fontu | Serif (büyük, editorial — Garamond/Playfair benzeri) |
| Body fontu | Sans-serif (Inter benzeri) |
| Vurgu cümleleri | Serif italik + altın renk (class: `gold-italic`) |

**Ton kuralı:** Satışçı değil, manifesto dilinde. Mevcut ana sayfa sloganı:
"Yapay zeka bir araç değil, *yeni bir düzen*." Tüm içerik bu tonu korur.

**Fotoğraf kullanılmıyor** — sadece SVG illustration + tipografi (bilinçli karar,
tutarlılık için). Stok fotoğraf YOK.

**WhatsApp floating button:** Tüm sayfalarda sağ altta sabit. Link: https://wa.me/905301139021

---

## 4. İLETİŞİM BİLGİLERİ (içerik & schema için)

- **İşletme:** Dravoxai (alternatif: Dravox AI)
- **Telefon:** +90 530 113 90 21
- **Adres:** Pınar Mah. 4015. Sk., 68100 Dağılgan/Aksaray, Türkiye
- **WhatsApp:** https://wa.me/905301139021
- **Web:** https://dravoxai.com
- **Hizmet alanı:** Türkiye geneli

---

## 5. SİTE YAPISI — MEVCUT DURUM

```
dravoxai.com/
├── /                                    [✅ SEO optimize edildi]
├── /sektorler/oteller-icin-ai           [✅ yayında]
├── /sektorler/restoranlar-icin-ai       [✅ yayında]
├── /sektorler/eticaret-icin-ai          [✅ yayında — Gün 8]
├── /blog/                               [✅ blog index]
│   ├── /oteller-icin-ai-chatbot-rehberi-2026     [✅ 3200 kelime pillar]
│   └── /otel-booking-komisyonundan-kurtulma      [✅ 2200 kelime]
└── (nav: Hakkımızda | Hizmetler | Sektörler↓ | Projeler | Blog | Yaklaşım | İletişim)
```

**Mevcut hizmetler (ana sayfada):** Sesli AI Chatbot, WhatsApp Otomasyon, Çok Kanallı
Mesajlaşma Paneli, n8n Otomasyon, AI Web Tasarım, (Projeler bölümünde 6 örnek proje)

**SEO altyapısı:**
- robots.txt ✅ (public/robots.txt)
- sitemap.xml ✅ (public/sitemap.xml — 6 URL)
- Yandex doğrulama dosyası ✅ (public/yandex_dd668981a31530ed.html)
- Her sayfada: title, meta description, OG tags, canonical, JSON-LD schema
- Schema türleri: Organization, WebSite, ProfessionalService (anasayfa),
  Service + BreadcrumbList + FAQPage (sektör/blog sayfaları)

---

## 6. ÖLÇÜM & SEO ARAÇLARI (kurulu)

| Araç | Durum |
|---|---|
| Google Search Console | ✅ kurulu, doğrulanmış, GA4'e bağlı |
| Google Analytics 4 | ✅ kurulu, GSC bağlantılı |
| Google Business Profile | ✅ doğrulanmış, optimize edildi (açıklama, 7 hizmet, foto, yayın, WhatsApp link) |
| Bing Webmaster | (kurulması önerildi, durum belirsiz) |
| Yandex Webmaster | ✅ doğrulandı (Rus turist trafiği için) |

**İlk veri (3 ay, Hafta 1 sonu):** 53 gösterim, 1 tıklama, ort. konum 6.4 — yeni site
için normal başlangıç. 4 sayfa Google'da indeksli.

**Backlink/dizin kayıtları (5 adet):** LinkedIn Company, Clutch.co, Crunchbase,
Cylex Türkiye, Yandex.

---

## 7. ANAHTAR KELİME STRATEJİSİ

**Oteller sayfası hedefleri:**
- Birincil: "otel için yapay zeka", "otel chatbot", "otel ai asistan"
- İkincil: "otel rezervasyon botu", "otel whatsapp otomasyon", "konsiyerj chatbot"

**Restoran sayfası hedefleri:**
- "restoran whatsapp otomasyon", "restoran sipariş botu", "restoran rezervasyon ai"

**E-ticaret sayfası hedefleri:**
- "e-ticaret chatbot", "sipariş takip botu", "whatsapp satış otomasyonu"

**Strateji:** Pillar + cluster yapısı. Sektör sayfaları (pillar) ← blog yazıları (cluster)
linklerle besliyor. Tüm içerik Türkçe, "AI otomasyon" gibi rekabetçi genel kelimeler
yerine "[sektör] için AI" niche kelimeleri hedefliyor.

**GEO (Generative Engine Optimization):** Her sayfada FAQPage schema + alıntılanabilir
yapılandırılmış içerik (ChatGPT/Claude/Perplexity'nin "Türkiye'de otel için AI ajansı"
sorusuna Dravoxai'yi önermesi için).

---

## 8. KALAN YOL HARİTASI

### HAFTA 2 (devam ediyor)
- [✅] Gün 8 — E-ticaret sektör sayfası
- [ ] Gün 9 — 3. Blog: Restoran WhatsApp Otomasyon Rehberi (how-to)
- [ ] Gün 10 — Projeler sayfası genişletme (case study formatı)
- [ ] Gün 11 — İletişim sayfası optimize + Demo formu (Netlify Forms)
- [ ] Gün 12 — LinkedIn + Instagram içerik takvimi başlat
- [ ] Gün 13 — 4. Blog: Sesli AI nedir + n8n giriş
- [ ] Gün 14 — Haftalık rapor + Hafta 3 planı

### HAFTA 3 (taslak)
- Yedek parça sektörü sayfası (ikincil niche)
- Hakkımızda sayfası güçlendirme (E-E-A-T sinyali)
- Daha fazla blog (haftada 2)
- İç linkleme optimizasyonu
- Google Hotel Ads araştırma (oteller için)

### HAFTA 4 (taslak)
- İlk ay performans raporu (GSC + GA4 analizi)
- Düşük performanslı sayfaları optimize
- Backlink genişletme (10+ yeni dizin/partnerlik)
- Sosyal medya momentum değerlendirme

---

## 9. İÇERİK ÜRETİM ŞABLONU (sektör sayfaları için)

Her sektör sayfası şu 7 bölümden oluşur (tutarlılık için aynı yapı):
1. **Hero** — üst etiket + H1 (altın italik vurgulu) + alt başlık + 3 CTA + sosyal kanıt
2. **Manifesto** — sorun anlatımı, 2 kolon (sol büyük serif / sağ küçük), hikaye + çözüm
3. **Çözümler** — 4 kart (001-004), her biri başlık + açıklama + italik vurgu + tagler
4. **Süreç** — 3 adım (Keşif / Kurulum / Yayın), her birinde çıktı tanımı
5. **Etki** — 4 değer kartı (rakam değil kapasite ifadesi: 7/24, 5 DK, 5+ DİL, %100)
6. **SSS** — 8 soru accordion (FAQPage schema'ya da eklenir), fiyat sorusu dahil
7. **Kapanış CTA** — başlık + alt metin + 3 buton + Netlify form + footer notu

**ROI/rakam kuralı:** Henüz gerçek müşteri yok. Rakamlar "sektör ortalaması" disclaimer'ı
ile veriliyor. Sosyal kanıt cümleleri dürüst ("X sektörü için tasarlandı" — "X müşterimiz var" DEĞİL).

---

## 10. ÖNEMLİ NOTLAR / KURALLAR

1. **Çocuk güvenliği / yasal:** Stok fotoğraf kullanma (Envato filigran sorunu yaşandı).
   Sadece telifsiz SVG veya kendi üretilen görseller.
2. **Her yeni sayfa:** sitemap.xml + vite.config.js + nav güncellemesi gerektirir.
3. **Her yeni sayfa sonrası:** Google Search Console'a "Dizine ekleme talebi" gönder.
4. **Editör yaklaşımı:** Kullanıcı (Refik) hızlı ilerlemek istiyor, az ve net iletişim
   tercih ediyor. Strateji kararlarında onay al, ama detayları kendisine bırakma.
5. **Dürüstlük:** Abartılı SEO vaadi yok, sahte yorum yok, gerçekçi rakamlar.

---

## 11. ANTIGRAVITY'DE DEVAM ETME

Projeyi Antigravity'ye almak için (proje GitHub'da):
1. Antigravity'de "Open from GitHub" / "Clone repository"
2. Dravoxai repo'sunu seç (Claude Code kurmuştu)
3. `npm install` çalıştır
4. `npm run dev` ile local'de aç (localhost:5173)
5. Bu dokümanı Antigravity AI asistanına ver → kaldığı yerden devam

**Sıradaki iş:** Gün 9 — Restoran WhatsApp Otomasyon Rehberi blog yazısı.
URL önerisi: /blog/restoran-whatsapp-otomasyon-rehberi
Hedef kelimeler: "restoran whatsapp otomasyon", "restoran sipariş botu nasıl kurulur"

---

*Bu doküman Dravoxai SEO/GEO büyütme projesinin Hafta 1 + Gün 8 durumunu yansıtır.*
