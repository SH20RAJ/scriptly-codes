#!/usr/bin/env python3
"""
Dual Marketplace Publisher for TEMPLATES_FACTORY Wave 1
Publishes to:
1. Scriptly Store Agent API (https://scriptly.store/api/agent/products)
2. 21st.dev Templates API (https://21st.dev/api/v1/templates/publish)
"""

import os
from pathlib import Path
import urllib.request
import urllib.error
import json
import time

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

WAVE_1_PRODUCTS = [
    {
        "name": "Developer Portfolio Pro — Staff Engineer Template",
        "slug": "developer-portfolio-pro",
        "shortDescription": "High-converting, obsidian-dark portfolio template engineered for senior software engineers, distributed systems architects, and technical consultants.",
        "listing_file": "STORE_LISTING/Portfolio/developer-portfolio-pro.md",
        "category": "portfolio",
        "subcategory": "portfolio-templates",
        "price": 2900,
        "price_twentyfirst": 29,
        "tags": "developer-portfolio, staff-engineer, distributed-systems, software-architect, dark-mode, terminal-simulator",
        "demoUrl": "https://dev-portfolio-pro.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/developer-portfolio-pro.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/dev-portfolio-pro-real.png",
    },
    {
        "name": "Doctor & Medical Practice — Physician & Surgical Clinic Template",
        "slug": "doctor-medical-practice",
        "shortDescription": "Authoritative, HIPAA-aware HTML5 web template designed for private medical practices, surgeons, and healthcare specialists with interactive appointment booking.",
        "listing_file": "STORE_LISTING/Professional/doctor-medical-practice.md",
        "category": "landing-pages",
        "subcategory": "clinic-healthcare",
        "price": 3900,
        "price_twentyfirst": 39,
        "tags": "doctor-website, medical-practice, surgeon-portfolio, clinic-landing-page, cardiology, appointment-booking",
        "demoUrl": "https://doctor-medical-practice.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/doctor-medical-practice.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/doctor-medical-practice-real.png",
    },
    {
        "name": "Fine Dining & Modern Bistro — Artisanal Hospitality Template",
        "slug": "restaurant-fine-dining",
        "shortDescription": "Opulent, Michelin-inspired restaurant web template featuring seasonal tasting menu cards, VIP table reservation modals, and farm-to-table culinary storytelling.",
        "listing_file": "STORE_LISTING/Restaurant/restaurant-fine-dining.md",
        "category": "landing-pages",
        "subcategory": "restaurant-bistro",
        "price": 4900,
        "price_twentyfirst": 49,
        "tags": "fine-dining, restaurant-website, michelin-guide, bistro-theme, tasting-menu, table-reservation, sommelier",
        "demoUrl": "https://bistro-dining-pro.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/restaurant-fine-dining.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/restaurant-fine-dining-real.png",
    },
    {
        "name": "AI Agent Platform — Autonomous Agent Infrastructure & Swarms",
        "slug": "ai-agent-platform",
        "shortDescription": "Cutting-edge B2B SaaS landing page template engineered for autonomous agent platforms, neural reasoning clusters, and multi-agent coordination frameworks.",
        "listing_file": "STORE_LISTING/SaaS/ai-agent-platform.md",
        "category": "landing-pages",
        "subcategory": "ai-landing-pages",
        "price": 5900,
        "price_twentyfirst": 59,
        "tags": "ai-agent-platform, autonomous-agents, multi-agent-swarms, saas-landing-page, dark-mode, terminal-sandbox",
        "demoUrl": "https://ai-agent-platform.surge.sh",
        "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/ai-agent-platform.zip",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/ai-agent-platform-real.png",
    }
]

def publish_to_scriptly(p):
    with open(p["listing_file"], "r", encoding="utf-8") as f:
        long_desc = f.read()

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
            return res.get("slug")
    except urllib.error.HTTPError as e:
        print(f"  ❌ 21st.dev failed (HTTP {e.code}): {e.read().decode('utf-8')}")
        return None
    except Exception as e:
        print(f"  ❌ 21st.dev error: {e}")
        return None

def main():
    print("🚀 Publishing TEMPLATES_FACTORY Wave 1 across Scriptly Store and 21st.dev...")
    results = {}
    for p in WAVE_1_PRODUCTS:
        print(f"\n📦 Processing: {p['name']}")
        publish_to_scriptly(p)
        t_slug = publish_to_twentyfirst(p)
        results[p["slug"]] = t_slug
        time.sleep(0.5)

    print("\n🎉 Dual marketplace publishing complete!")
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    main()
