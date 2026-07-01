# VORTEX — Premium Agency Landing Page Template

Thank you for purchasing from [Scriptly Store](https://scriptly.store/)!

## 🚀 Live Demo

**[View Live Demo →](https://vortex-agency.surge.sh)**

---

## What's Included

VORTEX is a premium digital agency landing page built with **Next.js 16**, **Tailwind CSS 4**, and **14 MagicUI animated components**. It features:

- ✨ **Animated Particles Background** — floating particles that react to the viewport
- 🌈 **Aurora Gradient Text** — eye-catching animated gradient headings
- ⚡ **Shimmer Buttons** — premium call-to-action buttons with shimmer effects
- 📊 **Number Tickers** — animated counters for stats section
- 🎬 **Hero Video Dialog** — click-to-play video overlay
- 🌍 **Interactive 3D Globe** — animated globe showing global reach
- ☁️ **Icon Cloud** — rotating 3D tech stack visualization
- 📜 **Marquee Scrollers** — dual-direction infinite scrolling services
- 🎨 **Bento Grid** — modern feature cards layout
- ✍️ **Text Animations** — blur-in, fade-in, and typing effects
- 🔮 **Border Beams** — animated gradient borders on hover
- 🎯 **Typing Animation** — typewriter effect for CTAs

---

## ⚡ Quick Setup (3 Steps)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Build for Production

```bash
npm run build
```

The static output will be in the `out/` folder, ready to deploy anywhere.

---

## 🎨 Customization Guide

### Change Brand Name
Edit `src/app/page.tsx` and search for `VORTEX` — replace all instances with your brand name.

### Change Colors
The gradient colors are in the component classes. Key locations:
- Brand gradient: `from-violet-500 to-blue-500` (navbar logo, avatars, buttons)
- Aurora text: Colors auto-animate — customize in `src/components/ui/aurora-text.tsx`
- Particles: Change `color="#ffffff"` in the `<Particles>` component

### Change Content
All text content is in `src/app/page.tsx`. Sections are clearly commented:
- `NAVBAR` — navigation links
- `HERO SECTION` — main headline, subtitle, CTAs
- `STATS SECTION` — numbers and labels
- `SERVICES MARQUEE` — service offerings
- `FEATURES / BENTO GRID` — feature cards
- `TECH STACK` — icon cloud images
- `ABOUT / GLOBE` — global reach section
- `TESTIMONIALS` — client quotes
- `CTA SECTION` — bottom call-to-action
- `FOOTER` — links and copyright

### Change Images
- Hero thumbnail: Update the `thumbnailSrc` URL in the HeroVideoDialog component
- Tech stack icons: Replace URLs in the `techImages` array (SVG format)

---

## 📦 Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| MagicUI Components | 14 components |
| Lucide Icons | Latest |

---

## 🌐 Deployment

This template outputs static HTML — deploy to any hosting:

- **Vercel**: `npx vercel`
- **Netlify**: Drag & drop the `out/` folder
- **Surge**: `npx surge out/ your-domain.surge.sh`
- **GitHub Pages**: Push `out/` to `gh-pages` branch
- **Cloudflare Pages**: Connect your repo, set build command to `npm run build`, output to `out/`

---

## 🆘 Need Help?

Get support at: [https://scriptly.store/support](https://scriptly.store/support)

Find more templates at: [https://scriptly.store/](https://scriptly.store/)

---

## 📄 License

This template is licensed for use in personal and commercial projects. You may not resell or redistribute the template itself.

© Scriptly Store. All rights reserved.
