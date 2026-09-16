#!/usr/bin/env python3
"""
Sync ScriptlyStore API Products with Local Codebase
Documentation: https://scriptly.store/docs/api
Endpoint: https://scriptly.store/api/products.json
"""

import os
import json
import urllib.request
import re

API_URL = "https://scriptly.store/api/products.json"

def fetch_products():
    req = urllib.request.Request(API_URL, headers={"User-Agent": "ScriptlySync/1.0"})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return data.get("products", []) if isinstance(data, dict) else data

def main():
    print(f"📡 Fetching catalog from {API_URL}...")
    products = fetch_products()
    print(f"✅ Received {len(products)} active products from ScriptlyStore API.\n")

    # Map products by slug
    by_slug = {p["slug"]: p for p in products}

    # Map codebase directories/files to canonical API slugs
    codebase_map = {
        "vortex-agency-magicui": "vortex-agency-magicui",
        "aura-ai-template": "aura-ai-template",
        "lumiere-theme": "lumiere-elite-digital-agency-html-theme",
        "kraft-theme": "kraft-premium-3d-hand-drawn-portfolio-theme",
        "pixel-craft-theme": "pixel-craft-theme",
        "grille-theme": "grille-restaurant-theme",
        "smileflow": "smileflow-premium-next-js-16-dental-practice-template",
        "aura-portfolio-theme": "aura-premium-editorial-fashion-portfolio-html-theme",
        "panda-portfolio": "panda-scroll-travel-animation-portfolio",
        "edors": "edors-premium-next-gen-3d-react-next-js-landing-page-template",
        "fizzi": "fizzi-a-3d-ecommerce-landing-page-built-with-next-js-14-gsap-three-js-and-prismic",
        "aero-ui": "aero-ui-premium-next-js-15-tailwind-v4-landing-page-template",
        "iron-man-jarvis": "iron-man-j-a-r-v-i-s-cinematic-landing-page",
        "norrav": "norrav-animating-gsap-landing-page",
    }

    # Update STORE_LISTING files
    listing_dir = "STORE_LISTING"
    for root, dirs, files in os.walk(listing_dir):
        for f in files:
            if not f.endswith(".md"):
                continue
            path = os.path.join(root, f)
            base_slug = f.replace(".md", "")
            category = os.path.basename(root)

            target_slug = None
            if base_slug == "aura-theme" and category == "Portfolio":
                target_slug = "aura-premium-editorial-fashion-portfolio-html-theme"
            elif base_slug == "aura-theme" and category == "Agency":
                target_slug = "aura-ai-template"
            elif base_slug in codebase_map:
                target_slug = codebase_map[base_slug]

            if target_slug and target_slug in by_slug:
                prod = by_slug[target_slug]
                with open(path, "r", encoding="utf-8") as file:
                    content = file.read()

                # Build standardized store listing metadata block
                price_str = prod.get("effectivePriceFormatted") or str(prod.get("price", 0))
                header = f"""# 🏷️ {prod['title']}

### 📁 Category
- **Category:** {prod.get('categoryName', category)}
- **Slug:** `{prod['slug']}`

### 🛒 Verified Purchase Link
- **Buy Direct:** [{prod['title']}]({prod['url']})
- **Effective Price:** ${price_str}
- **Storefront:** [{prod['storeName']}]({prod['url']})

### 🖼️ Product Imagery
- **Verified Cover Thumbnail:** {prod.get('thumbnail', 'N/A')}
- **Live Demo Preview:** {prod.get('demoUrl', 'N/A')}

### ⚡ Short Description
{prod.get('shortDescription', '')}

### 🏷️ SEO Tags
{", ".join([f"`{t}`" for t in prod.get('tags', [])])}

---

## 💎 Product Overview

{prod.get('description', '').strip()}

---

### 🌐 Live Demo:
{prod.get('demoUrl', 'N/A')}

---

### 🤝 Need Help?
- **Get Support:** https://scriptly.store/support
- **Find More Templates:** https://scriptly.store/
"""
                with open(path, "w", encoding="utf-8") as file:
                    file.write(header)
                print(f"✨ Synced {path} -> {prod['slug']} (${price_str})")

    print("\n🎉 Store listings synchronized with https://scriptly.store/api/products.json successfully!")

if __name__ == "__main__":
    main()
