#!/usr/bin/env python3
import json
import urllib.request
import urllib.error

API_URL = "https://scriptly.store/api/agent/products"
API_KEY = "sa_key_f28a9b3d5c6e8f0a1c7d2e4b"

with open("STORE_LISTING/Portfolio/sh20raj-developer-portfolio.md", "r", encoding="utf-8") as f:
    long_desc = f.read()

payload = {
    "title": "DevCraft — Modern Full-Stack Engineer Portfolio & SaaS Template",
    "slug": "sh20raj-developer-portfolio",
    "shortDescription": "High-impact developer portfolio & engineering blog built with Next.js 16, Tailwind CSS, Framer Motion, Command Palette, and live GitHub stats.",
    "description": long_desc,
    "category": "landing-pages",
    "subcategory": "portfolio-templates",
    "price": 2900,
    "tags": "nextjs, portfolio, developer, engineering, mdx, blog, tailwind, typescript, dark-mode",
    "demoUrl": "https://sh20raj.github.io",
    "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/sh20raj-developer-portfolio.zip",
    "thumbnail": "https://raw.githubusercontent.com/SH20RAJ/sh20raj.github.io/main/screenshots/homepage-desktop.png",
    "screenshots": "https://raw.githubusercontent.com/SH20RAJ/sh20raj.github.io/main/screenshots/homepage-desktop.png,https://raw.githubusercontent.com/SH20RAJ/sh20raj.github.io/main/screenshots/homepage-desktop-full.png,https://raw.githubusercontent.com/SH20RAJ/sh20raj.github.io/main/screenshots/projects-desktop.png,https://raw.githubusercontent.com/SH20RAJ/sh20raj.github.io/main/screenshots/blog-desktop.png",
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
