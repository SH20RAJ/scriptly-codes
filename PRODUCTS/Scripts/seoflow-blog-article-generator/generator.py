# SEOFLOW - SEO Blog Article Generator Bot
# A high-performance Python script to generate markdown articles and download topic photos.
# Powered by Google Gemini AI API & Unsplash.
#
# For licensing, credits, or source, see: https://scriptly.store/products/seoflow-blog-article-generator

import os
import sys
import re
import requests
import google.generativeai as genai

# Configure APIs
GEMINI_KEY = os.environ.get("GEMINI_API_KEY", "")
if GEMINI_KEY:
    genai.configure(api_key=GEMINI_KEY)

def clean_filename(title):
    return re.sub(r'[^a-zA-Z0-9_-]', '', title.lower().replace(' ', '-'))

def download_featured_image(query, output_dir):
    print(f"📷 Searching Unsplash for featured image matching: '{query}'...")
    # Unsplash Source redirect URL
    url = f"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=80" # Fallback high-quality photo
    
    # We can fetch custom search term using Unsplash Source redirect
    search_url = f"https://source.unsplash.com/featured/1200x800/?{query}"
    
    try:
        r = requests.get(search_url, allow_redirects=True, timeout=15)
        if r.status_code == 200:
            url = r.url
    except Exception as e:
        print(f"⚠️ Failed to get custom Unsplash redirect, using fallback: {e}")

    # Download actual image
    try:
        img_data = requests.get(url, timeout=15).content
        img_path = os.path.join(output_dir, "featured.jpg")
        with open(img_path, 'wb') as f:
            f.write(img_data)
        print(f"✅ Image downloaded successfully: {img_path}")
        return "featured.jpg"
    except Exception as e:
        print(f"❌ Failed to download image: {e}")
    return ""

def generate_article(keyword):
    print(f"🤖 Generating SEO Blog Post for: '{keyword}'...")
    
    prompt = (
        f"Write a highly engaging, SEO-optimized blog article about '{keyword}'.\n\n"
        "Requirements:\n"
        "1. Start with a YAML Frontmatter block containing: title, date, excerpt, tags, and 'featured_image: ./featured.jpg'.\n"
        "2. Include a compelling H1 title inside the markdown.\n"
        "3. Use structured headings (H2, H3), lists, and bullet points.\n"
        "4. Focus on deep readability, keyword density, and practical advice.\n"
        "5. The article should be at least 800 words.\n"
        "6. Do not include markdown code block backticks around the frontmatter block, output raw text."
    )

    if not GEMINI_KEY:
        print("⚠️ GEMINI_API_KEY environment variable not set. Generating mock article text...")
        return (
            "---\n"
            f"title: Ultimate Guide to {keyword}\n"
            "date: 2026-06-29\n"
            f"excerpt: Learn everything you need to know about {keyword} in this comprehensive guide.\n"
            f"tags: {keyword.replace(' ', ', ')}, guide, seo\n"
            "featured_image: ./featured.jpg\n"
            "---\n\n"
            f"# The Ultimate Guide to {keyword}\n\n"
            "This is a placeholder article since no Gemini API Key was configured. "
            "Configure GEMINI_API_KEY to generate rich AI blog content automatically.\n"
        )

    try:
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        print(f"❌ Gemini Generation Error: {e}")
        sys.exit(1)

def main():
    if len(sys.argv) < 2:
        keyword = input("🔑 Enter topic keyword: ").strip()
    else:
        keyword = " ".join(sys.argv[1:]).strip()

    if not keyword:
        print("❌ Please enter a valid keyword.")
        return

    # 1. Generate SEO Text Content
    article_text = generate_article(keyword)

    # Determine title from YAML Frontmatter or use keyword
    title_match = re.search(r'title:\s*(.*)', article_text)
    folder_name = clean_filename(title_match.group(1) if title_match else keyword)
    
    output_dir = os.path.join(os.getcwd(), f"output-{folder_name}")
    os.makedirs(output_dir, exist_ok=True)

    # 2. Download matching illustration
    download_featured_image(keyword, output_dir)

    # 3. Write Markdown file
    md_path = os.path.join(output_dir, "article.md")
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(article_text)

    print(f"\n🎉 Generation Complete! Product created in: {output_dir}/")
    print(f"📄 Markdown: {md_path}")

if __name__ == '__main__':
    main()
