# 🏭 TEMPLATES_FACTORY — Local Quick Reference & Operation Guide

Welcome to the **Commercial Template Factory**. This directory is dedicated to the high-efficiency production, licensing, customization, and multi-channel deployment of commercial web templates.

---

## 📂 Architecture Map

```
TEMPLATES_FACTORY/
├── ENGINES/                   # Master design engines (reusable, theme-agnostic)
│   ├── engine-professional/   # Authority & trust layouts (Medical, Legal, Finance)
│   ├── engine-local-business/ # High-converting SMBs (Dining, Dental, Fitness, Salon)
│   ├── engine-portfolio/      # Interactive showcases (Developer, AI Engineer, 3D)
│   ├── engine-saas/           # High-intent tech platforms (SaaS, AI Agents, Tools)
│   └── engine-creator/        # Creator hub (Influencer, Media Kit, Courses)
├── VARIATIONS/                # Niche-specific production ready templates
├── SCRIPTS/                   # Automated sanitization, deployment, and publishing tools
├── SKILL.md                   # This instruction manual
└── INDEX.md                   # Real-time tracking index for all factory products
```

---

## ⚡ The 5-Step Production Workflow

1. **Engine Selection or Customization**: Select the corresponding Master Engine for the vertical.
2. **Content & Brand Injection**: Apply industry-specific color palette, typography, hero copy, feature bento cards, and interactive widgets.
3. **License Sanitization**: Run `python3 SCRIPTS/sanitize_license.py <dir>` to verify permissive license and embed Scriptly Store attribution.
4. **Cloud Deployment & Visual Capture**:
   - Deploy to Surge: `npx surge <dir> <slug>.surge.sh`
   - Capture Retina preview screenshot to `assets/previews/<slug>-real.png`.
   - Push to GitHub to obtain live raw CDN image URL.
5. **Dual Publishing**:
   - Register on Scriptly Store via API (`scripts/publish_recent_templates_scriptly.py` or `SCRIPTS/publish_scriptly_factory.py`).
   - Publish to 21st.dev via CLI or API.
   - Update `INDEX.md` and repository root `TEMPLATES_INDEX.md`.
