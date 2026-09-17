---
name: template-factory
description: Playbook and automation protocol for the Scriptly & 21st Commercial Template Factory. Covers cloning, MIT license sanitization, Master Engine customization, multi-cloud deployments (Surge, Netlify, Vercel), authentic Retina screenshot generation, and dual marketplace publishing.
---

# 🏭 Commercial Template Factory — Master Playbook

This skill defines the end-to-end engineering, re-licensing, deployment, and distribution standard for commercial web templates produced in the `TEMPLATES_FACTORY/` directory.

---

## ⚡ 1. The Master Engine Strategy

Rather than building dozens of standalone web projects from scratch, the factory relies on **5 Reusable Master Engines**:

```
TEMPLATES_FACTORY/ENGINES/
├── engine-professional/      → Medical, Legal, Financial Advisory, Consulting, Architecture
├── engine-local-business/    → Restaurants, Bistros, Dental Clinics, Gyms, Salons, Spas, Trades
├── engine-portfolio/         → Developer Pro, AI Engineer, 3D Designer, Photographer, Artist
├── engine-saas/              → B2B SaaS, AI Agent Platforms, Developer Tooling, Dashboards
└── engine-creator/           → Influencers, Content Creators, Link-in-Bio, Media Kits
```

### Core Engine Principles:
1. **Zero Runtime Dependencies for Buyers**: Pure HTML5, modern CSS3 / Tailwind, and lightweight vanilla JS / GSAP whenever possible. Buyers can double-click `index.html` or run `npx serve` and it runs instantly.
2. **Modular Components**: Each engine contains interchangeable sections (Hero, Bento Grid, Pricing Matrix, Appointment/Reservation Modal, Interactive Sandbox/Calculator, Testimonials, FAQ Accordion, Footer).
3. **Variable-Driven Branding**: CSS variables (`:root`) govern colors, fonts, borders, and shadows so variations can be styled in minutes.

---

## ⚖️ 2. License Compliance & Code Sanitization Protocol

When adapting or incorporating permissive open-source codebases (MIT, Apache 2.0, BSD):

1. **Permissive Only**: Only use repositories licensed under MIT, Apache-2.0, BSD-2/3, ISC, or Unlicense. Never use GPL, AGPL, or proprietary assets.
2. **License Sanitization**:
   - Retain the original copyright notice in a comment or in `LEGAL_NOTICES.txt` as required by MIT/Apache.
   - Attach the commercial `LICENSE` grant allowing purchasers single or unlimited commercial deployment.
   - Run `python3 TEMPLATES_FACTORY/SCRIPTS/sanitize_license.py <dir>` to scrub original GitHub repository links, author personal emails, tracking cookies, and proprietary analytics (Google Analytics, Sentry, Facebook Pixel).
3. **Scriptly Backlinks & Badges**:
   - Embed a sleek, non-intrusive backlink or footer badge:
     ```html
     <a href="https://scriptly.store" target="_blank" rel="noopener" class="scriptly-badge">
       Powered by Scriptly Store
     </a>
     ```
   - In documentation, include direct links to Scriptly Store for more templates and developer tools.

---

## 🎨 3. Target Catalog & Standard Pricing Matrix

| Category | Vertical | Slug | Target Price |
|---|---|---|---|
| **Portfolio** | Developer Portfolio Pro | `developer-portfolio-pro` | $29.00 |
| **Portfolio** | AI Engineer Portfolio | `ai-engineer-portfolio` | $39.00 |
| **Portfolio** | Influencer / Creator Hub | `influencer-creator-hub` | $39.00 |
| **Agency** | Creative Agency | `creative-agency-studio` | $39.00 |
| **Agency** | AI Agency | `ai-agency-platform` | $39.00 |
| **Professional** | Doctor & Medical Practice | `doctor-medical-practice` | $39.00 |
| **Professional** | Specialist Surgeon Practice | `surgeon-specialist-clinic` | $49.00 |
| **Professional** | Law Firm & Partners | `law-firm-partners` | $39.00 |
| **Professional** | CA & Wealth Advisory | `ca-accounting-advisory` | $39.00 |
| **Local Business** | Dental Clinic & Smiles | `dental-clinic-care` | $49.00 |
| **Local Business** | Restaurant & Fine Dining | `restaurant-fine-dining` | $49.00 |
| **Local Business** | Artisan Café & Bistro | `artisan-cafe-bistro` | $29.00 |
| **Local Business** | Fitness Forge & Gym | `gym-fitness-forge` | $29.00 |
| **Local Business** | Luxury Salon & Spa | `luxury-salon-spa` | $39.00 |
| **SaaS** | Modern SaaS Landing | `saas-landing-template` | $39.00 |
| **SaaS** | AI SaaS & Neural Workflow | `ai-saas-workflow` | $49.00 |
| **SaaS** | Autonomous AI Agent Platform | `ai-agent-platform` | $59.00 |
| **SaaS** | SaaS Analytics Dashboard | `saas-analytics-dashboard` | $59.00 |

---

## 🚀 4. Multi-Cloud Deployment Standards

Every template **MUST** have an active, high-availability public demo with 100% SSL:

### Primary: Surge CLI (`.surge.sh`)
```bash
npx surge <template_directory> <slug>.surge.sh
```
- Verify: `curl -s -o /dev/null -w "%{http_code}" https://<slug>.surge.sh` (Must return `200`).

### Secondary: Netlify / Vercel CLI
```bash
# Netlify
netlify deploy --prod --dir=<template_directory> --site=<site_id>

# Vercel
cd <template_directory> && vercel deploy --prod --yes
```

---

## 📸 5. Authentic Visual Capture Standard

> [!IMPORTANT]
> **Zero Unsplash Stock Photos for Primary Thumbnails.**
> Every published listing must use authentic Retina screenshots or GIFs captured directly from the running deployment.

1. **Retina Screenshot Capture**:
   - Capture desktop viewport (1440x900 or 1280x800) at 2x pixel ratio.
   - Save to `assets/previews/<slug>-real.png`.
2. **CDN Distribution**:
   - Commit and push to GitHub repository:
     `https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/<slug>-real.png`
   - Verify HTTP 200 before publishing to marketplaces.

---

## 📦 6. Packaging & Distribution Protocol

1. **Deliverable ZIP Archive**:
   - Target path: `ZIP/<slug>.zip`
   - Content: Clean project source, assets, and comprehensive buyer `README.md`.
   - Exclude: `node_modules/`, `.git/`, `.DS_Store`, build artifacts (`.next/`, `dist/`).
2. **Store Listing Documentation**:
   - Target path: `STORE_LISTING/<Category>/<slug>.md`
   - Contains: Product name, SEO tags, bulleted key features, live demo link, and support info.

---

## 🛒 7. Marketplace Publishing Pipeline

### A. Scriptly Store (Agent API)
Endpoint: `POST https://scriptly.store/api/agent/products`
Header: `Authorization: Bearer sa_key_f28a9b3d5c6e8f0a1c7d2e4b`
Payload fields: `title`, `slug`, `shortDescription`, `description`, `category`, `subcategory`, `price`, `tags`, `demoUrl`, `fileUrl`, `thumbnail`, `screenshots`, `published: true`.

### B. 21st.dev Marketplace
CLI / REST API:
```bash
21st publish-template "<Title>" \
  --site "<demoUrl>" \
  --preview "<thumbnailUrl>" \
  --price "<priceInUSD>" \
  --buy-url "https://scriptly.store/products/<slug>" \
  --description "<salesDescription>"
```
Or via REST API: `POST https://21st.dev/api/v1/templates/publish`.

---

## 📑 8. Catalog Synchronization Protocol

Whenever ANY product is created, modified, or published:
1. Update `TEMPLATES_FACTORY/INDEX.md`.
2. Update repository root [`TEMPLATES_INDEX.md`](file:///Users/shaswatraj/Desktop/earn/scriptly-codes/TEMPLATES_INDEX.md).
3. Execute `git add . && git commit -m "..." && git push origin main`.
