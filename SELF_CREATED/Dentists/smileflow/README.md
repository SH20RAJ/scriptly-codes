# 🦷 SmileFlow — Premium Next.js 16 Dental Practice Template

SmileFlow is an elite, conversion-optimized website template designed specifically for modern dental clinics, cosmetic dentists, orthodontists, and dental specialists. Built with cutting-edge web technologies, it features a luxury medical-spa aesthetic with smooth animations, high-resolution custom assets, interactive tools, and production-ready local SEO optimizations.

🚀 **Perfect for selling as a premium SaaS template, client delivery, or a modern agency starter kit.**

---

## ✨ Premium Features

*   **🎨 Luxury Medical-Spa Design**: Pristine light-theme layout with a modern, clean palette. Curated typography using **Plus Jakarta Sans** for headlines and **Inter** for clean clinical readability.
*   **📱 Interactive Bento Grid Services**: Highlights key treatments (Implants, Invisalign, Root Canals, etc.) with custom background graphics, smooth zoom transitions, and color gradient overlays.
*   **🧮 Smile Cost Calculator**: A live pricing estimator where patients can select procedures, adjust the number of teeth with a slider, and see estimated monthly financing (0% EMI) in real-time.
*   **↔️ Before & After Transformation Slider**: An interactive comparison comparison component, allowing potential patients to drag and see clinical transformation results (whitening/alignment).
*   **⚡ Next-Gen Tech Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, and lightweight UI primitives from Shadcn & Magic UI.
*   **📈 Built-In Local SEO & Schema**: Features pre-configured **JSON-LD Structured Data** (Dentist/LocalBusiness schema) directly in `layout.tsx` to help clinics instantly rank on Google Maps and search results.
*   **📋 Multi-Page Pages Ready**: Dedicated SEO-optimized pages for:
    *   `Services` (`/services`) - Advanced clinical procedural cards.
    *   `Smile Transformations` (`/transformations`) - Before/After comparison galleries.
    *   `Pricing & Insurance` (`/pricing`) - Live calculator tool and financing details.
    *   `About the Practice` (`/about`) - Practitioner bio and modern tech overview.
    *   `Contact & Bookings` (`/contact`) - Fully styled booking/consultation coordinator forms.

---

## 🛠️ Technology Stack

*   **Framework**: Next.js 16 (App Router)
*   **Runtime**: Bun (optimized for speed)
*   **Styling**: Tailwind CSS v4 (inline themes and CSS variable bindings)
*   **Animations**: Framer Motion & Motion (smooth parallax & entrance transitions)
*   **Components**: Shadcn UI (Accordion, Inputs, Badges, etc.) + Magic UI (Particles, Border Beam, Marquee, Shimmer Button)

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have [Bun](https://bun.sh) installed.

### 1. Install Dependencies
```bash
bun install
```

### 2. Run the Development Server
```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production
To test production compilation:
```bash
bun run build
```

---

## ⚙️ Customization Guide

### 1. Contact & Location Information
Update the structured SEO data and footer information inside `src/app/layout.tsx` (JSON-LD block) and `src/components/blocks/smileflow-sections.tsx`.

### 2. Pricing & Financing Options
Adjust the price ranges, interest calculations, or insurance providers in `src/app/pricing/page.tsx` and the `CostCalculator` component inside `src/components/blocks/smileflow-sections.tsx`.

### 3. Background Images & Assets
To replace clinic images, headshots, or bento backgrounds, simply place your `.png` or `.svg` files into the `public/` directory:
*   Dental Implants: `public/bg_implants.png`
*   Teeth Whitening: `public/bg_whitening.png`
*   Invisalign: `public/bg_invisalign.png`
*   Root Canal: `public/bg_rootcanal.png`
*   Cosmetic Surgery: `public/bg_cosmetic.png`
*   Emergency Care: `public/bg_emergency.png`

---

## ☁️ Deployment

### Cloudflare Pages (OpenNext)
SmileFlow is fully configured for Cloudflare Workers/Pages deployment using `@opennextjs/cloudflare`.

To compile and deploy to your Cloudflare account:
```bash
bun run deploy
```

---

## 📄 License
This product is commercially ready for developer resale, client deployment, or personal template usage. Modify and brand it to fit your agency requirements!
