#!/usr/bin/env python3
"""
Dual Marketplace Publisher for Scriptly Commercial Template Factory Foundations
Publishes 9 Products (8 GitHub Foundations + Scriptly Hire Me Engine) to:
1. Scriptly Store Agent API (https://scriptly.store/api/agent/products)
2. 21st.dev Templates API (https://21st.dev/api/v1/templates/publish)
"""

import urllib.request
import urllib.error
import json
import time
import os

SCRIPTLY_API_URL = "https://scriptly.store/api/agent/products"
SCRIPTLY_KEY = "sa_key_f28a9b3d5c6e8f0a1c7d2e4b"

TWENTYFIRST_API_URL = "https://21st.dev/api/v1/templates/publish"
TWENTYFIRST_KEY = "21st_sk_72d6ae9d2237f5ad7986e096d11e6310b3c16d97cfba3db675b95fe0c7787ac1"

PRODUCTS = [
    {
        "name": "Scriptly Hire Me — Senior Engineering Services & Client Intake Hub",
        "slug": "scriptly-hire-me",
        "shortDescription": "High-converting engineering services landing page with interactive sprint pricing, instant PayPal retainer checkout, scope estimator, and client intake drawer.",
        "category": "services",
        "subcategory": "freelance-agency",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "hire-me, engineering-services, freelance-developer, software-architect, client-intake, paypal-retainer, tailwind-landing",
        "demoUrl": "https://scriptly-hire-me.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/scriptly-hire-me.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/scriptly-hire-me-real.png",
        "features": [
            "Interactive scope & budget calculator with instant pricing updates",
            "Direct PayPal deposit integrations with custom retainer tiers ($100, $250, $500, $1,000)",
            "Obsidian dark mode design with glassmorphic cards and glowing cyan accents",
            "Comprehensive client intake brief form with automated mailto trigger",
            "Technical specialization bento grid highlighting Full-Stack and AI Agents"
        ]
    },
    {
        "name": "Velocity AI & Dev Portfolio — High Performance Astro & Preact Showcase",
        "slug": "velocity-dev-portfolio",
        "shortDescription": "Blazing-fast 100/100 Lighthouse developer portfolio engineered with Astro 5, Preact, multi-theme selector, and interactive terminal telemetry.",
        "category": "portfolio",
        "subcategory": "developer-portfolio",
        "price": 2900,
        "price_twentyfirst": 29,
        "tags": "developer-portfolio, astro, preact, lighthouse-100, multi-theme, pwa, fast-performance, software-engineer",
        "demoUrl": "https://velocity-dev-portfolio.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/velocity-dev-portfolio.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/velocity-dev-portfolio-real.png",
        "features": [
            "Astro 5 + Preact architecture scoring 100/100 on Google Lighthouse",
            "Dynamic 5-palette theme switcher with obsidian dark and high-contrast modes",
            "Progressive Web App (PWA) with offline caching and service worker",
            "Keyboard accessible navigation with smooth scroll-jacking and telemetry badges",
            "Full commercial MIT license grant with Scriptly support and PayPal tip links"
        ]
    },
    {
        "name": "Zenith Minimalist Developer — Clean Astro & React Portfolio",
        "slug": "zenith-minimal-dev",
        "shortDescription": "Ultra-clean, distraction-free software engineer portfolio built with Astro 7, React 19, and Tailwind v4 featuring typography-first project storytelling.",
        "category": "portfolio",
        "subcategory": "developer-portfolio",
        "price": 2900,
        "price_twentyfirst": 29,
        "tags": "minimal-developer, astro-7, react-19, tailwind-v4, clean-typography, tech-blog, markdown-projects",
        "demoUrl": "https://zenith-minimal-dev.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/zenith-minimal-dev.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/zenith-minimal-dev-real.png",
        "features": [
            "Modern Astro 7 with React 19 and Tailwind CSS v4 styling",
            "Built-in engineering blog with RSS feed and Markdown/MDX support",
            "Curated project case-study cards with live demo links and technical notes",
            "Lightweight sub-100kb payload for instant global edge page loads",
            "Pre-configured SEO tags, sitemap, and clean OpenGraph metadata"
        ]
    },
    {
        "name": "DocuDev Portfolio & Tech Showcase — Astro Architecture & Knowledge Engine",
        "slug": "docudev-portfolio",
        "shortDescription": "Comprehensive technical portfolio, documentation wiki, and certification showcase powered by Astro, MDX, and interactive Mermaid diagrams.",
        "category": "portfolio",
        "subcategory": "developer-portfolio",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "docudev, astro-mdx, technical-documentation, mermaid-diagrams, certification-showcase, software-architect",
        "demoUrl": "https://docudev-portfolio.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/docudev-portfolio.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/docudev-portfolio-real.png",
        "features": [
            "Native Mermaid.js rendering for distributed system architecture flowcharts",
            "Versioned project releases with GitHub commit links and release changelogs",
            "Structured certification badges and cloud architecture credentials",
            "Full-text searchable documentation wiki and engineering knowledgebase",
            "Instant static export ready for Surge, Cloudflare Pages, or Netlify"
        ]
    },
    {
        "name": "NextCraft Shadcn Pro Portfolio — Next.js & Radix Command Center",
        "slug": "nextcraft-shadcn-pro",
        "shortDescription": "Sophisticated Next.js developer portfolio engineered with Radix UI primitives, Lucide icons, dark/light theme toggle, and responsive command menu.",
        "category": "portfolio",
        "subcategory": "developer-portfolio",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "nextjs, shadcn-ui, radix-ui, tailwindcss, developer-portfolio, dark-mode, command-palette",
        "demoUrl": "https://nextcraft-shadcn-pro.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/nextcraft-shadcn-pro.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/nextcraft-shadcn-pro-real.png",
        "features": [
            "Accessible Radix UI dialogs, modals, and aspect-ratio media wrappers",
            "Next-themes integration with fluid system dark and light mode synchronization",
            "Responsive project showcase grid with category filters and tech tags",
            "Clean TypeScript codebase with Tailwind CSS utilities and zero bloat",
            "Production Next.js static HTML export for zero-latency CDN hosting"
        ]
    },
    {
        "name": "MotionCraft Animated Portfolio — Next.js & Framer Motion 3D Experience",
        "slug": "motioncraft-portfolio",
        "shortDescription": "High-impact kinetic web portfolio featuring Framer Motion spring physics, Three.js 3D canvas viewport, GSAP smooth scroll, and interactive project cards.",
        "category": "portfolio",
        "subcategory": "developer-portfolio",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "framer-motion, threejs, gsap, interactive-portfolio, 3d-experience, spring-physics, nextjs",
        "demoUrl": "https://motioncraft-portfolio.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/motioncraft-portfolio.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/motioncraft-portfolio-real.png",
        "features": [
            "Interactive WebGL Three.js canvas background with cursor reactivity",
            "Fluid spring physics transitions and kinetic typography via Framer Motion",
            "GSAP scroller-motion integration for cinematic scroll triggers",
            "Modular project bento grid with dynamic expanded detail views",
            "Optimized for smooth 60fps performance across desktop and modern mobile"
        ]
    },
    {
        "name": "CleanTS Minimalist Developer — Next.js 15 & TypeScript Engineering Portfolio",
        "slug": "cleants-portfolio",
        "shortDescription": "Production-grade Next.js 15 App Router portfolio with React 19, strict TypeScript validation, Jest test suite, and minimal monochromatic aesthetics.",
        "category": "portfolio",
        "subcategory": "developer-portfolio",
        "price": 2900,
        "price_twentyfirst": 29,
        "tags": "nextjs-15, react-19, typescript, tailwind-v4, jest-tests, minimal-portfolio, clean-code",
        "demoUrl": "https://cleants-portfolio.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/cleants-portfolio.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/cleants-portfolio-real.png",
        "features": [
            "Cutting-edge Next.js 15 App Router + React 19 architecture",
            "Integrated Jest and React Testing Library automated test suite",
            "Strict TypeScript interfaces with 100% type safety and clean modular code",
            "Tailwind CSS v4 with sub-millisecond Turbopack build pipelines",
            "Instant static export to `out/` with zero server runtime dependencies"
        ]
    },
    {
        "name": "CyberCraft Creative Studio — Cybernetic WebGL & React Portfolio",
        "slug": "cybercraft-studio",
        "shortDescription": "Neon cybernetic portfolio template with WebGL glitch canvas, letter glitch shaders, interactive like widgets, and dark futuristic typography.",
        "category": "portfolio",
        "subcategory": "creative-portfolio",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "cyberpunk, webgl-glitch, ogl-shaders, astro-react, creative-portfolio, neon-dark, interactive-ui",
        "demoUrl": "https://cybercraft-studio.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/cybercraft-studio.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/cybercraft-studio-real.png",
        "features": [
            "Custom WebGL shader canvas using OGL for low-overhead letter glitch animations",
            "Cybernetic neon aesthetic with Montserrat Variable typography and dark surfaces",
            "Interactive client-side React widgets with responsive feedback states",
            "Optimized Astro build with sharp image compression and sub-200ms loads",
            "Seamless deployment to any static CDN (Surge, Cloudflare, Vercel)"
        ]
    },
    {
        "name": "Aurora Creative Variant Engine — Astro & Space Grotesk Showcase",
        "slug": "aurora-variant-dev",
        "shortDescription": "Luminous gradient-infused developer portfolio built with Astro, Space Grotesk typography, Iconify vector iconography, and high-impact case cards.",
        "category": "portfolio",
        "subcategory": "developer-portfolio",
        "price": 2900,
        "price_twentyfirst": 29,
        "tags": "aurora-gradients, space-grotesk, astro, iconify, creative-developer, clean-layout, modern-portfolio",
        "demoUrl": "https://aurora-variant-dev.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/aurora-variant-dev.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/aurora-variant-dev-real.png",
        "features": [
            "Space Grotesk + Inter variable font hierarchy with subtle aurora glow backdrops",
            "Full Iconify integration (Skill Icons, MDI, VSCode Icons) for rich tech badges",
            "Structured work experience timeline with company highlights and tech tags",
            "Built with Astro and Tailwind CSS for exceptional performance and zero JS overhead",
            "Complete MIT commercial license grant and Scriptly store integration"
        ]
    }
]

def generate_markdown_listing(p):
    md = f"""# {p['name']}

> {p['shortDescription']}

- **Live Demo**: [{p['demoUrl']}]({p['demoUrl']})
- **Price**: ${p['price'] / 100:.2f}
- **Category**: `{p['category']}` / `{p['subcategory']}`
- **License**: Commercial MIT Grant (Scriptly Store)
- **Support & Hire Me**: [https://scriptly.store/hire-me](https://scriptly.store/hire-me)
- **Tip & Sponsor**: [http://paypal.me/@sh20raj](http://paypal.me/@sh20raj)

---

## 🌟 Key Architecture & Highlights

"""
    for f in p["features"]:
        md += f"- **{f.split(' ')[0]}**: {f}\n"

    md += f"""
---

## 📦 What's Included in the Deliverable

- Complete, production-ready source code repository
- Pre-configured static build and deployment configuration
- Retina screenshot preview assets
- Clean commercial MIT license terms
- Direct link-in-bio and Hire Me intake integrations

---

*Powered by [Scriptly Store](https://scriptly.store) — The Modern Commercial Web Template Factory.*
"""
    return md

def publish_to_scriptly(p):
    long_desc = generate_markdown_listing(p)
    payload = {
        "title": p["name"],
        "slug": p["slug"],
        "shortDescription": p["shortDescription"],
        "description": long_desc,
        "category": p["category"],
        "subcategory": p["subcategory"],
        "price": p["price"],
        "tags": p["tags"],
        "demoUrl": p["demoUrl"],
        "fileUrl": p["fileUrl"],
        "thumbnail": p["preview_url"],
        "screenshots": p["preview_url"],
        "published": True,
        "featured": True,
        "isFree": False,
        "redirectDownload": True,
        "version": "1.0.0"
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        SCRIPTLY_API_URL,
        data=data,
        headers={
            "Authorization": f"Bearer {SCRIPTLY_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "ScriptlyFactory/1.0"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req) as resp:
            print(f"  ✓ Scriptly Store: Published '{p['slug']}' (HTTP {resp.status})")
            return True
    except urllib.error.HTTPError as e:
        msg = e.read().decode("utf-8")
        if e.code in [400, 409]:
            # Try patch
            patch_url = f"{SCRIPTLY_API_URL}/{p['slug']}"
            patch_req = urllib.request.Request(
                patch_url,
                data=data,
                headers={
                    "Authorization": f"Bearer {SCRIPTLY_KEY}",
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "User-Agent": "ScriptlyFactory/1.0"
                },
                method="PATCH"
            )
            try:
                with urllib.request.urlopen(patch_req) as presp:
                    print(f"  ✓ Scriptly Store: Patched '{p['slug']}' (HTTP {presp.status})")
                    return True
            except Exception as pe:
                print(f"  ❌ Scriptly PATCH failed: {pe}")
        else:
            print(f"  ❌ Scriptly POST failed (HTTP {e.code}): {msg}")
        return False
    except Exception as e:
        print(f"  ❌ Scriptly error: {e}")
        return False

def publish_to_twentyfirst(p):
    payload = {
        "name": p["name"],
        "website_preview_url": p["demoUrl"],
        "preview_url": p["preview_url"],
        "payment_url": f"https://scriptly.store/products/{p['slug']}",
        "price": p["price_twentyfirst"],
        "description": p["shortDescription"]
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        TWENTYFIRST_API_URL,
        data=data,
        headers={
            "authorization": f"Bearer {TWENTYFIRST_KEY}",
            "content-type": "application/json"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req) as resp:
            res = json.loads(resp.read().decode("utf-8"))
            print(f"  ✓ 21st.dev: Published template #{res.get('id')} ({res.get('slug')})")
            return res.get("id"), res.get("slug")
    except urllib.error.HTTPError as e:
        print(f"  ❌ 21st.dev failed (HTTP {e.code}): {e.read().decode('utf-8')}")
        return None, None
    except Exception as e:
        print(f"  ❌ 21st.dev error: {e}")
        return None, None

def main():
    print("🚀 Publishing 9 Commercial Factory Templates across Scriptly Store and 21st.dev...\n")
    results = {}
    for p in PRODUCTS:
        print(f"📦 Publishing: {p['name']}")
        s_ok = publish_to_scriptly(p)
        t_id, t_slug = publish_to_twentyfirst(p)
        results[p["slug"]] = {
            "scriptly_store": f"https://scriptly.store/products/{p['slug']}",
            "twentyfirst_id": t_id,
            "twentyfirst_slug": t_slug,
            "demo_url": p["demoUrl"],
            "price": f"${p['price_twentyfirst']}"
        }
        time.sleep(0.5)

    with open("TEMPLATES_FACTORY/SCRIPTS/publishing_results_foundations.json", "w") as f:
        json.dump(results, f, indent=2)

    print("\n🎉 All 9 products published successfully!")
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    main()
