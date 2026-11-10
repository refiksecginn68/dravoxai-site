import re

with open('index.html', 'rb') as f:
    raw = f.read()

html = raw.decode('utf-8')

# ─── 1. Remove photo-strip block ────────────────────────────
html = re.sub(
    r'\s*<!-- Photo Strip.*?</div>\s*(?=\s*<!-- Entegrasyon)',
    '\n\n',
    html, flags=re.DOTALL
)

# ─── 2. Remove Integration Hub section ──────────────────────
html = re.sub(
    r'\s*<!-- Entegrasyon Hub.*?</section>\s*(?=\s*<!-- Öne)',
    '\n\n',
    html, flags=re.DOTALL
)

# ─── 3. Remove Features section ─────────────────────────────
html = re.sub(
    r'\s*<!-- Öne Çıkan Özellikler.*?</section>\s*(?=\s*<!-- İletişim)',
    '\n\n',
    html, flags=re.DOTALL
)

# ─── 4. Rewrite About section ───────────────────────────────
new_about = '''      <!-- Hakkımızda · Bölüm I -->
      <section class="section about-section" id="hakkimizda" aria-labelledby="hakkimizda-heading">
        <div class="container">
          <div class="about-inner">
            <div class="about-left">
              <p class="about-eyebrow reveal-text">DRAVOX AI HAKKINDA</p>
              <h2 class="section__heading reveal-text" id="hakkimizda-heading">
                Yapay zekanın gücünü<br><em>işletmenize taşıyoruz.</em>
              </h2>
              <p class="about-desc reveal-text">Dravoxai; müşteri iletişiminden satış otomasyonuna, CRM kurulumundan içerik üretimine kadar işletmenizin ihtiyaç duyduğu her yapay zeka çözümünü tasarlar ve devreye alır. Her proje sıfırdan, size özel.</p>
              <a href="https://wa.me/905301139021?text=Merhaba%2C%20Dravox%20AI%20ile%20calisma%20hakkinda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" class="about-cta reveal-text">
                Bizimle Çalışın
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
            </div>
          </div>
        </div>
      </section>'''

html = re.sub(
    r'      <!-- Hakkımızda · Bölüm I -->.*?</section>(?=\s*[\r\n]\s*<!-- Hizmetler)',
    new_about,
    html, flags=re.DOTALL
)

# ─── 5. Update services heading ─────────────────────────────
html = html.replace(
    'Beş çözüm.<br><em>Tek bir hedef:</em><br>işinizi büyütmek.',
    'İşletmeniz için<br><em>beş temel çözüm.</em>'
)

# ─── 6. Rewrite Contact section ─────────────────────────────
new_contact = '''      <!-- İletişim · Bölüm V -->
      <section class="section contact-section" id="iletisim" aria-labelledby="iletisim-heading">
        <div class="container">
          <div class="contact-header reveal-text">
            <p class="about-eyebrow">İLETİŞİM</p>
            <h2 class="section__heading" id="iletisim-heading">Birlikte çalışalım.</h2>
            <p class="contact-sub">Projenizi anlayalım, size özel bir yol haritası sunalım.</p>
          </div>

          <div class="contact-inner">

            <!-- Sol: İletişim bilgileri -->
            <div class="contact-info reveal-text">
              <div class="contact-info__item">
                <span class="contact-info__label">E-posta</span>
                <a class="contact-info__value" href="mailto:info@dravoxai.com">info@dravoxai.com</a>
              </div>
              <div class="contact-info__divider"></div>
              <div class="contact-info__item">
                <span class="contact-info__label">Telefon</span>
                <a class="contact-info__value" href="tel:+905301139021">+90 530 113 90 21</a>
              </div>
              <div class="contact-info__divider"></div>
              <div class="contact-info__item">
                <span class="contact-info__label">Konum</span>
                <span class="contact-info__value">Aksaray, Türkiye</span>
              </div>
              <div class="contact-info__divider"></div>
              <div class="contact-info__item">
                <span class="contact-info__label">Çalışma Saatleri</span>
                <span class="contact-info__value">09:00 – 18:00</span>
              </div>
              <a class="contact-wp-btn" href="https://wa.me/905301139021" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.862L0 24l6.333-1.501A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.946 0-3.76-.523-5.316-1.432l-.38-.222-3.742.887.95-3.614-.248-.396A9.791 9.791 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                WhatsApp ile Yazın
              </a>
            </div>

            <!-- Sağ: İletişim formu -->
            <div class="contact-form-wrap reveal-text">
              <form
                class="contact-form"
                id="contact-form"
                name="homepage-contact-form"
                data-netlify="true"
                netlify-honeypot="bot-field"
                novalidate
              >
                <input type="hidden" name="form-name" value="homepage-contact-form" />
                <p class="demo-modal__honey" hidden>
                  <label>Bunu doldurmayın: <input name="bot-field" /></label>
                </p>
                <div class="cform__field">
                  <label class="cform__label" for="name">Ad Soyad</label>
                  <input class="cform__input" type="text" id="name" name="name" required autocomplete="name" placeholder="Adınız Soyadınız" />
                </div>
                <div class="cform__field">
                  <label class="cform__label" for="email">E-posta</label>
                  <input class="cform__input" type="email" id="email" name="email" required autocomplete="email" placeholder="ornek@sirket.com" />
                </div>
                <div class="cform__field">
                  <label class="cform__label" for="subject">Konu</label>
                  <select class="cform__input cform__select" id="subject" name="subject">
                    <option value="">Seçiniz</option>
                    <option value="Sesli AI Chat Botu">Sesli AI Chat Botu</option>
                    <option value="Çok Kanallı Mesajlaşma Paneli">Çok Kanallı Mesajlaşma Paneli</option>
                    <option value="Web Tasarımı">Web Tasarımı</option>
                    <option value="Otomasyon Sistemi">Otomasyon Sistemi</option>
                    <option value="CRM Altyapısı">CRM Altyapısı</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                <div class="cform__field">
                  <label class="cform__label" for="message">Mesaj</label>
                  <textarea class="cform__input cform__textarea" id="message" name="message" required rows="4" placeholder="Projenizden veya ihtiyacınızdan kısaca bahsedin..."></textarea>
                </div>
                <button class="cform__submit" type="submit">
                  <span>Mesaj Gönder</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                <p class="cform__status" id="form-status" aria-live="polite"></p>
              </form>
            </div>

          </div>
        </div>
      </section>'''

html = re.sub(
    r'      <!-- İletişim · Bölüm V -->.*?</section>(?=\s*[\r\n]\s*<!-- Footer)',
    new_contact,
    html, flags=re.DOTALL
)

with open('index.html', 'wb') as f:
    f.write(html.encode('utf-8'))

print("Done")
