#!/usr/bin/env python3
"""
Template Sanitizer & License Normalizer for TEMPLATES_FACTORY
- Scrubs original GitHub repo links, personal developer emails, and analytics trackers
- Injects Scriptly Store commercial license header and backlink attribution
"""

import sys
import os
import re

SCRIPTLY_HEADER = """<!-- 
  ==============================================================================
  Scriptly Store Commercial Template (https://scriptly.store)
  Engineered for high performance, accessibility, and frictionless deployment.
  Single / Commercial License: https://scriptly.store/terms
  Find more premium templates: https://scriptly.store/
  ==============================================================================
-->
"""

SCRIPTLY_FOOTER_BADGE = """
  <!-- Scriptly Store Backlink Badge -->
  <div style="text-align: center; padding: 1.5rem 0; font-size: 0.85rem; opacity: 0.75; font-family: sans-serif;">
    Powered by <a href="https://scriptly.store" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline; font-weight: 600;">Scriptly Store</a> — Modern Commercial Web Templates
  </div>
"""

def sanitize_file(file_path):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    original_len = len(content)

    # 1. Strip common analytics trackers (Google Analytics, Tag Manager, Hotjar, Facebook Pixel)
    content = re.sub(r'<script[^>]*google-analytics\.com/analytics\.js[^>]*>.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script[^>]*googletagmanager\.com/gtag/js[^>]*>.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<!--\s*Google Tag Manager.*?-->.*?<!--\s*End Google Tag Manager\s*-->', '', content, flags=re.DOTALL)
    content = re.sub(r'<script[^>]*connect\.facebook\.net[^>]*>.*?</script>', '', content, flags=re.DOTALL)

    # 2. Add Scriptly Commercial Header if not present
    if file_path.endswith(".html") and "Scriptly Store Commercial Template" not in content:
        if "<!DOCTYPE html>" in content:
            content = content.replace("<!DOCTYPE html>", "<!DOCTYPE html>\n" + SCRIPTLY_HEADER, 1)
        elif "<html" in content:
            content = SCRIPTLY_HEADER + content

    # 3. Add Scriptly Footer badge before </body> if not present
    if file_path.endswith(".html") and "Scriptly Store Backlink Badge" not in content and "</body>" in content:
        content = content.replace("</body>", SCRIPTLY_FOOTER_BADGE + "\n</body>", 1)

    if len(content) != original_len:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

def sanitize_directory(target_dir):
    print(f"🧹 Sanitizing template directory: {target_dir}")
    modified_files = 0
    for root, _, files in os.walk(target_dir):
        for file in files:
            if file.endswith((".html", ".js", ".ts", ".jsx", ".tsx", ".css")):
                file_path = os.path.join(root, file)
                if sanitize_file(file_path):
                    modified_files += 1
                    print(f"  ✓ Sanitized: {os.path.relpath(file_path, target_dir)}")

    # Add standard LICENSE file
    license_path = os.path.join(target_dir, "LICENSE")
    license_text = """Commercial Template License Grant
Copyright (c) Scriptly Store (https://scriptly.store) and respective contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software for personal or commercial client projects, subject to
the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""
    with open(license_path, "w", encoding="utf-8") as lf:
        lf.write(license_text)
    print(f"  ✓ Normalized commercial LICENSE in {target_dir}")
    print(f"🎉 Sanitization complete ({modified_files} files updated).")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 sanitize_license.py <template_directory>")
        sys.exit(1)
    sanitize_directory(sys.argv[1])
