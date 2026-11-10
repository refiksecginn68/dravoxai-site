const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const insertAfter = '    <div class="page-stack">\n';
const insertIdx = html.indexOf(insertAfter);
if (insertIdx === -1) { console.log('marker not found'); process.exit(1); }

const newSections = `
      <!-- Hakkımızda · Bölüm I -->
      <section class="section about-section" id="hakkimizda" aria-labelledby="hakkimizda-heading">
        <div class="container">
          <div class="about-inner">
            <div class="about-left">
              <p class="section__label reveal-text">Hakkımızda</p>
              <h2 class="section__heading reveal-text" id="hakkimizda-heading">
                Türkiye'nin<br><em>AI otomasyon</em><br>stüdyosu.
              </h2>
              <p class="about-desc reveal-text">Dravox AI, işletmelerin tekrar eden süreçlerini otomatikleştirerek ekiplerini gerçek değer yaratan işlere odaklamalarını sağlar. Müşteri hizmetlerinden satış otomasyonuna, CRM entegrasyonundan çok kanallı iletişime kadar — her çözüm size özel tasarlanır.</p>
              <a href="https://wa.me/905301139021?text=Merhaba%2C%20Dravox%20AI%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" class="about-cta reveal-text">
                Ücretsiz Danışmanlık Al
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div class="about-right">
              <div class="about-stats">
                <div class="about-stat reveal-text">
                  <span class="about-stat__num" data-count="50" data-suffix="+">0+</span>
                  <span class="about-stat__label">Tamamlanan Proje</span>
                </div>
                <div class="about-stat reveal-text">
                  <span class="about-stat__num" data-count="72" data-suffix="%">0%</span>
                  <span class="about-stat__label">Daha Hızlı Yanıt</span>
                </div>
                <div class="about-stat reveal-text">
                  <span class="about-stat__num" data-count="24" data-suffix="/7">0/7</span>
                  <span class="about-stat__label">Otonom Çalışma</span>
                </div>
                <div class="about-stat reveal-text">
                  <span class="about-stat__num" data-count="6" data-suffix="">0</span>
                  <span class="about-stat__label">Entegrasyon Kanalı</span>
                </div>
              </div>
              <div class="about-badge reveal-text">
                <span class="status-dot"></span>
                Şu an aktif proje kabul ediyoruz
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hizmetler Slider · Bölüm II -->
      <section class="section svc-section" id="hizmetler" aria-labelledby="hizmetler-heading">
        <div class="container">
          <p class="section__label reveal-text">Hizmetler</p>
          <h2 class="section__heading reveal-text" id="hizmetler-heading">
            Beş çözüm.<br><em>Tek bir hedef:</em><br>işinizi büyütmek.
          </h2>
          <div class="svc-slider-wrap">
            <div class="svc-slider" id="svcSlider">

              <div class="svc-card" id="hizmet-sesli">
                <span class="svc-card__num">001</span>
                <div class="svc-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
                </div>
                <h3 class="svc-card__title">Sesli AI Chat Botları</h3>
                <p class="svc-card__desc">7/24 konuşan, öğrenen ve dönüştüren yapay zeka asistanları. Müşteriyle doğal diyalog, gerçek zamanlı yanıt, çok dilli destek.</p>
                <a href="https://wa.me/905301139021?text=Sesli%20AI%20Chat%20Botu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" class="svc-card__cta">Bilgi Al <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>

              <div class="svc-card" id="hizmet-panel">
                <span class="svc-card__num">002</span>
                <div class="svc-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h3 class="svc-card__title">Çok Kanallı Mesajlaşma Paneli</h3>
                <p class="svc-card__desc">WhatsApp, Instagram, Messenger, Telegram, TikTok DM ve e-postanızı tek ekrandan yönetin. 0 kaçan mesaj, 3× daha fazla dönüşüm.</p>
                <a href="https://wa.me/905301139021?text=%C3%87ok%20Kanal%C4%B1%20Panel%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" class="svc-card__cta">Bilgi Al <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>

              <div class="svc-card" id="hizmet-web">
                <span class="svc-card__num">003</span>
                <div class="svc-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                </div>
                <h3 class="svc-card__title">Kusursuz Web Tasarımı</h3>
                <p class="svc-card__desc">Dönüşüm odaklı, hızlı ve modern kurumsal web siteleri. Markanızın dijital yüzü — sıfırdan, özelleştirilmiş.</p>
                <a href="https://wa.me/905301139021?text=Web%20Tasar%C4%B1m%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" class="svc-card__cta">Bilgi Al <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>

              <div class="svc-card" id="hizmet-otomasyon">
                <span class="svc-card__num">004</span>
                <div class="svc-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
                </div>
                <h3 class="svc-card__title">Akıllı Otomasyon Sistemleri</h3>
                <p class="svc-card__desc">Tekrarlayan süreçleri otomatikleştirin, zaman ve emek tasarrufu sağlayın. Workflow, RPA ve API entegrasyonları.</p>
                <a href="https://wa.me/905301139021?text=Otomasyon%20Sistemi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" class="svc-card__cta">Bilgi Al <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>

              <div class="svc-card" id="hizmet-crm">
                <span class="svc-card__num">005</span>
                <div class="svc-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </div>
                <h3 class="svc-card__title">Kapsamlı CRM Altyapıları</h3>
                <p class="svc-card__desc">Müşteri verilerini kazanca dönüştürün. Özel CRM kurulumu, entegrasyonu ve otomasyon sistemi ile tüm müşteri geçmişi tek sistemde.</p>
                <a href="https://wa.me/905301139021?text=CRM%20Altyap%C4%B1s%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" class="svc-card__cta">Bilgi Al <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>

            </div>
            <div class="svc-dots" id="svcDots" aria-label="Slider Gezinme">
              <button class="svc-dot svc-dot--active" data-index="0" aria-label="Hizmet 1"></button>
              <button class="svc-dot" data-index="1" aria-label="Hizmet 2"></button>
              <button class="svc-dot" data-index="2" aria-label="Hizmet 3"></button>
              <button class="svc-dot" data-index="3" aria-label="Hizmet 4"></button>
              <button class="svc-dot" data-index="4" aria-label="Hizmet 5"></button>
            </div>
          </div>
        </div>
      </section>

`;

const insertEnd = insertIdx + insertAfter.length;
html = html.slice(0, insertEnd) + newSections + html.slice(insertEnd);
fs.writeFileSync('index.html', html, 'utf8');
console.log('inserted hakkimizda + hizmetler slider at offset', insertEnd);
