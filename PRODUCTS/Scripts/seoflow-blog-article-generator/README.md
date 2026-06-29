# SEOFLOW — Automated Blog Article SEO Markdown Writer

SEOFlow is a high-performance Python CLI bot that automates search-optimized content creation. Given a topic keyword, it uses the Google Gemini AI API to write a structured, fully drafted markdown blog post (including YAML frontmatter metadata, H1-H3 sections, excerpts, and tags) and downloads a matching featured topic image from Unsplash.

## Purchase & Licensing
You can view details, purchase commercial licenses, or get support for this script on the [Scriptly Store Product Page](https://scriptly.store/products/seoflow-blog-article-generator).

## Features
- **Gemini AI Drafting**: Generates detailed, SEO-friendly 800+ word posts using the `gemini-pro` model.
- **Unsplash Automation**: Automatically fetches and downloads a high-quality topic image to serve as the post header thumbnail.
- **Structured YAML Frontmatter**: Output is structured with title, excerpt, date, tags, and image paths—perfect for Jekyll, Hugo, Astro, or Gatsby sites.
- **Offline CLI Capability**: Runs instantly from your command prompt.

## Setup & Running Locally

### 1. Prerequisites
- Get a free Google Gemini API Key from Google AI Studio.
- Ensure Python 3.9+ is installed on your computer.

### 2. Configure Environment
Set up your virtual environment and install packages:
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3. Run Generator
Expose your Gemini API Key and start the script:
```bash
export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
python generator.py "healthy breakfast habits"
```
Or simply run without arguments to trigger interactive prompt inputs:
```bash
python generator.py
```
A new directory prefixed with `output-` will be created containing `article.md` and `featured.jpg`.

## Need Help?
- Get support at: [https://scriptly.store/support](https://scriptly.store/support)
- Find more templates at: [https://scriptly.store/](https://scriptly.store/)
