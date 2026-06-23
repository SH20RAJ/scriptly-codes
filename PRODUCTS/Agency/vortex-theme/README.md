# Vortex — Premium Creative Agency & Production Studio HTML Template

Thank you for purchasing from [Scriptly Store](https://scriptly.store/)!

Vortex is a premium, immersive HTML/Astro template designed for high-end creative agencies, design collectives, and immersive production studios. It features smooth page transitions powered by **Barba.js** and **GSAP**, including custom WebGL noise dissolve shaders, SVG morphs, draw path triggers, and slide reveals.

## Live Demo
Check out the live preview: [https://vortex-agency-theme.surge.sh/](https://vortex-agency-theme.surge.sh/)

---

## 🚀 Easy 1-2-3 Setup

This project is built using **Astro**, the modern static site builder. Follow these simple steps to run the site locally or build it for production:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.0 or higher is recommended).

### 2. Installation
Open your terminal inside the project directory and run:
```bash
npm install
```

### 3. Local Development Server
Start the local server to preview changes in real-time:
```bash
npm run dev
```
Your site will be live at `http://localhost:4321/`.

### 4. Build for Production
To generate a static version of the site ready for hosting:
```bash
npm run build
```
This creates a `dist/` directory containing optimized HTML, CSS, JS, and asset files.

---

## 🎨 Customization Guide

### 1. Changing Brand Colors
All luxury theme colors are stored as CSS variables inside [src/styles/app.css](file:///src/styles/app.css). Open the file and adjust:
* `--color-accent` (default is `#c2a05d` champagne gold) to match your brand's highlight color.
* Page background variables (`--about-background`, `--works-background`, etc.) to custom tones. The WebGL shader automatically reads these variables to sync the page transition colors.

### 2. Updating Typography
Vortex uses **Outfit** for headlines and **Plus Jakarta Sans** for body copy loaded from Google Fonts in [src/layouts/Layout.astro](file:///src/layouts/Layout.astro). You can update the links in the layout file to load any other Google Font and change the `font-family` references in `app.css`.

### 3. Editing Text & Content
You can edit the content for each page inside the `src/pages/` folder:
* `index.astro` (Home page title and hero copy)
* `about.astro` (Profile, capabilities list, philosophy)
* `works.astro` (Showcase commissions grid)
* `team.astro` (Crew listings and roles)
* `archive.astro` (Awards grid)
* `contact.astro` (Connect links and geographic coordinates)

---

## 🛠️ Need Help?
* Get dedicated developer support: [https://scriptly.store/support](https://scriptly.store/support)
* Discover more premium templates: [https://scriptly.store/](https://scriptly.store/)

*Brought to you by [@sh20raj](https://github.com/sh20raj).*
