# PixelCraft — Retro Pixel Art Portfolio & Blog Next.js Template

Thank you for purchasing from [Scriptly Store](https://scriptly.store/)!

PixelCraft is a premium retro 8-bit / 16-bit pixel art styled personal portfolio and blog starter theme template. Designed specifically for creative developers, pixel artists, indie game devs, and retro aesthetics lovers.

## Live Demo
Check out the live preview: [https://pixel-craft-portfolio.surge.sh/](https://pixel-craft-portfolio.surge.sh/)

---

## 🚀 Easy 1-2-3 Setup

This project is built using **Next.js** and **TailwindCSS**. Follow these simple steps to run the site locally or compile it:

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
Your site will be live at `http://localhost:3000/`.

### 4. Build & Static Export
To generate optimized static HTML pages (SSG) ready for static hosting:
```bash
npm run build
```
This command compiles the project and outputs static files to the `out/` directory.

---

## 🎨 Customization Guide

### 1. Editing Portfolio Data & Content
All main text copy, projects (works), and blog articles are managed in a single, centralized file:
* Open [lib/data.ts](file:///lib/data.ts)
* Edit the `blogPosts` object to modify blog articles.
* Edit the `works` object to update showcased projects.
* All changes will reflect instantly across all pages and route paths!

### 2. Customizing Profile & Skills
To change titles, bio copy, and skill percentages:
* Edit [components/pixel-hero.tsx](file:///components/pixel-hero.tsx) for home page introductions.
* Edit [components/about-section.tsx](file:///components/about-section.tsx) to modify skill names and percentage levels.

### 3. CRT Scanline Overlay
PixelCraft includes a stylized retro CRT monitor scanline overlay. You can enable, disable, or adjust its style in [app/globals.css](file:///app/globals.css) under the custom class layers.

---

## 🛠️ Need Help?
* Get developer support: [https://scriptly.store/support](https://scriptly.store/support)
* Discover more premium templates: [https://scriptly.store/](https://scriptly.store/)

*Brought to you by [@sh20raj](https://github.com/sh20raj).*
