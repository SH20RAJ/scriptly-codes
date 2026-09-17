#!/usr/bin/env python3
import json
import os
from pathlib import Path
import urllib.request
import urllib.error

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

with open("STORE_LISTING/Portfolio/velour-kinetic-portfolio.md", "r", encoding="utf-8") as f:
    long_desc = f.read()

payload = {
    "title": "Velour — Kinetic GSAP Parallax Studio & Agency Portfolio",
    "slug": "velour-kinetic-portfolio",
    "shortDescription": "Ultra-luxury kinetic portfolio powered by GSAP scroll triggers, interactive 3D parallax floating portraits, and dark obsidian-gold aesthetics.",
    "description": long_desc,
    "category": "landing-pages",
    "subcategory": "portfolio-landing-pages",
    "price": 2900,
    "tags": "gsap, animation, parallax, 3d-tilt, portfolio, creative-agency, luxury-dark, landing-page",
    "demoUrl": "https://velour-agency-theme.surge.sh/",
    "fileUrl": "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/ZIP/velour-kinetic-portfolio.zip",
    "thumbnail": "https://velour-agency-theme.surge.sh/assets/images/portrait-1.jpg",
    "screenshots": "https://velour-agency-theme.surge.sh/assets/images/portrait-1.jpg,https://velour-agency-theme.surge.sh/assets/images/portrait-2.jpg,https://velour-agency-theme.surge.sh/assets/images/portrait-3.jpg",
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
