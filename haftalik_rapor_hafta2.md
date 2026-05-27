# Dravoxai — Hafta 2 Değerlendirme Raporu & Hafta 3 Yol Haritası

Bu rapor, Dravoxai.com web sitesinin SEO/GEO büyütme projesi kapsamında Hafta 2 boyunca gerçekleştirilen tüm çalışmaları, güncellenen teknik altyapıyı ve Hafta 3 için önerilen yol haritasını içerir.

---

## 📊 1. HAFTA 2: NELER TAMAMLANDI?

Hafta 2, Dravoxai'nin kurumsal ve sektörel dikeyde (niche) derinleşmesini ve form/iletişim altyapısının profesyonelleştirilmesini hedeflemiştir. Planlanan tüm adımlar başarıyla tamamlanmıştır:

* **Gün 8 — E-ticaret Sektör Sayfası (`/sektorler/eticaret-icin-ai`):**
  - E-ticaret markaları için yapay zeka asistanları, WhatsApp satış otomasyonu ve sepet terk kurtarma sistemlerini tanıtan premium sayfa yayına alındı.
  - Sektör özelinde JSON-LD şemaları (Service, BreadcrumbList, FAQPage) kurgulandı.
* **Gün 9 — 3. Blog: Restoran WhatsApp Otomasyon Rehberi (`/blog/restoran-whatsapp-otomasyon-rehberi`):**
  - Yoğun saatlerde kaçan siparişleri kurtarmayı hedefleyen ~2200 kelimelik uygulamalı rehber eklendi.
  - POS ve mutfak ekranı entegrasyon süreçleri işlendi.
* **Gün 10 — Projeler Sayfası Genişletme (`/projeler`):**
  - Dravoxai'nin sunduğu çözümleri somutlaştıran 6 adet detaylı vaka çalışması (Case Study) tek sayfada toplandı.
  - Dravoxai editoryal dark konseptine (altın, füme ve buzlu cam dokuları) özel üretilen **6 adet özgün 3D soyut görsel** sayfaya entegre edildi.
* **Gün 11 — İletişim Sayfası & Netlify Forms Geçişi (`/iletisim`):**
  - Adres, telefon, e-posta ve çalışma saatlerini barındıran bağımsız bir iletişim sayfası kuruldu.
  - Sayfaya özel, merkez ofisi (Aksaray, Türkiye) vurgulayan minimalist bir Türkiye SVG koordinat haritası çizildi.
  - Sitedeki tüm formlar (Anasayfa, Projeler, İletişim) Formspree'den **Netlify Forms (Ajax)** altyapısına geçirildi.
* **Gün 12 — LinkedIn & Instagram İçerik Takvimi (`sosyal_medya_takvimi.md`):**
  - Dravoxai marka kimliği ve manifesto diliyle uyumlu, otel, restoran ve e-ticaret dikeylerini hedefleyen 2 haftalık (6 post) hazır içerik kopyaları ve görsel direktifleri oluşturuldu.
* **Gün 13 — 4. Blog: Sesli Yapay Zeka & n8n Entegrasyonu (`/blog/sesli-ai-nedir-n8n-giris`):**
  - Sesli yapay zekanın (VAPI/Retell AI) çalışma mekanizmasını ve n8n ile CRM sistemlerine veri aktarımını açıklayan rehber yayına alındı.

---

## ⚙️ 2. TEKNİK ALTYAPI VE LİNK BÜTÜNLÜĞÜ

Hafta 2'deki yapısal değişimler (sayfa içi linklerden bağımsız rotalara geçiş), tüm site genelinde taranarak güncellenmiştir:

1. **Navigasyon Linkleri:** Sitedeki tüm alt sayfalarda yer alan menülerdeki `/#iletisim` çapa linkleri bağımsız `/iletisim` sayfasına; `/#calisma` linkleri ise `/projeler` sayfasına yönlendirildi.
2. **Sitemap Güncellemesi:** [sitemap.xml](file:///c:/Users/User/Downloads/antigravity/public/sitemap.xml) dosyası yeni eklenen 4 rota (`/sektorler/eticaret-icin-ai`, `/projeler`, `/iletisim`, `/blog/sesli-ai-nedir-n8n-giris` ve `/blog/restoran-whatsapp-otomasyon-rehberi`) ile güncellendi.
3. **Vite Yapılandırması:** [vite.config.js](file:///c:/Users/User/Downloads/antigravity/vite.config.js) rollup girdi listesine yeni sayfalar eklenerek sorunsuz şekilde build edilmesi sağlandı. Yerel üretim derlemesi (`npm run build`) sıfır hata ile **4.75 saniyede** tamamlandı.

---

## 🗺️ 3. HAFTA 3 YOL HARİTASI (ÖNERİLER)

Projenin SEO/GEO gücünü ve kurumsal güvenilirliğini (E-E-A-T) artırmak amacıyla Hafta 3 için önerilen öncelikli adımlar şunlardır:

### 1. Yeni Sektör Sayfası: Yedek Parça & Otomotiv için AI (`/sektorler/yedek-parca-icin-ai`)
- Türkiye'deki sanayi ve imalat KOBİ'lerinin en büyük sorunlarından biri olan "yedek parça eşleştirme, katalog sorgulama ve teklif hazırlama" süreçlerini otonomlaştıran AI çözümleri sayfası.
- **Hedef:** Sanayi siteleri ve distribütörlerden B2B potansiyel müşteri çekmek.

### 2. Otorite ve Güven Sinyalleri: Hakkımızda Sayfası (`/hakkimizda`)
- Arama motorlarının (Google & Yandex) E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) yönergelerine uygun olarak Dravoxai'nin arkasındaki vizyonu, dürüstlük prensiplerini ve Aksaray/Türkiye merkezli yerel ama global standartlardaki ajans kimliğini anlatan bağımsız bir sayfa açmak.

### 3. İçerik Büyümesi (Haftada 2 Yeni Blog)
- **5. Blog Makalesi:** "n8n ile WhatsApp ve CRM Lead Entegrasyonu Nasıl Yapılır?" (Uygulamalı teknik rehber).
- **6. Blog Makalesi:** "Otellerde PMS (Property Management System) Entegrasyonlu Chatbotların Rezervasyona Etkisi." (Turizm dikeyinde otorite artırıcı içerik).

### 4. GEO (Generative Engine Optimization) Çalışmaları
- Eklenen tüm yeni sayfaların ve blog yazılarının Google Search Console ve Yandex Webmaster üzerinden dizine eklenme taleplerinin tetiklenmesi.
- Bing Webmaster Tools kurulumunun tamamlanarak Microsoft Copilot (Bing Chat) GEO görünürlüğünün sağlanması.

### 5. İç Linkleme (Internal Linking) Revizyonu
- Blog yazıları ile ilgili sektör sayfaları ve projeler arasında akıllı iç link ağları örerek SEO otorite dağılımını (Link Juice) optimize etmek.
