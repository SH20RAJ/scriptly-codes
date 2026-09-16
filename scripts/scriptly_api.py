#!/usr/bin/env python3
"""
ScriptlyStore API Client & Automation Suite
Official Documentation: https://scriptly.store/docs/api
Base Endpoints:
  - GET https://scriptly.store/api/products.json
      Parameters: limit, category, subcategory, slug, featured
  - GET https://scriptly.store/api/blog.json
      Parameters: limit, category, slug
"""

import argparse
import json
import os
import sys
import urllib.parse
import urllib.request
from typing import Any, Dict, List, Optional

BASE_URL = "https://scriptly.store"
PRODUCTS_ENDPOINT = f"{BASE_URL}/api/products.json"
BLOG_ENDPOINT = f"{BASE_URL}/api/blog.json"

DEFAULT_HEADERS = {
    "User-Agent": "ScriptlyApiClient/1.0 (Antigravity Automation; +https://scriptly.store)",
    "Accept": "application/json",
}


class ScriptlyClient:
    """Official Python Client for the public ScriptlyStore JSON API."""

    def __init__(self, base_url: str = BASE_URL, timeout: int = 15):
        self.base_url = base_url.rstrip("/")
        self.products_endpoint = f"{self.base_url}/api/products.json"
        self.blog_endpoint = f"{self.base_url}/api/blog.json"
        self.timeout = timeout

    def _request(self, endpoint: str, params: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Perform an HTTP GET request with URL query encoding."""
        url = endpoint
        if params:
            # Filter out None values
            clean_params = {k: str(v) for k, v in params.items() if v is not None}
            if clean_params:
                query_string = urllib.parse.urlencode(clean_params)
                url = f"{endpoint}?{query_string}"

        req = urllib.request.Request(url, headers=DEFAULT_HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=self.timeout) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                return data
        except urllib.error.HTTPError as e:
            error_body = e.read().decode("utf-8", errors="ignore")
            raise RuntimeError(f"HTTP {e.code} Error fetching {url}: {error_body}")
        except Exception as e:
            raise RuntimeError(f"Network error querying {url}: {e}")

    def get_products(
        self,
        category: Optional[str] = None,
        subcategory: Optional[str] = None,
        slug: Optional[str] = None,
        featured: Optional[bool] = None,
        limit: Optional[int] = None,
    ) -> List[Dict[str, Any]]:
        """
        Query products with filters supported by https://scriptly.store/docs/api.
        Query Parameters:
          - limit: int
          - category: str
          - subcategory: str
          - slug: str
          - featured: bool ('true' / 'false')
        """
        params = {}
        if category:
            params["category"] = category
        if subcategory:
            params["subcategory"] = subcategory
        if slug:
            params["slug"] = slug
        if featured is not None:
            params["featured"] = "true" if featured else "false"
        if limit is not None:
            params["limit"] = limit

        res = self._request(self.products_endpoint, params)
        if isinstance(res, dict):
            return res.get("products", [])
        elif isinstance(res, list):
            return res
        return []

    def get_product(self, slug: str) -> Optional[Dict[str, Any]]:
        """Fetch a single product by exact slug."""
        products = self.get_products(slug=slug)
        if products:
            return products[0]
        return None

    def get_blog(
        self,
        category: Optional[str] = None,
        slug: Optional[str] = None,
        limit: Optional[int] = None,
    ) -> List[Dict[str, Any]]:
        """
        Query blog posts with filters supported by https://scriptly.store/docs/api.
        Query Parameters:
          - limit: int
          - category: str
          - slug: str
        """
        params = {}
        if category:
            params["category"] = category
        if slug:
            params["slug"] = slug
        if limit is not None:
            params["limit"] = limit

        res = self._request(self.blog_endpoint, params)
        if isinstance(res, dict):
            # Could be keyed as posts, blogs, articles, or data
            for key in ["posts", "blogs", "articles", "data", "items"]:
                if key in res and isinstance(res[key], list):
                    return res[key]
            return []
        elif isinstance(res, list):
            return res
        return []


def cmd_list(client: ScriptlyClient, args: argparse.Namespace):
    """List products matching criteria."""
    products = client.get_products(
        category=args.category,
        subcategory=args.subcategory,
        slug=args.slug,
        featured=args.featured,
        limit=args.limit,
    )
    print(f"📦 Found {len(products)} products on ScriptlyStore:\n")
    print(f"{'#':<3} {'SLUG':<45} {'PRICE':<8} {'EFF.':<8} {'TITLE'}")
    print("-" * 100)
    for i, p in enumerate(products, 1):
        slug = p.get("slug", "")
        price = f"${p.get('priceFormatted', '0.00')}"
        eff = f"${p.get('effectivePriceFormatted', '0.00')}"
        title = p.get("title", "")[:40]
        print(f"{i:<3} {slug:<45} {price:<8} {eff:<8} {title}")


def cmd_get(client: ScriptlyClient, args: argparse.Namespace):
    """Get complete product JSON details by slug."""
    product = client.get_product(args.slug)
    if not product:
        print(f"❌ Product with slug '{args.slug}' not found.")
        sys.exit(1)
    print(json.dumps(product, indent=2))


def cmd_blog(client: ScriptlyClient, args: argparse.Namespace):
    """List blog articles."""
    articles = client.get_blog(category=args.category, slug=args.slug, limit=args.limit)
    print(f"📰 Found {len(articles)} blog entries:\n")
    for i, a in enumerate(articles, 1):
        title = a.get("title", "Untitled")
        slug = a.get("slug", "")
        published = a.get("publishedAt") or a.get("createdAt") or ""
        print(f"{i:2d}. {title}")
        print(f"    Slug: {slug} | Date: {published}")
        if a.get("url"):
            print(f"    URL: {a.get('url')}")
        print()


def cmd_sync(client: ScriptlyClient, args: argparse.Namespace):
    """Synchronize STORE_LISTING files with live API data."""
    print("📡 Fetching all products from ScriptlyStore API (https://scriptly.store/docs/api)...")
    products = client.get_products()
    by_slug = {p["slug"]: p for p in products}
    print(f"✅ Loaded {len(products)} products into memory.")

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

    synced_count = 0
    workspace_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    listing_dir = os.path.join(workspace_root, "STORE_LISTING")

    for root, _, files in os.walk(listing_dir):
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
            elif base_slug in by_slug:
                target_slug = base_slug

            if target_slug and target_slug in by_slug:
                prod = by_slug[target_slug]
                price_str = prod.get("effectivePriceFormatted") or prod.get("priceFormatted") or str(prod.get("price", 0))

                content = f"""# 🏷️ {prod['title']}

### 📁 Category
- **Category:** {prod.get('categoryName', category)}
- **Subcategory:** {prod.get('subcategoryName', 'N/A')}
- **Canonical Slug:** `{prod['slug']}`

### 🛒 Verified Purchase Link
- **Buy Direct:** [{prod['title']}]({prod['url']})
- **Effective Price:** ${price_str} (Regular: ${prod.get('priceFormatted', price_str)})
- **Storefront:** [{prod.get('storeName', 'Scriptly Store')}]({prod['url']})

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
- **API Documentation:** https://scriptly.store/docs/api
- **Find More Templates:** https://scriptly.store/
"""
                with open(path, "w", encoding="utf-8") as out_file:
                    out_file.write(content)
                synced_count += 1
                print(f"✨ Updated {os.path.relpath(path, workspace_root)} -> {target_slug} (${price_str})")

    print(f"\n🎉 Successfully synchronized {synced_count} listings using ScriptlyStore API.")


def main():
    parser = argparse.ArgumentParser(
        description="ScriptlyStore API Tool & Client (https://scriptly.store/docs/api)"
    )
    subparsers = parser.add_subparsers(dest="command", help="Available subcommands")

    # list
    p_list = subparsers.add_parser("list", help="List products with query filters")
    p_list.add_argument("--category", help="Filter by category (e.g. landing-pages, ui-kits)")
    p_list.add_argument("--subcategory", help="Filter by subcategory")
    p_list.add_argument("--slug", help="Filter by product slug")
    p_list.add_argument("--featured", action="store_true", default=None, help="Filter featured products")
    p_list.add_argument("--limit", type=int, help="Limit number of items returned")

    # get
    p_get = subparsers.add_parser("get", help="Get full product details by slug")
    p_get.add_argument("slug", help="Product slug (e.g. vortex-agency-magicui)")

    # blog
    p_blog = subparsers.add_parser("blog", help="Fetch blog posts")
    p_blog.add_argument("--category", help="Filter blog by category")
    p_blog.add_argument("--slug", help="Filter blog by slug")
    p_blog.add_argument("--limit", type=int, help="Limit number of blog items")

    # sync
    p_sync = subparsers.add_parser("sync-listings", help="Sync STORE_LISTING files with live API")

    args = parser.parse_args()
    if not args.command:
        parser.print_help()
        sys.exit(0)

    client = ScriptlyClient()

    if args.command == "list":
        cmd_list(client, args)
    elif args.command == "get":
        cmd_get(client, args)
    elif args.command == "blog":
        cmd_blog(client, args)
    elif args.command == "sync-listings":
        cmd_sync(client, args)


if __name__ == "__main__":
    main()
