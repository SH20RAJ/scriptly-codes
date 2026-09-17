#!/usr/bin/env python3
"""
Factory Pipeline for Ingesting, Branding, Deploying, Screenshotted, Packaging,
and Dual-Publishing Wave 3 Foundations from GUIDE_DATA.md onto:
1. Scriptly Store Agent API (https://scriptly.store/api/agent/products)
2. 21st.dev Templates API (https://21st.dev/api/v1/templates/publish)
"""

import os
import re
import json
import time
import subprocess
import os
from pathlib import Path
import urllib.request
import urllib.error

def get_env_var(name, fallback=""):
    val = os.environ.get(name)
    if val:
        return val
    env_path = Path(__file__).resolve().parents[2] / ".env"
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            line = line.strip()
            if line.startswith(f"{name}="):
                return line.split("=", 1)[1].strip()
    return fallback

SCRIPTLY_API_URL = os.environ.get("SCRIPTLY_API_URL", "https://scriptly.store/api/agent/products")
SCRIPTLY_KEY = get_env_var("SCRIPTLY_API_KEY") or get_env_var("AGENT_API_KEY")

TWENTYFIRST_API_URL = os.environ.get("TWENTYFIRST_API_URL", "https://21st.dev/api/v1/templates/publish")
TWENTYFIRST_KEY = get_env_var("TWENTYFIRST_API_KEY") or get_env_var("API_KEY_21ST")

PRODUCTS = [
    {
        "slug": "shadcn-saas-landing",
        "name": "QuickLaunch AI & SaaS Landing — Modern Next.js & Shadcn UI Template",
        "dir": "TEMPLATES_FACTORY/REPOS/shadcn-saas-landing",
        "dist": "TEMPLATES_FACTORY/REPOS/shadcn-saas-landing/out",
        "domain": "shadcn-saas-landing.surge.sh",
        "category": "saas",
        "subcategory": "ai-saas",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "saas-landing, nextjs-14, shadcn-ui, tailwindcss, dark-mode, pricing-table, waitlist, bento-grid",
        "shortDescription": "High-converting modern SaaS marketing landing page engineered with Next.js 14, shadcn/ui, monthly/annual pricing switcher, bento feature grid, and newsletter capture.",
        "features": [
            "High-converting SaaS landing page built with Next.js 14 and shadcn/ui",
            "Monthly & annual pricing switcher with animated gradient highlights",
            "Interactive bento feature grid, testimonial carousel, and FAQ accordion",
            "Clean TypeScript architecture with zero external database dependencies",
            "Commercial MIT license with Scriptly hire-me retainer integration"
        ]
    },
    {
        "slug": "shadcn-admin-suite",
        "name": "Shadcn Admin Suite — Enterprise React & TanStack Dashboard Console",
        "dir": "TEMPLATES_FACTORY/REPOS/shadcn-admin-suite",
        "dist": "TEMPLATES_FACTORY/REPOS/shadcn-admin-suite/dist",
        "domain": "shadcn-admin-suite.surge.sh",
        "category": "dashboard",
        "subcategory": "admin-dashboard",
        "price": 4900,
        "price_twentyfirst": 49,
        "tags": "admin-dashboard, shadcn-ui, react-18, vite, tanstack-table, cmdk-palette, auth-flows, dark-mode",
        "shortDescription": "Production enterprise administration dashboard engineered with Vite, React 18, shadcn/ui, responsive sidebar, TanStack data tables, and cmdk command palette.",
        "features": [
            "Production enterprise admin console built with Vite, React 18, and shadcn/ui",
            "Collapsible responsive sidebar, breadcrumb rail, and cmdk command palette",
            "Advanced TanStack data tables with multi-column sorting and filter drawers",
            "Ready-to-use authentication views (Sign-in, 2FA, Reset Password, 404/500)",
            "Instant sub-second client-side navigation with preloaded route caching"
        ]
    },
    {
        "slug": "magicui-devcraft-portfolio",
        "name": "DevCraft Pro — Senior Software Engineer Magic UI Portfolio",
        "dir": "TEMPLATES_FACTORY/REPOS/magicui-devcraft-portfolio",
        "dist": "TEMPLATES_FACTORY/REPOS/magicui-devcraft-portfolio/out",
        "domain": "magicui-devcraft-portfolio.surge.sh",
        "category": "portfolio",
        "subcategory": "developer-portfolio",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "developer-portfolio, magic-ui, nextjs-16, react-19, mdx-blog, tailwind-v4, motion",
        "shortDescription": "Polished senior software engineer portfolio powered by Next.js 16, Magic UI, and React 19. Driven by a single JSON data structure with BlurFade animations and MDX blog.",
        "features": [
            "Driven by unified resume.tsx JSON data file for instant 5-minute customization",
            "Staggered BlurFade entrance animations and interactive dock navigation",
            "Built-in MDX technical blog with full syntax highlighting",
            "Interactive project cards with live demo buttons and GitHub telemetry badges",
            "Optimized for sub-100ms global static edge delivery"
        ]
    },
    {
        "slug": "medpulse-clinic-pro",
        "name": "MedPulse Pro — Healthcare Clinic & Physician Practice Template",
        "dir": "TEMPLATES_FACTORY/REPOS/medpulse-clinic-pro",
        "dist": "TEMPLATES_FACTORY/REPOS/medpulse-clinic-pro/out",
        "domain": "medpulse-clinic-pro.surge.sh",
        "category": "professional",
        "subcategory": "medical-clinic",
        "price": 4900,
        "price_twentyfirst": 49,
        "tags": "medical-template, clinic-website, doctor-portfolio, healthcare, appointment-booking, hospital, nextjs",
        "shortDescription": "Comprehensive healthcare practice and multi-specialty clinic website built with Next.js featuring physician rosters, appointment booking drawer, and department showcases.",
        "features": [
            "Tailored healthcare practice template with physician directories and credentials",
            "Interactive appointment scheduling drawer and department overview cards",
            "Patient testimonials, opening hours widget, and emergency hotline bar",
            "Type-safe Next.js architecture with responsive mobile-first navigation",
            "Commercial MIT license with Scriptly custom development retainer grant"
        ]
    },
    {
        "slug": "smilecraft-dental-clinic",
        "name": "SmileCraft Dental — Cosmetic Dentistry & Oral Care Portal",
        "dir": "TEMPLATES_FACTORY/REPOS/smilecraft-dental-clinic",
        "dist": "TEMPLATES_FACTORY/REPOS/smilecraft-dental-clinic/out",
        "domain": "smilecraft-dental-clinic.surge.sh",
        "category": "local-business",
        "subcategory": "dental-clinic",
        "price": 4900,
        "price_twentyfirst": 49,
        "tags": "dental-clinic, dentist-website, cosmetic-dentistry, oral-care, patient-booking, appointment-form, nextjs",
        "shortDescription": "Modern dental clinic and orthodontics website template engineered with Next.js, featuring patient booking intake, dental services catalog, and insurance breakdown.",
        "features": [
            "Dedicated dental practice layout with service tiers and insurance accepted",
            "Interactive patient treatment showcases and appointment request modal",
            "Doctor credential profiles and dental hygiene advice accordion",
            "High-converting calls to action optimized for local search ranking",
            "Commercial MIT distribution rights and PayPal retainer links"
        ]
    },
    {
        "slug": "bistrot-moderne-dining",
        "name": "Bistrot Moderne — Fine Dining Restaurant & Culinary Showcase",
        "dir": "TEMPLATES_FACTORY/REPOS/bistrot-moderne-dining",
        "dist": "TEMPLATES_FACTORY/REPOS/bistrot-moderne-dining/dist",
        "domain": "bistrot-moderne-dining.surge.sh",
        "category": "restaurant",
        "subcategory": "fine-dining",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "restaurant-website, fine-dining, bistro-menu, table-reservation, chef-showcase, food-hospitality, vite-react",
        "shortDescription": "Atmospheric culinary hospitality template crafted with React 18, Vite, and Tailwind CSS. Features multi-course menu tabs, table reservation drawer, and chef showcase.",
        "features": [
            "Atmospheric culinary layout built with React 18, Vite, and Tailwind CSS",
            "Categorized menu tabs with pricing, dietary badges, and wine pairings",
            "Table reservation modal with date/time pickers and party size selector",
            "Executive chef showcase and customer critique highlights",
            "Blazing-fast sub-second client build and zero runtime dependencies"
        ]
    },
    {
        "slug": "lexjuris-agency-pro",
        "name": "LexJuris Agency Pro — Corporate Legal & Advisory Firm Theme",
        "dir": "TEMPLATES_FACTORY/REPOS/lexjuris-agency-pro",
        "dist": "TEMPLATES_FACTORY/REPOS/lexjuris-agency-pro/dist",
        "domain": "lexjuris-agency-pro.surge.sh",
        "category": "professional",
        "subcategory": "legal-agency",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "corporate-agency, law-firm, legal-practice, consulting, attorney-portfolio, case-evaluation, bootstrap-5",
        "shortDescription": "Prestigious corporate business, law firm, and advisory practice theme. Includes practice area overviews, attorney partner profiles, historical timeline, and inquiry forms.",
        "features": [
            "Clean corporate layout covering practice areas, attorney credentials, and case wins",
            "Vertical company milestones timeline and interactive case study modals",
            "Confidential consultation request intake form with validation",
            "Lightweight zero-framework vanilla architecture for universal hosting",
            "Includes Scriptly commercial grant and custom retained advisory links"
        ]
    },
    {
        "slug": "astropaper-tech-blog",
        "name": "AstroPaper Tech Blog — Ultra-Fast 100/100 Lighthouse Markdown Engine",
        "dir": "TEMPLATES_FACTORY/REPOS/astropaper-tech-blog",
        "dist": "TEMPLATES_FACTORY/REPOS/astropaper-tech-blog/dist",
        "domain": "astropaper-tech-blog.surge.sh",
        "category": "portfolio",
        "subcategory": "tech-blog",
        "price": 2900,
        "price_twentyfirst": 29,
        "tags": "astropaper, astro-blog, markdown-blog, lighthouse-100, pagefind-search, tailwind-v4, tech-publication",
        "shortDescription": "Blazing-fast Markdown engineering blog built with Astro 7 and Tailwind CSS. Scores 100/100 on Google Lighthouse, featuring Pagefind fuzzy search and theme switching.",
        "features": [
            "Ultra-performant Astro architecture achieving perfect 100/100 Lighthouse scores",
            "Client-side full-text fuzzy search powered by Pagefind",
            "Multi-palette theme switcher with obsidian dark and high-contrast modes",
            "Automated RSS feed, sitemap generation, and schema.org article metadata",
            "Zero client-side JavaScript overhead on article content pages"
        ]
    }
]

def generate_markdown_listing(p):
    md = f"""# {p['name']}

> {p['shortDescription']}

- **Live Demo**: [https://{p['domain']}](https://{p['domain']})
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
- Authentic Retina screenshot preview assets
- Clean commercial MIT license terms with Scriptly distribution grant
- Direct link-in-bio and Hire Me client intake integrations

---

*Powered by [Scriptly Store](https://scriptly.store) — The Modern Commercial Web Template Factory.*
"""
    return md

def publish_to_scriptly(p):
    slug = p["slug"]
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
        "demoUrl": f"https://{p['domain']}",
        "fileUrl": f"https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/{p['slug']}.zip",
        "thumbnail": f"https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/{p['slug']}-real.png",
        "screenshots": f"https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/{p['slug']}-real.png",
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
        with urllib.request.urlopen(req, timeout=15) as resp:
            print(f"  ✓ Scriptly Store: Published '{slug}' (HTTP {resp.status})")
            return {"success": True, "action": "created", "status": resp.status}
    except urllib.error.HTTPError as e:
        msg = e.read().decode("utf-8")
        if e.code in [400, 409]:
            # Try PATCH if already exists
            patch_url = f"{SCRIPTLY_API_URL}/{slug}"
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
                with urllib.request.urlopen(patch_req, timeout=15) as presp:
                    print(f"  ✓ Scriptly Store: Patched '{slug}' (HTTP {presp.status})")
                    return {"success": True, "action": "patched", "status": presp.status}
            except Exception as pe:
                print(f"  ❌ Scriptly PATCH failed: {pe}")
                return {"success": False, "error": str(pe)}
        else:
            print(f"  ❌ Scriptly POST failed (HTTP {e.code}): {msg}")
            return {"success": False, "error": f"HTTP {e.code}: {msg}"}
    except Exception as e:
        print(f"  ❌ Scriptly error: {e}")
        return {"success": False, "error": str(e)}

def publish_to_twentyfirst(p):
    slug = p["slug"]
    payload = {
        "name": p["name"],
        "website_preview_url": f"https://{p['domain']}",
        "preview_url": f"https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/{p['slug']}-real.png",
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
            "content-type": "application/json",
            "User-Agent": "ScriptlyFactory/1.0"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            res = json.loads(resp.read().decode("utf-8"))
            tmpl_id = res.get("id") or res.get("template", {}).get("id")
            tmpl_slug = res.get("slug") or res.get("template", {}).get("slug") or slug
            print(f"  ✓ 21st.dev: Published template #{tmpl_id} ({tmpl_slug})")
            return {"success": True, "id": tmpl_id, "slug": tmpl_slug, "url": f"https://21st.dev/community/templates/{tmpl_slug}"}
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8")
        print(f"  ❌ 21st.dev failed (HTTP {e.code}): {err_body}")
        return {"success": False, "error": f"HTTP {e.code}: {err_body}"}
    except Exception as e:
        print(f"  ❌ 21st.dev error: {e}")
        return {"success": False, "error": str(e)}

def main():
    print("🏭 Scriptly Commercial Template Factory — Publishing Wave 3 to Scriptly & 21st.dev\n")
    results = []

    for p in PRODUCTS:
        print(f"\n📦 Target: {p['name']} ({p['slug']})")
        sc_res = publish_to_scriptly(p)
        time.sleep(1)
        tf_res = publish_to_twentyfirst(p)
        time.sleep(2)
        
        results.append({
            "slug": p["slug"],
            "name": p["name"],
            "domain": p["domain"],
            "price": p["price_twentyfirst"],
            "scriptly": sc_res,
            "twentyfirst": tf_res
        })

    with open("TEMPLATES_FACTORY/SCRIPTS/publishing_results_wave3.json", "w") as f:
        json.dump(results, f, indent=2)
    print("\n🎉 Wave 3 publishing completed! Saved to TEMPLATES_FACTORY/SCRIPTS/publishing_results_wave3.json")

if __name__ == "__main__":
    main()
