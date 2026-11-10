# Web Tasarım Skill Paketi

Bu klasör, her web tasarım projesinde kullanılabilecek hazır şablon ve kütüphaneleri içerir.

---

## BÖLÜM 1 — PROJE BAŞLANGIC ŞABLONLARI

| Şablon | Teknoloji | Kullanım |
|--------|-----------|----------|
| HTML5 Boilerplate | HTML/CSS/JS | Her türlü web projesi başlangıcı |
| Next.js Landing Page | Next.js | Modern landing page |
| Astrowind | Astro + Tailwind | SEO dostu statik site |
| al-folio Portfolio | Jekyll | Akademik/kişisel portfolio |
| Open React Template | React + Tailwind | SaaS/ürün landing page |
| vCard Portfolio | Vanilla JS | Hafif kişisel portfolio |
| Next.js SaaS Stripe | Next.js + Stripe | Ücretli SaaS ürünü |
| Academic Pages | Jekyll | Akademik CV + GitHub Pages |

---

## BÖLÜM 2 — ANİMASYON & EFEKT KÜTÜPHANELERİ (npm)

| Kütüphane | npm Paketi | Amaç |
|-----------|------------|------|
| animate.css | `animate.css` | CSS animasyon sınıfları |
| Font Awesome | `@fortawesome/fontawesome-free` | İkon seti |
| anime.js | `animejs` | JS animasyon motoru |
| Swiper | `swiper` | Touch slider/carousel |
| AOS | `aos` | Scroll animasyonu |
| GSAP | `gsap` | Profesyonel animasyon |
| ScrollReveal | `scrollreveal` | Scroll reveal efekti |
| Velocity.js | `velocity-animate` | Yüksek perf. DOM animasyon |
| Typed.js | `typed.js` | Typewriter yazma efekti |
| next-seo | `next-seo` | Next.js SEO yönetimi |

---

## HIZLI KURULUM — Animasyon Paketleri (Hepsini Bir Anda)

```bash
npm install animate.css @fortawesome/fontawesome-free animejs swiper aos gsap scrollreveal velocity-animate typed.js
```

### Next.js projeleri için ekstra:
```bash
npm install next-seo
```

---

## BÖLÜM 3 — PROJE ŞABLONU KURULUM KOMUTLARI

### HTML5 Boilerplate
```bash
git clone https://github.com/h5bp/html5-boilerplate.git html5-boilerplate-design && cd html5-boilerplate-design && npm install && npm start
```

### Next.js Landing Page
```bash
git clone https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template.git nextjs-landing && cd nextjs-landing && npm install && npm run dev
```

### Astrowind
```bash
git clone https://github.com/onwidget/astrowind.git astrowind-design && cd astrowind-design && npm install && npm run dev
```

### al-folio Portfolio
```bash
git clone https://github.com/alshedivat/al-folio.git alfolio-portfolio && cd alfolio-portfolio && bundle install && bundle exec jekyll serve
```

### Open React Template
```bash
git clone https://github.com/cruip/open-react-template.git react-landing-page && cd react-landing-page && npm install && npm start
```

### vCard Portfolio
```bash
git clone https://github.com/codewithsadee/vcard-personal-portfolio.git vcard-portfolio && cd vcard-portfolio
```

### Next.js SaaS + Stripe
```bash
git clone https://github.com/mickasmt/next-saas-stripe-starter.git saas-stripe-starter && cd saas-stripe-starter && npm install && cp .env.example .env && npm run dev
```

### Academic Pages
```bash
git clone https://github.com/academicpages/academicpages.github.io.git academic-cv && cd academic-cv && bundle install && bundle exec jekyll serve
```

---

## HANGI DURUMDA HANGISI?

| İhtiyaç | Kullan |
|---------|--------|
| Yeni siteye hızlı başlangıç | HTML5 Boilerplate |
| Modern SaaS landing | Next.js Landing veya Open React Template |
| Blog + portfolio | Astrowind |
| Kişisel CV/portfolio | vCard Portfolio veya al-folio |
| Akademik site | Academic Pages |
| Ödeme sistemi olan SaaS | Next.js SaaS Stripe |
| CSS giriş animasyonları | animate.css |
| İkonlar | Font Awesome |
| Karmaşık JS animasyonu | anime.js veya GSAP |
| Slider/carousel | Swiper |
| Scroll efekti | AOS veya ScrollReveal |
| Typewriter efekti | Typed.js |
| Next.js SEO | next-seo |
