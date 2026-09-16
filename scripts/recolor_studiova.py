#!/usr/bin/env python3
import glob
import re

TARGET_DIR = "PRODUCTS/Agency/studiova-agency-bootstrap-template"

# 1. Update CSS colors: #C1FF72 -> #E2B774 (Champagne Gold)
css_file = f"{TARGET_DIR}/assets/css/styles.css"
with open(css_file, "r", encoding="utf-8") as f:
    css = f.read()

css = re.sub(r'#C1FF72', '#E2B774', css, flags=re.IGNORECASE)
css = css.replace('193, 255, 114', '226, 183, 116')
css = css.replace('#daffaa', '#fde68a')
css = css.replace('#e0ffb9', '#fef3c7')

with open(css_file, "w", encoding="utf-8") as f:
    f.write(css)

print("Updated CSS color palette to Champagne Gold (#E2B774)")

# 2. Update HTML pages (Buy badge & titles)
html_files = glob.glob(f"{TARGET_DIR}/*.html")
for hfile in html_files:
    with open(hfile, "r", encoding="utf-8") as f:
        html = f.read()
    
    html = re.sub(r'#C1FF72', '#E2B774', html, flags=re.IGNORECASE)
    html = html.replace('193, 255, 114', '226, 183, 116')
    html = html.replace('rgba(193, 255, 114,', 'rgba(226, 183, 116,')
    html = html.replace('Studiova — Luxury Agency & Creative Business', 'Studiova — Luxury Atelier & Digital Agency')
    
    with open(hfile, "w", encoding="utf-8") as f:
        f.write(html)

print(f"Updated {len(html_files)} HTML pages for Studiova")
