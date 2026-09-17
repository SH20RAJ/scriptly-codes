#!/usr/bin/env python3
"""
Patch 21st.dev templates with verified live demo URLs and authentic Retina screenshots.
"""
import urllib.request
import json
import time

API_KEY = "21st_sk_72d6ae9d2237f5ad7986e096d11e6310b3c16d97cfba3db675b95fe0c7787ac1"

PATCH_SPECS = [
    # Aethel
    {
        "ids": [948, 973, 993],
        "name": "AETHEL — Autonomous AI Agents Platform",
        "website_preview_url": "https://aethel-ai.surge.sh",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/aethel-real.png",
        "payment_url": "https://scriptly.store/products/aethel-ai-agents",
        "price": 49,
        "description": "Ultra-modern dark mode SaaS landing page for autonomous AI agent platforms with live sandbox simulator, bento grids, and billing toggle."
    },
    # Lumen
    {
        "ids": [949, 974],
        "name": "LUMEN — Editorial Architecture Atelier",
        "website_preview_url": "https://lumen-atelier.surge.sh",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/lumen-real.png",
        "payment_url": "https://scriptly.store/products/lumen-atelier",
        "price": 49,
        "description": "Editorial luxury architecture and spatial atelier HTML5 template with project feasibility estimator, filterable monographs, and material swatches."
    },
    # Matter
    {
        "ids": [947, 975],
        "name": "MATTER — Luxury Creative Agency Template",
        "website_preview_url": "https://matter-agency-theme.surge.sh",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/matter-real.png",
        "payment_url": "https://scriptly.store/products/matter-theme",
        "price": 29,
        "description": "A cinematic, scroll-triggered digital agency HTML template designed for elite marketing, content creation, and paid media studios."
    },
    # Vetra
    {
        "ids": [986],
        "name": "VETRA — Autonomous AI Marketing Platform",
        "website_preview_url": "https://vetra-saas.surge.sh",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/vetra-real.png",
        "payment_url": "https://scriptly.store/products/vetra-ai-automation",
        "price": 39,
        "description": "Enterprise-grade AI marketing automation SaaS landing page with Next.js 15, Tailwind CSS, Framer Motion, and shadcn/ui."
    },
    # Nexus
    {
        "ids": [987, 992, 994],
        "name": "NEXUS — Next.js 16 & Tailwind v4 Modern SaaS",
        "website_preview_url": "https://nexus-saas.surge.sh",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/nexus-real.png",
        "payment_url": "https://scriptly.store/products/nexus-saas-template",
        "price": 49,
        "description": "Bleeding-edge B2B SaaS landing page built with Next.js 16 App Router, Tailwind CSS v4, dynamic pricing matrices, and bento layouts."
    },
    # DevCraft Portfolio
    {
        "ids": [991],
        "name": "DevCraft — Full-Stack Engineer Portfolio",
        "website_preview_url": "https://sh20raj.github.io",
        "preview_url": "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/sh20raj-real.png",
        "payment_url": "https://scriptly.store/products/sh20raj-developer-portfolio",
        "price": 29,
        "description": "Modern developer portfolio built with Next.js 16, Tailwind CSS, Framer Motion, and MDX. Features interactive GitHub activity, projects showcase, and sleek dark aesthetic."
    }
]

def patch_template(tid, spec):
    url = f"https://21st.dev/api/v1/templates/{tid}"
    body = {
        "name": spec["name"],
        "website_preview_url": spec["website_preview_url"],
        "preview_url": spec["preview_url"],
        "payment_url": spec["payment_url"],
        "price": spec["price"],
        "description": spec["description"]
    }
    data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        method="PATCH",
        headers={
            "authorization": f"Bearer {API_KEY}",
            "content-type": "application/json"
        }
    )
    try:
        with urllib.request.urlopen(req) as resp:
            res = json.loads(resp.read().decode("utf-8"))
            t = res.get("template", {})
            print(f"✅ Successfully patched #{tid} ({t.get('template_slug')}):")
            print(f"   Site: {t.get('website_preview_url')}")
            print(f"   Preview: {t.get('preview_url')}")
            print(f"   Status: {t.get('status')}")
            return True
    except urllib.error.HTTPError as e:
        print(f"❌ Failed #{tid}: HTTP {e.code} - {e.read().decode('utf-8')}")
        return False
    except Exception as e:
        print(f"❌ Error #{tid}: {e}")
        return False

def main():
    print("🚀 Patching 21st.dev templates with verified live URLs & authentic screenshots...")
    success_count = 0
    total_count = 0
    for spec in PATCH_SPECS:
        for tid in spec["ids"]:
            total_count += 1
            if patch_template(tid, spec):
                success_count += 1
            time.sleep(0.3)
    print(f"\n🎉 Finished! Patched {success_count}/{total_count} templates successfully.")

if __name__ == "__main__":
    main()
