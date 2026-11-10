import re

# ── 1. INDEX.HTML — video section ekle ──────────────────────────
with open('index.html', 'rb') as f:
    html = f.read().decode('utf-8')

vid_html = '''
    <!-- ── Video Section ─────────────────────────────────────── -->
    <section class="vid-section" id="vid-section" aria-label="Dravox AI Tanıtım">
      <div class="vid-section__inner">
        <video class="vid-section__video" autoplay muted loop playsinline poster="/images/hero.png">
          <source src="/images/hero arka plan.mp4" type="video/mp4" />
        </video>
        <div class="vid-section__overlay" aria-hidden="true"></div>
        <div class="vid-section__content">
          <p class="vid-section__label">DRAVOX AI</p>
          <h2 class="vid-section__h2">
            İşletmenizin<br><em>yapay zeka gücü.</em>
          </h2>
          <p class="vid-section__sub">
            Tekrarlayan süreçler otomatikleşsin, müşterilerinize 7/24 hizmet verilsin.
          </p>
          <a href="https://wa.me/905301139021" target="_blank" rel="noopener noreferrer" class="vid-btn vid-btn--primary">Ücretsiz Demo Al</a>
        </div>
      </div>
    </section>

'''

html = html.replace(
    '\n    <!-- ── Page Stack',
    vid_html + '    <!-- ── Page Stack'
)

with open('index.html', 'wb') as f:
    f.write(html.encode('utf-8'))

print("HTML done")
