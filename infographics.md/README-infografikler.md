# dravokai.com — İnfografik SVG'leri Aktarım Kılavuzu

6 adet bağımsız, ölçeklenebilir, Türkçe SVG infografik. dravokai sitesinin "Hizmetler", "Öne Çıkan Özellikler" ve "Detaylı Raporlama" bölümleri için tasarlandı.

## 📁 Klasör yapısı

```
infografikler.html                  ← Galeri/önizleme sayfası
infographics/
  01-omnichannel.svg                ← Tümleşik İletişim Paneli
  02-whatsapp-pazarlama.svg         ← Toplu Mesajlaşma & Kişiselleştirme
  03-ekip-yonetimi.svg              ← Operatör Atama & Yetki
  04-crm-raporlar.svg               ← CRM & Performans Raporları
  05-eticaret.svg                   ← E-Ticaret & Pazaryeri Entegrasyonu
  06-ai-bot.svg                     ← Yapay Zeka Bot (ANIMASYONLU)
```

Her SVG **720 × 520** koordinat sisteminde; her boyuta yeniden ölçeklenebilir. Kendi içinde fontları Google Fonts'tan (Inter, JetBrains Mono) çağırmak yerine sistem fontuna düşer — sayfanda zaten Inter yüklüyse otomatik kullanır.

---

## 🚀 Antigravity'ye 3 farklı yolla verebilirsin

### Yol A — Tüm klasörü ver (önerilen) ⭐

1. Sol panelden tüm projeyi zip olarak indir.
2. Antigravity'ye şu prompt'u yapıştır:

> ```
> Bu zip içindeki infographics/ klasöründeki 6 SVG dosyasını 
> dravokai sitesinin Hizmetler ve Öne Çıkan Özellikler 
> bölümlerine yerleştir. Her infografiği aşağıdaki eşleme 
> tablosuna göre ilgili bölüme ekle, yanına Türkçe başlık 
> ve 1-2 cümlelik açıklama yaz. SVG'leri public/img/ altına 
> kopyala, kullanım <img src="…"> olsun.
> 
> EŞLEME:
> 01-omnichannel.svg       → Tümleşik İletişim Stratejisi
> 02-whatsapp-pazarlama.svg → WhatsApp Pazarlama
> 03-ekip-yonetimi.svg     → Ekip Çalışması
> 04-crm-raporlar.svg      → Detaylı Raporlama / CRM
> 05-eticaret.svg          → E-Ticaret Entegrasyonu
> 06-ai-bot.svg            → Öne Çıkan / AI Bot (animasyonlu)
> ```

### Yol B — Tek tek dosya ver

Sadece bir bölümü güncellemek istersen, ilgili `.svg` dosyasını projende aç (galeri sayfasında **↓ SVG indir** linki var) ve Antigravity'ye yapıştır:

> "Bu SVG'yi sitemin **WhatsApp Pazarlama** bölümüne 
> mevcut görselin yerine koy. Aynı oran ve hizalama 
> kullansın."

### Yol C — Sadece kod parçası ver

SVG dosyalarının içeriğini `<svg>...</svg>` etiketiyle direkt React/Vue bileşenine de gömebilirsin. Avantajı: tek HTTP request, animasyon kontrolü daha kolay.

---

## 💡 HTML kullanım örnekleri

### Statik (01-05 numaralı SVG'ler için)

```html
<img src="/img/01-omnichannel.svg" 
     alt="Tümleşik İletişim Paneli — WhatsApp, Instagram, Messenger, Telegram"
     loading="lazy"
     width="720" height="520"
     style="max-width:100%; height:auto;">
```

### Animasyonlu (06 — AI Bot için)

`<img>` etiketinde animasyonların çalışması tarayıcıya göre değişebilir. Garantili çalışması için `<object>` ya da inline `<svg>` kullan:

```html
<!-- En garantili: inline SVG -->
<div class="ai-bot-illo">
  <!-- 06-ai-bot.svg içeriğini buraya yapıştır -->
</div>

<!-- Alternatif: object -->
<object data="/img/06-ai-bot.svg" type="image/svg+xml" aria-label="Yapay Zeka Bot"></object>
```

### Responsive konteyner

```html
<figure style="aspect-ratio: 720/520; max-width: 720px;">
  <img src="/img/01-omnichannel.svg" alt="..." 
       style="width:100%; height:100%; object-fit:contain;">
  <figcaption>Tek panelden, dört kanal.</figcaption>
</figure>
```

---

## 🎨 Renk paleti (siteye eşlemek istersen)

| Token | Hex | Kullanım |
|---|---|---|
| `--blue` | `#2752E8` | Primary — başlıklar, ana panel |
| `--purple` | `#7E4FFF` | Secondary — etiket pill'leri, eylemler |
| `--green` | `#22C55E` | Success — onay, aktif |
| `--bg` | `#F4F7FF` | Açık mavi arkaplan |
| `--card` | `#FFFFFF` | Kart yüzeyi |
| `--text` | `#1F2937` | Ana metin |
| `--text-soft` | `#6B7280` | Yumuşak metin |
| `--line` | `#EEF2FA` | Hafif ayırıcı |

Bu paleti CSS değişkenleri olarak ekleyip SVG dolgularını da `currentColor` ile yönlendirirsen tema uyumlu hale gelir.

---

## ✏️ İçeriği düzenlemek istersen

SVG'ler standart XML — her `.svg` dosyasını VS Code / Antigravity ile aç, içindeki `<text>` etiketlerini değiştir. Örnek:

```xml
<text x="56" y="184" font-size="18" font-weight="700" fill="#2752E8">15 dakika</text>
```

Sayısı, fontu, rengi değiştirebilirsin. Layout değişikliği için koordinatlarla oynama; en doğrusu Antigravity'e şunu demek:

> "04-crm-raporlar.svg dosyasındaki '15 Dakika' rakamını 
> '8 Dakika' yap, kanal performansındaki WhatsApp yüzdesini 
> %92 yap."

---

## 🔍 Önizleme

Bu projeyi açtığında `infografikler.html` sayfasında 6 SVG'yi de yan yana, indirme linkleriyle görebilirsin.
