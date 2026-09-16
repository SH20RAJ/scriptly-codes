#!/usr/bin/env python3
import glob
import os
import re

TARGET_DIR = "PRODUCTS/Agency/studiova-agency-bootstrap-template"

TITLE_MAP = {
    "index.html": "Studiova — Luxury Agency & Creative Business Bootstrap 5 Template | Scriptly",
    "about-us.html": "About Studiova — Creative Digital Agency & Studio | Scriptly",
    "projects.html": "Portfolio & Selected Works — Studiova Agency | Scriptly",
    "projects-detail.html": "Case Study Details — Studiova Agency | Scriptly",
    "blog.html": "Journal & Creative Perspectives — Studiova Agency | Scriptly",
    "blog-detail.html": "Agency Article & Deep Dive — Studiova Agency | Scriptly",
    "contact.html": "Start a Project with Studiova — Contact Our Team | Scriptly",
    "sign-in.html": "Sign In to Studio Portal — Studiova | Scriptly",
    "sign-up.html": "Create Studio Account — Studiova | Scriptly",
    "privacy-policy.html": "Privacy Policy — Studiova Creative Studio | Scriptly",
    "terms-and-conditions.html": "Terms & Conditions — Studiova Creative Studio | Scriptly",
    "404.html": "404 Page Not Found — Studiova Creative Studio | Scriptly",
}

META_DESCRIPTION = "Studiova is a luxury creative agency and business portfolio Bootstrap 5 template designed for high-converting design studios, digital agencies, and modern brands."

BUY_BADGE_HTML = '''
  <!-- Scriptly Template Bar -->
  <div style="position: fixed; bottom: 20px; right: 20px; z-index: 99999;">
    <a href="https://scriptly.store/products/studiova-agency-bootstrap-template" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #18181b, #09090b); color: #C1FF72; padding: 12px 20px; border-radius: 9999px; font-family: 'Manrope', sans-serif; font-size: 14px; font-weight: 700; text-decoration: none; box-shadow: 0 10px 25px rgba(0,0,0,0.5), 0 0 0 1px rgba(193, 255, 114, 0.3); transition: transform 0.2s, box-shadow 0.2s;">
      <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: #C1FF72; box-shadow: 0 0 10px #C1FF72;"></span>
      <span>Get Studiova on Scriptly</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
    </a>
  </div>
'''

html_files = glob.glob(f"{TARGET_DIR}/*.html")

for filepath in html_files:
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Fix ../assets/ to assets/
    content = content.replace("../assets/", "assets/")

    # 2. Replace Wrappixel references
    content = content.replace("info@wrappixel.com", "support@scriptly.store")
    content = content.replace("mailto:info@wrappixel.com", "mailto:support@scriptly.store")
    content = content.replace("https://www.wrappixel.com/templates/", "https://scriptly.store/products/studiova-agency-bootstrap-template")
    content = content.replace("https://www.wrappixel.com/", "https://scriptly.store/")
    content = content.replace("www.wrappixel.com", "scriptly.store")

    # 3. Update CTA button text if "Get This Template"
    content = re.sub(
        r'<a([^>]*?)href="https://scriptly\.store/products/studiova-agency-bootstrap-template"([^>]*?)>Get This Template</a>',
        r'<a\1href="https://scriptly.store/products/studiova-agency-bootstrap-template"\2>Buy on Scriptly</a>',
        content
    )

    # 4. Update Title
    if filename in TITLE_MAP:
        new_title = TITLE_MAP[filename]
        content = re.sub(r'<title>.*?</title>', f'<title>{new_title}</title>', content, flags=re.IGNORECASE)

    # 5. Add meta description and OpenGraph tags if missing
    if '<meta name="description"' not in content:
        meta_tags = f'''  <meta name="description" content="{META_DESCRIPTION}">
  <meta property="og:title" content="{TITLE_MAP.get(filename, 'Studiova Agency Template')}">
  <meta property="og:description" content="{META_DESCRIPTION}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://scriptly.store/products/studiova-agency-bootstrap-template">
  <meta name="author" content="Scriptly Store (https://scriptly.store/)">
'''
        content = re.sub(r'(<meta name="viewport"[^>]*>)', r'\1\n' + meta_tags, content)

    # 6. Add Buy Badge before </body>
    if 'Get Studiova on Scriptly' not in content and '</body>' in content:
        content = content.replace('</body>', f'{BUY_BADGE_HTML}\n</body>')

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"Successfully processed {len(html_files)} HTML files in {TARGET_DIR}")
