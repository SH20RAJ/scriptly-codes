# SCRAPELY — Web Scraper & Metadata API Cloudflare Worker

- **Slug**: `scrapely-scraper-api-worker`
- **Category**: `scripts`
- **Subcategory**: `cloudflare-workers`
- **Price**: `2900`
- **Tags**: `cloudflare-workers, web-scraper, metadata-api, HTMLRewriter, serverless, javascript, api-proxy`
- **Demo URL**: `https://scrapely-scraper-api-worker.sh20raj.workers.dev/scrape?url=https://scriptly.store`
- **Short Description**: Turn any website into clean structured JSON metadata instantly at the edge using Cloudflare's native HTMLRewriter streaming engine.

---

## 🕷️ Convert Any Webpage to Structured JSON Instantly

**Scrapely** is a developer-focused, high-performance web scraper API proxy built for Cloudflare Workers. 

Unlike traditional Node.js scraper setups that require heavy headless browser processes (Puppeteer) or memory-intensive DOM parsers (JSDOM), Scrapely uses Cloudflare's native streaming V8 **HTMLRewriter** engine. It parses tags, attributes, links, and content blocks on the fly as the HTML bytes flow through the edge network.

This ensures sub-millisecond response latency, extremely low CPU memory usage, and zero hosting infrastructure costs.

### Key Highlights

* **Streaming HTMLRewriter Engine**: Natively reads and parses tag streams, resulting in exceptional speed and low resource footprint.
* **Metadata & OG Extraction**: Returns clean structured variables for page title, canonical links, description meta tags, and open-graph properties.
* **SEO Structure Auditing**: Collects `h1` and `h2` heading texts to help audit content outlines.
* **CORS Support**: Configured preflight headers to let frontend React/Next.js platforms call the API directly.
* **Security Settings**: Easy configuration to restrict access using custom API keys in request headers.

---

## 🛠️ Setup & Customization
To deploy Scrapely, install wrangler CLI globally, set your custom security API key in `wrangler.toml` configuration variables, and deploy to your serverless account.

* **Find More Templates**: [https://scriptly.store/](https://scriptly.store/)
* **Get Support**: [https://scriptly.store/support](https://scriptly.store/support)
