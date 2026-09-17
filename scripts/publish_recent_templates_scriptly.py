#!/usr/bin/env python3
"""
Publish/Update the 5 recent templates to Scriptly Store with verified live demos and authentic Retina screenshots.
"""
import json
import os
from pathlib import Path
import urllib.request
import urllib.error
import time

def get_env_var(name, fallback=""):
    val = os.environ.get(name)
    if val:
        return val
    env_path = Path(__file__).resolve().parents[1] / ".env"
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            line = line.strip()
            if line.startswith(f"{name}="):
                return line.split("=", 1)[1].strip()
    return fallback

API_URL = os.environ.get("SCRIPTLY_API_URL", "https://scriptly.store/api/agent/products")
API_KEY = get_env_var("SCRIPTLY_API_KEY") or get_env_var("AGENT_API_KEY")

TEMPLATES = [
    {
        "title": "NEXUS — Next.js 16 & Tailwind v4 Modern SaaS Template",
        "slug": "nexus-saas-template",
        "shortDescription": "Bleeding-edge B2B SaaS landing page built with Next.js 16 App Router, Tailwind CSS v4, dynamic pricing matrices, and bento layouts.",
        "listing_file": "STORE_LISTING/SaaS/nexus-saas-template.md",
        "category": "landing-pages",
        "subcategory": "saas-software",
        "price": 4900,
        "tags": "nextjs-16, tailwind-v4, saas, b2b-landing-page, radix-ui, shadcn-ui, dark-mode, pricing-matrix",
        "demoUrl": "https://nexus-saas.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/nexus-saas-template.zip",
        "thumbnail": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/nexus-real.png",
        "screenshots": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/nexus-real.png",
    },
    {
        "title": "VETRA — Autonomous AI Marketing Platform & SaaS Template",
        "slug": "vetra-ai-automation",
        "shortDescription": "Enterprise-grade AI marketing automation SaaS landing page with Next.js 15, Tailwind CSS, Framer Motion, and shadcn/ui.",
        "listing_file": "STORE_LISTING/SaaS/vetra-ai-automation.md",
        "category": "landing-pages",
        "subcategory": "ai-landing-pages",
        "price": 3900,
        "tags": "ai-marketing, nextjs-15, tailwindcss, framer-motion, shadcn-ui, marketing-automation, bento-grid",
        "demoUrl": "https://vetra-saas.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/vetra-ai-automation.zip",
        "thumbnail": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/vetra-real.png",
        "screenshots": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/vetra-real.png",
    },
    {
        "title": "MATTER — Luxury Creative Agency Template",
        "slug": "matter-theme",
        "shortDescription": "A cinematic, scroll-triggered digital agency HTML template designed for elite marketing, content creation, and paid media studios.",
        "listing_file": "STORE_LISTING/Agency/matter-theme.md",
        "category": "landing-pages",
        "subcategory": "agency-portfolio-templates",
        "price": 2900,
        "tags": "agency-theme, creative-agency, social-media, paid-media, html5-portfolio, gsap, lenis-scroll",
        "demoUrl": "https://matter-agency-theme.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/matter-theme.zip",
        "thumbnail": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/matter-real.png",
        "screenshots": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/matter-real.png",
    },
    {
        "title": "LUMEN — Editorial Architecture & Spatial Atelier",
        "slug": "lumen-atelier",
        "shortDescription": "Editorial luxury architecture and spatial atelier HTML5 template with project feasibility estimator, filterable monographs, and material swatches.",
        "listing_file": "STORE_LISTING/Architecture/lumen-atelier.md",
        "category": "landing-pages",
        "subcategory": "architecture-interior",
        "price": 4900,
        "tags": "architecture-portfolio, interior-design, luxury-editorial, spatial-design, html5, surge",
        "demoUrl": "https://lumen-atelier.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/lumen-atelier.zip",
        "thumbnail": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/lumen-real.png",
        "screenshots": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/lumen-real.png",
    },
    {
        "title": "AETHEL — Autonomous AI Agents Platform",
        "slug": "aethel-ai-agents",
        "shortDescription": "Ultra-modern dark mode SaaS landing page for autonomous AI agent platforms with live sandbox simulator, bento grids, and billing toggle.",
        "listing_file": "STORE_LISTING/SaaS/aethel-ai-agents.md",
        "category": "landing-pages",
        "subcategory": "ai-landing-pages",
        "price": 4900,
        "tags": "ai-agents, autonomous-agents, saas-landing-page, developer-tools, dark-mode, terminal-simulator",
        "demoUrl": "https://aethel-ai.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/aethel-ai-agents.zip",
        "thumbnail": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/aethel-real.png",
        "screenshots": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/aethel-real.png",
    }
]

def publish_template(t):
    with open(t["listing_file"], "r", encoding="utf-8") as f:
        long_desc = f.read()

    payload = {
        "title": t["title"],
        "slug": t["slug"],
        "shortDescription": t["shortDescription"],
        "description": long_desc,
        "category": t["category"],
        "subcategory": t["subcategory"],
        "price": t["price"],
        "tags": t["tags"],
        "demoUrl": t["demoUrl"],
        "fileUrl": t["fileUrl"],
        "thumbnail": t["thumbnail"],
        "screenshots": t["screenshots"],
        "published": True,
        "featured": True,
        "isFree": False,
        "redirectDownload": True,
        "version": "1.0.0"
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        API_URL,
        data=data,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "ScriptlyCodes/1.0"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req) as resp:
            print(f"✅ Published {t['slug']}: HTTP {resp.status}")
            return True
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode("utf-8")
        print(f"⚠️ POST failed {t['slug']}: HTTP {e.code} - {err_msg}")
        # If product already exists, attempt PATCH
        if e.code in [400, 409]:
            patch_url = f"{API_URL}/{t['slug']}"
            patch_req = urllib.request.Request(
                patch_url,
                data=data,
                headers={
                    "Authorization": f"Bearer {API_KEY}",
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "User-Agent": "ScriptlyCodes/1.0"
                },
                method="PATCH"
            )
            try:
                with urllib.request.urlopen(patch_req) as presp:
                    print(f"✅ Patched {t['slug']}: HTTP {presp.status}")
                    return True
            except Exception as pe:
                print(f"❌ PATCH failed {t['slug']}: {pe}")
        return False
    except Exception as e:
        print(f"❌ Error {t['slug']}: {e}")
        return False

def main():
    print("🚀 Publishing 5 recent templates to Scriptly Store...")
    for t in TEMPLATES:
        publish_template(t)
        time.sleep(0.5)

if __name__ == "__main__":
    main()
