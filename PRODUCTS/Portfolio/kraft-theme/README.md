# 🎨 KRAFT | Premium 3D Hand-Drawn Portfolio Theme

Thank you for purchasing **KRAFT** from [Scriptly Store](https://scriptly.store/)! 

KRAFT is a state-of-the-art, immersive 3D developer portfolio template built with **React 19, Three.js, React Three Fiber (R3F), and GSAP**. It features an interactive, scroll-triggered hand-drawn paper corridor with unique rooms (About, Studio, Contact, Gallery) showcasing a premium design experience.

- **Live Demo:** [https://kraft-portfolio-theme.surge.sh](https://kraft-portfolio-theme.surge.sh)
- **Get Support:** [https://scriptly.store/support](https://scriptly.store/support)
- **More Templates:** [https://scriptly.store/](https://scriptly.store/)

---

## 🚀 Features & Optimization
1. **Interactive 3D Corridor:** Fully scroll-triggered 3D scene using GSAP and React Three Fiber.
2. **Invisible Semantic SEO Fallback:** Standard search engines indexing is fully supported via ARIA-compliant shadow DOM indexing.
3. **Pre-compiled Asynchronous Shaders:** Leverages `gl.compileAsync` during the preloader phase to ensure 60fps animations.
4. **Adaptive Resolution Tiering:** Auto-detects device hardware, concurrency, and screen size to scale rendering dynamically.

---

## 🛠️ Easy 1-2-3 Setup Guide

To run this application locally on your machine:

### 1. Extract the Project
Unzip the downloaded package and navigate to the project directory in your terminal:
```bash
cd kraft-theme
```

### 2. Install Dependencies
Make sure you have Node.js (v20 or higher) installed, then run:
```bash
npm install
```

### 3. Run Local Server
Start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## ⚙️ Customization Guide

### 1. Changing Text and Personal Info
- **Main SEO Fallbacks & Meta Tags:** Edit `index.html` to customize titles, metadata description, and initial fallback tags.
- **Corridor Hero Text (Main Entry):** Modify `src/components/canvas/corridor/HeroText.jsx`. Under `letters`, change the letters array characters.
- **Intro Section (About Room):** Open `src/components/canvas/rooms/About/InfiniteSkyManager.jsx` and customize the `ALEXANDER STERLING` and `(KRAFT)` text meshes.
- **Social links:** Edit `src/components/canvas/rooms/Contact/ContactRoom.jsx` to update URL links for GitHub, LinkedIn, Instagram, and Facebook barrel clicks.

### 2. Modifying Studio Monitor Tower (YouTube, Blog, TikTok)
- Open `src/components/canvas/rooms/Studio/contentData.js` to change titles, descriptions, dates, views, and destination URLs for items displayed in the monitor stack.

### 3. Adding Your Projects
- Open `src/components/canvas/rooms/Gallery/GalleryRoom.jsx` (or the respective component) to configure details for cards displayed in the gallery.

---

## 📦 Production Build
To bundle the project for hosting:
```bash
npm run build
```
This compiles optimized production code into the `dist/` folder, complete with compressed WebP textures.

Need help customizing your product? Reach out to us at [https://scriptly.store/support](https://scriptly.store/support)!
