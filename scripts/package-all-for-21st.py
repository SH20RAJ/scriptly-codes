#!/usr/bin/env python3
"""
Master Packaging Suite for 21st.dev Migration & Submission
Compliant with David's strict requirements:
  - No .env files, secrets, or API keys
  - No node_modules
  - No .git or git metadata (.gitignore, .gitattributes)
  - No build output (dist, out, .next, build, .turbo, .cache)
  - Clear setup instructions in README.md for every template
  - Archive under 25MB check (or note for Google Drive/Dropbox if >25MB)
"""

import os
import zipfile
import json

WORKSPACE_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
ZIP_DIR = os.path.join(WORKSPACE_ROOT, "ZIP")
os.makedirs(ZIP_DIR, exist_ok=True)

EXCLUDE_DIRS = {
    ".git", ".github", ".vscode", "node_modules", ".next", 
    "out", "dist", "build", ".turbo", ".cache", "__pycache__",
    "backups"
}

EXCLUDE_FILES = {
    ".DS_Store", "Thumbs.db", ".gitignore", ".gitattributes", 
    ".npmrc", ".yarnrc", "STORE_LISTING.md"
}

PRODUCTS_CATALOG = [
    # --- Commercial Web & Mobile Templates ---
    {
        "id": "vortex-agency-magicui",
        "name": "VORTEX — Animated Agency Landing Page",
        "type": "template",
        "category": "Agency",
        "source_dir": "PRODUCTS/Agency/magicui-agency",
        "archive_root": "vortex-agency-magicui",
        "zip_file": "vortex-agency-magicui.zip",
        "price": "$29.00",
        "product_page": "https://scriptly.store/products/vortex-agency-magicui",
        "demo_url": "https://vortex-agency.surge.sh",
        "cover_image": "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/r2t4eb1ac03zwpcwsk5z.png",
        "tech_stack": "Next.js 16, Tailwind CSS 4, shadcn/ui, MagicUI"
    },
    {
        "id": "aura-ai-template",
        "name": "AURA — Premium AI SaaS Landing Page",
        "type": "template",
        "category": "SaaS / AI",
        "source_dir": "PRODUCTS/Agency/aura-theme",
        "archive_root": "aura-ai-template",
        "zip_file": "aura-ai-template.zip",
        "price": "$49.00",
        "product_page": "https://scriptly.store/products/aura-ai-template",
        "demo_url": "https://aura-ai-template.surge.sh",
        "cover_image": "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@a6a4f912f0928cd4a7468fe55f539eed6f61db41/aura-screenshot-f2af123aaf190589.png",
        "tech_stack": "HTML5, Tailwind CSS, Dark Mode, High-Conversion SaaS Bento"
    },
    {
        "id": "lumiere-theme",
        "name": "LUMIÈRE — Elite Digital Agency HTML Theme",
        "type": "template",
        "category": "Agency",
        "source_dir": "PRODUCTS/Agency/lumiere-theme",
        "archive_root": "lumiere-theme",
        "zip_file": "lumiere-theme.zip",
        "price": "$39.00",
        "product_page": "https://scriptly.store/products/lumiere-elite-digital-agency-html-theme",
        "demo_url": "https://lumiere-theme-scriptly.surge.sh",
        "cover_image": "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@08ca470aff1a4db6db672cf53545b9264d445fe9/Screenshot_2026-06-22_at_11.10.53_AM-fd2c74f48e70e3ac.png",
        "tech_stack": "HTML5, CSS Grid, GSAP, Editorial Typography"
    },
    {
        "id": "kraft-theme",
        "name": "KRAFT — Premium 3D Hand-Drawn Portfolio Theme",
        "type": "template",
        "category": "Portfolio / 3D",
        "source_dir": "PRODUCTS/Portfolio/kraft-theme",
        "archive_root": "kraft-theme",
        "zip_file": "kraft-theme.zip",
        "price": "$29.00",
        "product_page": "https://scriptly.store/products/kraft-premium-3d-hand-drawn-portfolio-theme",
        "demo_url": "https://kraft-portfolio-theme.surge.sh",
        "cover_image": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/PRODUCTS/Portfolio/kraft-theme/public/thumbnail.png",
        "tech_stack": "Three.js, WebGL, Hand-Drawn Paper Textures, Physics Audio"
    },
    {
        "id": "grille-theme",
        "name": "GRILLÉ — Fine Dining & Luxury Restaurant",
        "type": "template",
        "category": "Restaurant",
        "source_dir": "PRODUCTS/Restaurant/grille-theme",
        "archive_root": "grille-theme",
        "zip_file": "grille-theme.zip",
        "price": "$39.00",
        "product_page": "https://scriptly.store/products/grille-restaurant-theme",
        "demo_url": "https://grille-restaurant-theme.surge.sh/",
        "cover_image": "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@1c814a43b4a148ffab01a64df446e132419949a1/grille-thumbnail-9659c7da5fb1cdb0.png",
        "tech_stack": "HTML5, CSS3, Parallax JS, Interactive Booking Form"
    },
    {
        "id": "pixel-craft-theme",
        "name": "PIXELCRAFT — Retro Pixel Art Portfolio",
        "type": "template",
        "category": "Portfolio / Gaming",
        "source_dir": "PRODUCTS/Portfolio/pixel-craft-theme",
        "archive_root": "pixel-craft-theme",
        "zip_file": "pixel-craft-theme.zip",
        "price": "$39.00",
        "product_page": "https://scriptly.store/products/pixel-craft-theme",
        "demo_url": "https://pixel-craft-portfolio.surge.sh/",
        "cover_image": "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@6cdafcff3c3edb59696d7c38104e5ef764de03b0/pixel-craft-thumbnail-52d45625eaeaff77.png",
        "tech_stack": "Next.js, Tailwind CSS, 8-Bit Arcade Micro-Interactions"
    },
    {
        "id": "aura-portfolio-theme",
        "name": "AURA — Editorial & Fashion Portfolio",
        "type": "template",
        "category": "Portfolio",
        "source_dir": "PRODUCTS/Portfolio/aura-theme",
        "archive_root": "aura-portfolio-theme",
        "zip_file": "aura-portfolio-theme.zip",
        "price": "$26.10",
        "product_page": "https://scriptly.store/products/aura-premium-editorial-fashion-portfolio-html-theme",
        "demo_url": "https://aura-scriptly-theme.surge.sh/",
        "cover_image": "https://github.com/30tools/scriptly-assets/releases/download/dwq/Screen.Recording.2026-06-22.at.11.26.34.AM.gif",
        "tech_stack": "HTML5, Minimal CSS, Smooth Scroll, Fashion Grids"
    },
    {
        "id": "aethel-ai-agents",
        "name": "AETHEL — Autonomous AI Agents Platform",
        "type": "template",
        "category": "SaaS / AI",
        "source_dir": "PRODUCTS/SaaS/aethel-ai-agents",
        "archive_root": "aethel-ai-agents",
        "zip_file": "aethel-ai-agents.zip",
        "price": "$49.00",
        "product_page": "https://scriptly.store/products/aethel-ai-agents",
        "demo_url": "https://aethel-ai.surge.sh",
        "cover_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
        "tech_stack": "HTML5/CSS3/JS, Terminal Simulator, Dynamic Billing Matrix"
    },
    {
        "id": "lumen-atelier",
        "name": "LUMEN — Editorial Architecture Atelier",
        "type": "template",
        "category": "Architecture",
        "source_dir": "PRODUCTS/Architecture/lumen-atelier",
        "archive_root": "lumen-atelier",
        "zip_file": "lumen-atelier.zip",
        "price": "$49.00",
        "product_page": "https://scriptly.store/products/lumen-atelier",
        "demo_url": "https://lumen-atelier.surge.sh",
        "cover_image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&auto=format&fit=crop&q=85",
        "tech_stack": "HTML5/CSS3/JS, Scope Feasibility Slider, Materiality Swatches"
    },
    {
        "id": "matter-theme",
        "name": "MATTER — Luxury Creative Agency Template",
        "type": "template",
        "category": "Agency",
        "source_dir": "PRODUCTS/Agency/matter-theme",
        "archive_root": "matter-theme",
        "zip_file": "matter-theme.zip",
        "price": "$29.00",
        "product_page": "https://scriptly.store/products/matter-theme",
        "demo_url": "https://matter-agency-theme.surge.sh",
        "cover_image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "tech_stack": "HTML5, GSAP Motion, Lenis Smooth Scroll, Zero Build Overhead"
    },
    {
        "id": "vortex-theme",
        "name": "VORTEX STUDIO — High-Impact Motion Agency Theme",
        "type": "template",
        "category": "Agency / Production",
        "source_dir": "PRODUCTS/Agency/vortex-theme",
        "archive_root": "vortex-theme",
        "zip_file": "vortex-theme.zip",
        "price": "$39.00",
        "product_page": "https://scriptly.store/products/vortex-agency-magicui",
        "demo_url": "https://vortex-agency-theme.surge.sh/",
        "cover_image": "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/r2t4eb1ac03zwpcwsk5z.png",
        "tech_stack": "Astro, GSAP, Three.js Custom Image Distortion Shader"
    },
    {
        "id": "panda-scroll-portfolio",
        "name": "PANDA SCROLL — 3D Travel Animation Portfolio",
        "type": "template",
        "category": "Portfolio / 3D",
        "source_dir": "RAW_PRODUCT/mr-pandas-psychologically-safe-portfolio",
        "archive_root": "panda-scroll-portfolio",
        "zip_file": "panda-scroll-portfolio.zip",
        "price": "$40.00",
        "product_page": "https://scriptly.store/products/panda-scroll-travel-animation-portfolio",
        "demo_url": "https://www.mr-pandas-psychologically-safe-portfolio.com/",
        "cover_image": "https://github.com/30tools/coders/releases/download/few/Screenshot.2026-06-24.at.12.28.39.AM.png",
        "tech_stack": "Vite, React, Three.js, Procedural Path Curves, Blender Models"
    },
    {
        "id": "vetra-ai-automation",
        "name": "VETRA — Autonomous AI Marketing Platform",
        "type": "template",
        "category": "SaaS / AI",
        "source_dir": "PRODUCTS/SaaS/vetra-ai-marketing",
        "archive_root": "vetra-ai-automation",
        "zip_file": "vetra-ai-automation.zip",
        "price": "$39.00",
        "product_page": "https://scriptly.store/products/vetra-ai-automation",
        "demo_url": "https://vetra-saas.surge.sh",
        "cover_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
        "tech_stack": "Next.js 15, Tailwind CSS, Framer Motion, shadcn/ui"
    },
    {
        "id": "nexus-saas-template",
        "name": "NEXUS — Next.js 16 & Tailwind v4 Modern SaaS",
        "type": "template",
        "category": "SaaS",
        "source_dir": "PRODUCTS/SaaS/nexus-saas-template",
        "archive_root": "nexus-saas-template",
        "zip_file": "nexus-saas-template.zip",
        "price": "$49.00",
        "product_page": "https://scriptly.store/products/nexus-saas-template",
        "demo_url": "https://nexus-saas.surge.sh",
        "cover_image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
        "tech_stack": "Next.js 16, Tailwind CSS v4, Radix UI, Dark/Light Themes"
    },
    {
        "id": "apex-ai-studio",
        "name": "APEX — Cinematic AI Agency & Interactive Studio",
        "type": "template",
        "category": "Agency / AI",
        "source_dir": "PRODUCTS/Agency/apex-ai-studio",
        "archive_root": "apex-ai-studio",
        "zip_file": "apex-ai-studio.zip",
        "price": "$39.00",
        "product_page": "https://scriptly.store/products/apex-ai-studio",
        "demo_url": "https://apex-studio.surge.sh",
        "cover_image": "https://images.unsplash.com/photo-1534972195531-a756b1126f25?w=1200&auto=format&fit=crop&q=80",
        "tech_stack": "Next.js 14, Tailwind CSS, Framer Motion, DotLottie"
    },
    {
        "id": "linkify-pro-showcase",
        "name": "LINKIFY PRO — Developer Showcase & Multi-Tool SaaS",
        "type": "template",
        "category": "Portfolio",
        "source_dir": "PRODUCTS/Portfolio/linkify-pro",
        "archive_root": "linkify-pro-showcase",
        "zip_file": "linkify-pro-showcase.zip",
        "price": "$29.00",
        "product_page": "https://scriptly.store/products/linkify-pro-showcase",
        "demo_url": "https://linkify-pro.surge.sh",
        "cover_image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
        "tech_stack": "Next.js 14, Tailwind CSS, Framer Motion, Bento Layout"
    },

    # --- Production Developer Automation Scripts ---
    {
        "id": "aethera-telegram-ai-worker",
        "name": "AETHERA — Serverless Telegram AI Assistant Worker",
        "type": "script",
        "category": "Cloudflare Workers / AI",
        "source_dir": "PRODUCTS/Scripts/aethera-telegram-ai-worker",
        "archive_root": "aethera-telegram-ai-worker",
        "zip_file": "aethera-telegram-ai-worker.zip",
        "price": "$29.00",
        "product_page": "https://scriptly.store/products/aethera-telegram-ai-worker",
        "demo_url": "https://t.me/AetheraAIBot",
        "cover_image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
        "tech_stack": "Cloudflare Workers, Cloudflare AI (Llama 3 + Stable Diffusion)"
    },
    {
        "id": "cryptobulk-crypto-alert-bot",
        "name": "CRYPTOBULK — Multi-Exchange Crypto Alert & Arbitrage Bot",
        "type": "script",
        "category": "Python / Fintech",
        "source_dir": "PRODUCTS/Scripts/cryptobulk-crypto-alert-bot",
        "archive_root": "cryptobulk-crypto-alert-bot",
        "zip_file": "cryptobulk-crypto-alert-bot.zip",
        "price": "$29.00",
        "product_page": "https://scriptly.store/products/cryptobulk-crypto-alert-bot",
        "demo_url": "https://scriptly.store/products/cryptobulk-crypto-alert-bot",
        "cover_image": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop&q=80",
        "tech_stack": "Python 3, Asyncio, CCXT, Telegram Bot API"
    },
    {
        "id": "lynx-url-shortener-worker",
        "name": "LYNX — High-Performance Edge URL Shortener Worker",
        "type": "script",
        "category": "Cloudflare Workers / DevOps",
        "source_dir": "PRODUCTS/Scripts/lynx-url-shortener-worker",
        "archive_root": "lynx-url-shortener-worker",
        "zip_file": "lynx-url-shortener-worker.zip",
        "price": "$29.00",
        "product_page": "https://scriptly.store/products/lynx-url-shortener-worker",
        "demo_url": "https://scriptly.store/products/lynx-url-shortener-worker",
        "cover_image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
        "tech_stack": "Cloudflare Workers, Cloudflare KV, Base62 Encoding, Analytics"
    },
    {
        "id": "scrapely-scraper-api-worker",
        "name": "SCRAPELY — Resilient Headless Web Scraper API Worker",
        "type": "script",
        "category": "Cloudflare Workers / Web Scraping",
        "source_dir": "PRODUCTS/Scripts/scrapely-scraper-api-worker",
        "archive_root": "scrapely-scraper-api-worker",
        "zip_file": "scrapely-scraper-api-worker.zip",
        "price": "$29.00",
        "product_page": "https://scriptly.store/products/scrapely-scraper-api-worker",
        "demo_url": "https://scriptly.store/products/scrapely-scraper-api-worker",
        "cover_image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80",
        "tech_stack": "Cloudflare Workers, Cheerio HTML Parsing, JSON / Markdown API"
    },
    {
        "id": "seoflow-blog-article-generator",
        "name": "SEOFLOW — Automated Long-Form SEO Article Generator",
        "type": "script",
        "category": "Python / Content Automation",
        "source_dir": "PRODUCTS/Scripts/seoflow-blog-article-generator",
        "archive_root": "seoflow-blog-article-generator",
        "zip_file": "seoflow-blog-article-generator.zip",
        "price": "$29.00",
        "product_page": "https://scriptly.store/products/seoflow-blog-article-generator",
        "demo_url": "https://scriptly.store/products/seoflow-blog-article-generator",
        "cover_image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
        "tech_stack": "Python 3, OpenRouter / OpenAI API, SERP Intent Analysis"
    }
]


def package_product(product):
    zip_path = os.path.join(ZIP_DIR, product["zip_file"])
    src = os.path.join(WORKSPACE_ROOT, product["source_dir"])
    root_name = product["archive_root"]

    if not os.path.exists(src):
        raise FileNotFoundError(f"Source folder not found: {src}")

    file_count = 0
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for dirpath, dirnames, filenames in os.walk(src):
            # Prune excluded directories
            dirnames[:] = [
                d for d in dirnames
                if d not in EXCLUDE_DIRS and not d.startswith(".")
            ]

            for f in filenames:
                if (
                    f in EXCLUDE_FILES
                    or f.startswith(".env")
                    or f.endswith((".tmp", ".tsbuildinfo", ".log"))
                    or "_ORIGINAL" in f
                ):
                    continue

                full_path = os.path.join(dirpath, f)
                rel_path = os.path.relpath(full_path, src)
                arcname = os.path.join(root_name, rel_path)
                zf.write(full_path, arcname)
                file_count += 1

    size_bytes = os.path.getsize(zip_path)
    size_mb = size_bytes / (1024 * 1024)
    return {
        "id": product["id"],
        "name": product["name"],
        "type": product["type"],
        "zip_file": product["zip_file"],
        "abs_zip_path": zip_path,
        "size_mb": round(size_mb, 2),
        "file_count": file_count,
        "under_25mb": size_mb <= 25.0,
        "product_page": product["product_page"],
        "price": product["price"],
        "demo_url": product["demo_url"],
        "cover_image": product["cover_image"],
        "tech_stack": product["tech_stack"]
    }


def main():
    print("=" * 80)
    print("🚀 Packaging All 21 Templates and Scripts for 21st.dev Migration")
    print("=" * 80)

    packaged_summary = []
    for p in PRODUCTS_CATALOG:
        res = package_product(p)
        status = "Direct Attachment (<= 25MB)" if res["under_25mb"] else "Cloud Link (> 25MB)"
        print(f"📦 {res['name'][:36]:<36} | {res['zip_file']:<32} | {res['size_mb']:5.2f} MB | {res['file_count']:3d} files | {status}")
        packaged_summary.append(res)

    print("\n" + "=" * 80)
    total_size = sum(r["size_mb"] for r in packaged_summary)
    over_25 = [r for r in packaged_summary if not r["under_25mb"]]
    print(f"✅ Finished! Total products packaged: {len(packaged_summary)}")
    print(f"   Total combined archive weight: {total_size:.2f} MB")
    print(f"   Archives under 25MB (direct email attachment): {len(packaged_summary) - len(over_25)}")
    print(f"   Archives over 25MB (Drive / Dropbox link): {len(over_25)}")
    print("=" * 80)


if __name__ == "__main__":
    main()
