#!/usr/bin/env python3
import os
import re
import urllib.request
import hashlib

SOURCE_DIR = "RAW_PRODUCT/gist_template"
DEST_DIR = "PRODUCTS/Portfolio/velour-kinetic-portfolio"

os.makedirs(f"{DEST_DIR}/assets/images", exist_ok=True)
os.makedirs(f"{DEST_DIR}/assets/css", exist_ok=True)
os.makedirs(f"{DEST_DIR}/assets/js", exist_ok=True)

with open(f"{SOURCE_DIR}/index.html", "r", encoding="utf-8") as f:
    html = f.read()

with open(f"{SOURCE_DIR}/style.css", "r", encoding="utf-8") as f:
    css = f.read()

with open(f"{SOURCE_DIR}/script.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Download unique images locally
urls = re.findall(r'src="(https://cdn\.shopify\.com/[^"]+)"', html)
unique_urls = list(dict.fromkeys(urls))

headers = {'User-Agent': 'Mozilla/5.0'}
url_map = {}

for idx, url in enumerate(unique_urls, 1):
    local_filename = f"portrait-{idx}.jpg"
    local_path = f"{DEST_DIR}/assets/images/{local_filename}"
    if not os.path.exists(local_path):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp, open(local_path, "wb") as out:
                out.write(resp.read())
            print(f"Downloaded: {local_filename}")
        except Exception as e:
            print(f"Error downloading {url}: {e}")
    url_map[url] = f"assets/images/{local_filename}"

# Replace URLs in HTML
for url, local in url_map.items():
    html = html.replace(url, local)

# 2. Rebrand HTML Copy & Structure
html = re.sub(r'<div class="logo">\s*<span class="logo-dot"></span>\s*DERMEXCEL\s*</div>',
              r'<div class="logo"><span class="logo-dot"></span>VELOUR</div>', html)

# Navigation
html = html.replace('<li><a href="#">Products</a></li>', '<li><a href="#work">Flagships</a></li>')
html = html.replace('<li><a href="#">Treatment plans</a></li>', '<li><a href="#studio">Philosophy</a></li>')
html = html.replace('<li><a href="#">Diagnosis</a></li>', '<li><a href="#crew">Collective</a></li>')
html = html.replace('<li><a href="#">Contact</a></li>', '<li><a href="https://scriptly.store/" target="_blank">Scriptly Store ↗</a></li>')
html = html.replace('Diagnosis Diagnosis', 'Start Project')

# Subline & Button
html = html.replace('8 people. 60+ shipped projects. Zero filler.', '8 specialists. 70+ flagship digital releases. Zero bloat.')
html = html.replace('Meet the crew', 'Meet the Collective')

# Section 2 Team Grid
html = html.replace('CLINICAL FRAMEWORK ARCHITECTURE', 'CREATIVE STRATEGY & ART DIRECTION')
html = html.replace('Biocentric Integration<br />of <em>Dermal Systems</em> and <em>Cellar Identity</em>.',
                    'Kinetic Synthesis<br />of <em>Digital Architecture</em> and <em>Brand Identity</em>.')
html = html.replace('Explore the systemic lifecycle matrix balancing infrastructural process design and custom target therapeutics formulas.',
                    'Precision engineering meets bespoke visual direction. We craft high-converting digital flagships for global category leaders.')

# Section 3 Stats
html = html.replace('Cellular Dermal<br /> <em>Intelligence</em>.', 'Kinetic Agency<br /> <em>Excellence</em>.')

# Make complete HTML doc with DOCTYPE, head, title, styles
full_html = f'''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Velour — Kinetic GSAP Parallax Studio & Agency Portfolio | Scriptly</title>
  <meta name="description" content="Velour is a luxury kinetic portfolio template powered by GSAP animations, interactive 3D parallax floating portraits, and smooth micro-interactions." />
  <meta property="og:title" content="Velour — Kinetic GSAP Parallax Studio & Agency Portfolio" />
  <meta property="og:description" content="Elevate your creative atelier with 3D parallax physics, smooth scroll transitions, and precision animations." />
  <meta property="og:url" content="https://scriptly.store/products/velour-kinetic-portfolio" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..900;1,9..40,400..900&family=Playfair+Display:ital,wght@0,500..800;1,500..800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>
{html}

  <!-- Scriptly Floating Purchase Ribbon -->
  <div style="position: fixed; bottom: 24px; right: 24px; z-index: 99999;">
    <a href="https://scriptly.store/products/velour-kinetic-portfolio" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: rgba(14, 15, 22, 0.95); color: #f59e0b; padding: 12px 22px; border-radius: 9999px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700; text-decoration: none; border: 1px solid rgba(245, 158, 11, 0.4); box-shadow: 0 10px 30px rgba(0,0,0,0.7), 0 0 20px rgba(245, 158, 11, 0.2); backdrop-blur: 10px; transition: all 0.2s;">
      <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: #f59e0b; box-shadow: 0 0 10px #f59e0b;"></span>
      <span>Get Velour on Scriptly</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
    </a>
  </div>

  <script src="assets/js/script.js"></script>
</body>
</html>
'''

# 3. Recolor style.css to luxury dark obsidian & radiant amber
luxury_dark_css = f'''/* Velour Luxury Dark Theme */
:root {{
  --bg: #090a0f;
  --bg-2: #121319;
  --ink: #f8fafc;
  --ink-soft: #94a3b8;
  --mute: #64748b;
  --line: rgba(255, 255, 255, 0.08);
  --ghost: rgba(255, 255, 255, 0.07);
  --orange-1: #f59e0b;
  --orange-2: #fbbf24;
  --orange-3: #fcd34d;
  --orange-4: #fef3c7;
  --accent-glow: rgba(245, 158, 11, 0.35);
}}

body {{
  background: radial-gradient(120% 80% at 50% -10%, #171923 0%, #0c0d13 50%, #06070a 100%) !important;
  color: var(--ink);
}}

/* Navbar backdrop */
.nav {{
  background: rgba(9, 10, 15, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
}}

.nav-links a {{
  color: var(--ink-soft) !important;
}}
.nav-links a:hover {{
  color: var(--ink) !important;
}}

.nav-cta {{
  background: linear-gradient(135deg, #f59e0b, #d97706) !important;
  color: #000000 !important;
  font-weight: 700 !important;
  border: none !important;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.35);
  transition: all 0.2s ease;
}}
.nav-cta:hover {{
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(245, 158, 11, 0.5);
}}

/* Floating card styling */
.card {{
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(245, 158, 11, 0.1) !important;
}}

.t-card {{
  background: #111218 !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
}}
.t-card:hover {{
  border-color: rgba(245, 158, 11, 0.4) !important;
}}

.stats {{
  border-top: 1px solid var(--line) !important;
  background: #08090d !important;
}}

.subline-text {{
  color: var(--ink-soft) !important;
}}

.arrow-pill {{
  background: rgba(255, 255, 255, 0.06) !important;
  color: var(--ink) !important;
  border: 1px solid var(--line) !important;
}}

.logo-dot {{
  background: linear-gradient(180deg, #f59e0b, #fbbf24) !important;
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.6) !important;
}}

''' + css

with open(f"{DEST_DIR}/index.html", "w", encoding="utf-8") as f:
    f.write(full_html)

with open(f"{DEST_DIR}/assets/css/style.css", "w", encoding="utf-8") as f:
    f.write(luxury_dark_css)

with open(f"{DEST_DIR}/assets/js/script.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Velour template successfully generated in", DEST_DIR)
