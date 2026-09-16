#!/usr/bin/env python3
import json
import urllib.request
import urllib.error

API_URL = "https://scriptly.store/api/agent/products"
API_KEY = "sa_key_f28a9b3d5c6e8f0a1c7d2e4b"

with open("STORE_LISTING/Agency/studiova-agency-bootstrap-template.md", "r", encoding="utf-8") as f:
    long_desc = f.read()

payload = {
    "title": "Studiova — Luxury Agency & Creative Business Bootstrap 5 Template",
    "slug": "studiova-agency-bootstrap-template",
    "shortDescription": "Luxury 12-page agency and creative business Bootstrap 5 template featuring video hero headers, fluid portfolio grids, and neon-accent aesthetics.",
    "description": long_desc,
    "category": "landing-pages",
    "subcategory": "agency-portfolio-templates",
    "price": 2900,
    "tags": "agency, bootstrap5, creative-studio, portfolio, dark-mode, responsive, html5, business-template",
    "demoUrl": "https://studiova-agency-theme.surge.sh/",
    "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/studiova-agency-bootstrap-template.zip",
    "thumbnail": "https://studiova-agency-theme.surge.sh/assets/images/backgrounds/projects-banner.jpg",
    "screenshots": "https://studiova-agency-theme.surge.sh/assets/images/backgrounds/aboutus-banner.jpg,https://studiova-agency-theme.surge.sh/assets/images/backgrounds/projects-banner.jpg,https://studiova-agency-theme.surge.sh/assets/images/backgrounds/blog-banner.jpg,https://studiova-agency-theme.surge.sh/assets/images/backgrounds/contact-banner.jpg",
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
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    },
    method="POST"
)

try:
    with urllib.request.urlopen(req) as response:
        res_data = response.read().decode("utf-8")
        print("Success! Status:", response.status)
        print("Response:", res_data)
except urllib.error.HTTPError as e:
    print(f"HTTP Error {e.code}: {e.read().decode('utf-8')}")
except Exception as e:
    print(f"Error: {e}")
