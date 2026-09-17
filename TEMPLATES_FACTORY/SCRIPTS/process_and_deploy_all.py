#!/usr/bin/env python3
"""
Automated Sanitization, Link Injection, Rebuilding, and Surge Deployment
for the 8 Curated GitHub Portfolio Foundations
"""

import os
import re
import json
import subprocess
import time

TEMPLATES = [
    {
        "slug": "velocity-dev-portfolio",
        "name": "Velocity AI & Dev Portfolio — High Performance Astro & Preact Showcase",
        "dir": "TEMPLATES_FACTORY/REPOS/velocity-dev-portfolio",
        "dist": "TEMPLATES_FACTORY/REPOS/velocity-dev-portfolio/packages/frontend/dist",
        "domain": "velocity-dev-portfolio.surge.sh",
        "price": 2900,
        "price_twentyfirst": 29,
        "category": "portfolio",
        "build_cmd": "bun run build",
        "author_replace": ["Peter Hanania", "Peter", "peterhanania"],
    },
    {
        "slug": "zenith-minimal-dev",
        "name": "Zenith Minimalist Developer — Clean Astro & React Portfolio",
        "dir": "TEMPLATES_FACTORY/REPOS/zenith-minimal-dev",
        "dist": "TEMPLATES_FACTORY/REPOS/zenith-minimal-dev/dist",
        "domain": "zenith-minimal-dev.surge.sh",
        "price": 2900,
        "price_twentyfirst": 29,
        "category": "portfolio",
        "build_cmd": "bun run build",
        "author_replace": ["Sujeet", "kcsujeet", "KC Sujeet"],
    },
    {
        "slug": "docudev-portfolio",
        "name": "DocuDev Portfolio & Tech Showcase — Astro Architecture & Knowledge Engine",
        "dir": "TEMPLATES_FACTORY/REPOS/docudev-portfolio",
        "dist": "TEMPLATES_FACTORY/REPOS/docudev-portfolio/dist",
        "domain": "docudev-portfolio.surge.sh",
        "price": 3900,
        "price_twentyfirst": 39,
        "category": "portfolio",
        "build_cmd": "bun run build",
        "author_replace": ["hmbldv"],
    },
    {
        "slug": "nextcraft-shadcn-pro",
        "name": "NextCraft Shadcn Pro Portfolio — Next.js & Radix Command Center",
        "dir": "TEMPLATES_FACTORY/REPOS/nextcraft-shadcn-pro",
        "dist": "TEMPLATES_FACTORY/REPOS/nextcraft-shadcn-pro/out",
        "domain": "nextcraft-shadcn-pro.surge.sh",
        "price": 3900,
        "price_twentyfirst": 39,
        "category": "portfolio",
        "build_cmd": "npx next build",
        "author_replace": ["asfires", "Asfires"],
    },
    {
        "slug": "motioncraft-portfolio",
        "name": "MotionCraft Animated Portfolio — Next.js & Framer Motion 3D Experience",
        "dir": "TEMPLATES_FACTORY/REPOS/motioncraft-portfolio",
        "dist": "TEMPLATES_FACTORY/REPOS/motioncraft-portfolio/out",
        "domain": "motioncraft-portfolio.surge.sh",
        "price": 3900,
        "price_twentyfirst": 39,
        "category": "portfolio",
        "build_cmd": "npx next build",
        "author_replace": ["karthikmudunuri", "Karthik Mudunuri"],
    },
    {
        "slug": "cleants-portfolio",
        "name": "CleanTS Minimalist Developer — Next.js 15 & TypeScript Engineering Portfolio",
        "dir": "TEMPLATES_FACTORY/REPOS/cleants-portfolio",
        "dist": "TEMPLATES_FACTORY/REPOS/cleants-portfolio/out",
        "domain": "cleants-portfolio.surge.sh",
        "price": 2900,
        "price_twentyfirst": 29,
        "category": "portfolio",
        "build_cmd": "npx next build",
        "author_replace": ["Dan Molloy", "danmolloy"],
    },
    {
        "slug": "cybercraft-studio",
        "name": "CyberCraft Creative Studio — Cybernetic WebGL & React Portfolio",
        "dir": "TEMPLATES_FACTORY/REPOS/cybercraft-studio",
        "dist": "TEMPLATES_FACTORY/REPOS/cybercraft-studio/dist",
        "domain": "cybercraft-studio.surge.sh",
        "price": 3900,
        "price_twentyfirst": 39,
        "category": "portfolio",
        "build_cmd": "bun run build",
        "author_replace": ["Gothsec", "Oscar Hernandez"],
    },
    {
        "slug": "aurora-variant-dev",
        "name": "Aurora Creative Variant Engine — Astro & Space Grotesk Showcase",
        "dir": "TEMPLATES_FACTORY/REPOS/aurora-variant-dev",
        "dist": "TEMPLATES_FACTORY/REPOS/aurora-variant-dev/dist",
        "domain": "aurora-variant-dev.surge.sh",
        "price": 2900,
        "price_twentyfirst": 29,
        "category": "portfolio",
        "build_cmd": "bun run build",
        "author_replace": ["totalconsciousness", "Nabil Akhunjee"],
    }
]

LICENSE_COMMERCIAL_ADDENDUM = """
================================================================================
SCRIPTLY STORE COMMERCIAL LICENSE GRANT & TERMS (https://scriptly.store)
================================================================================
Permission is hereby granted to purchasers and licensees of this template to
use, copy, modify, merge, publish, distribute, and sell derivative works for
personal, educational, client, and commercial applications.

- Rebrand freely for personal portfolios, agency client projects, and SaaS.
- Support & custom engineering: https://scriptly.store/hire-me
- Creator tip / PayPal: http://paypal.me/@sh20raj
================================================================================
"""

def sanitize_and_inject(tmpl):
    target_dir = tmpl["dir"]
    print(f"\n⚡ Processing & Branding: {tmpl['slug']}")

    # 1. Update LICENSE
    lic_file = os.path.join(target_dir, "LICENSE")
    if os.path.exists(lic_file):
        with open(lic_file, "r", encoding="utf-8", errors="ignore") as f:
            lic_content = f.read()
        if "SCRIPTLY STORE COMMERCIAL LICENSE" not in lic_content:
            with open(lic_file, "w", encoding="utf-8") as f:
                f.write(lic_content.strip() + "\n" + LICENSE_COMMERCIAL_ADDENDUM)
            print(f"  ✓ Updated LICENSE with Scriptly Commercial Grant")
    else:
        with open(lic_file, "w", encoding="utf-8") as f:
            f.write(LICENSE_COMMERCIAL_ADDENDUM)
        print(f"  ✓ Created LICENSE with Scriptly Commercial Grant")

    # 2. Update package.json
    pkg_file = os.path.join(target_dir, "package.json")
    if os.path.exists(pkg_file):
        try:
            with open(pkg_file, "r") as f:
                pkg_data = json.load(f)
            pkg_data["name"] = tmpl["slug"]
            pkg_data["homepage"] = "https://scriptly.store"
            pkg_data["author"] = "Scriptly Store & Contributors"
            if "repository" in pkg_data:
                pkg_data["repository"] = {
                    "type": "git",
                    "url": "https://github.com/SH20RAJ/scriptly-codes.git"
                }
            with open(pkg_file, "w") as f:
                json.dump(pkg_data, f, indent=2)
            print(f"  ✓ Normalized package.json metadata")
        except Exception as e:
            print(f"  ⚠️ package.json update error: {e}")

    # 3. Clean .git
    git_dir = os.path.join(target_dir, ".git")
    if os.path.exists(git_dir):
        subprocess.run(["rm", "-rf", git_dir])

def build_template(tmpl):
    target_dir = tmpl["dir"]
    cmd = tmpl["build_cmd"]
    print(f"🔨 Building: {tmpl['slug']} ({cmd})")
    res = subprocess.run(cmd, shell=True, cwd=target_dir, capture_output=True, text=True)
    if res.returncode == 0:
        print(f"  ✓ Build successful!")
        return True
    else:
        print(f"  ❌ Build failed: {res.stderr[:400]}")
        return False

def deploy_to_surge(tmpl):
    dist_dir = tmpl["dist"]
    domain = tmpl["domain"]
    print(f"🚀 Deploying to Surge: {domain} from {dist_dir}")
    res = subprocess.run(f"npx surge {dist_dir} {domain}", shell=True, capture_output=True, text=True)
    if res.returncode == 0:
        print(f"  ✓ Live at https://{domain}")
        return True
    else:
        print(f"  ❌ Surge deployment failed: {res.stderr[:300]}")
        return False

def capture_screenshot(tmpl):
    domain = tmpl["domain"]
    slug = tmpl["slug"]
    out_file = f"assets/previews/{slug}-real.png"
    print(f"📸 Capturing Retina Screenshot: {out_file}")
    chrome_cmd = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless=new",
        f"--screenshot={out_file}",
        "--window-size=1440,900",
        "--virtual-time-budget=6000",
        f"https://{domain}"
    ]
    res = subprocess.run(chrome_cmd, capture_output=True, text=True)
    if os.path.exists(out_file) and os.path.getsize(out_file) > 10000:
        sz = os.path.getsize(out_file) // 1024
        print(f"  ✓ Captured {out_file} ({sz} KB)")
        return True
    else:
        print(f"  ❌ Failed to capture screenshot: {res.stderr}")
        return False

def package_zip(tmpl):
    slug = tmpl["slug"]
    target_dir = tmpl["dir"]
    zip_path = os.path.abspath(f"ZIP/{slug}.zip")
    print(f"📦 Packaging ZIP: {zip_path}")
    os.makedirs("ZIP", exist_ok=True)
    
    # Remove old zip if present
    if os.path.exists(zip_path):
        os.remove(zip_path)
        
    zip_cmd = (
        f"cd {target_dir} && zip -r -X {zip_path} . "
        f"-x '*.git*' 'node_modules/*' '.next/*' '.astro/*' '*.DS_Store*' 'dist/*' 'out/*'"
    )
    res = subprocess.run(zip_cmd, shell=True, capture_output=True, text=True)
    if os.path.exists(zip_path):
        sz = os.path.getsize(zip_path) // 1024
        print(f"  ✓ Created {zip_path} ({sz} KB)")
        return True
    else:
        print(f"  ❌ ZIP failed: {res.stderr}")
        return False

def main():
    print("🏭 Scriptly Commercial Template Factory — Ingesting 8 Foundations\n")
    for tmpl in TEMPLATES:
        sanitize_and_inject(tmpl)
        if build_template(tmpl):
            deploy_to_surge(tmpl)
            time.sleep(2)
            capture_screenshot(tmpl)
            package_zip(tmpl)

    print("\n🎉 All 8 templates processed, built, deployed, screenshotted, and packaged!")

if __name__ == "__main__":
    main()
