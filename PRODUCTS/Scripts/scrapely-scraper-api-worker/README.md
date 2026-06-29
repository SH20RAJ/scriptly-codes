# SCRAPELY — High-Performance Web Scraper & Metadata API

Scrapely is a lightning-fast, production-grade web scraping API built as a serverless Cloudflare Worker. It utilizes Cloudflare's native V8 `HTMLRewriter` engine to parse HTML files at the edge, returning structured JSON containing headings, links, canonicals, images, and open-graph metadata.

## Purchase & Licensing
You can view details, purchase commercial licenses, or get support for this script on the [Scriptly Store Product Page](https://scriptly.store/products/scrapely-scraper-api-worker).

## Features
- **Ultra High-Performance**: Parses elements streaming on the fly without heavy memory overheads.
- **Structured Data Outputs**: Extracts `title`, `meta description`, `h1`/`h2` arrays, full image references (`src` & `alt`), and `og:` properties.
- **CORS Enabled**: Out of the box support for cross-origin frontend requests.
- **API Key Guarding**: Optionally lock access by setting the `API_KEY` environment variable.

## Setup & Deployment

### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) on your computer.
- Install Wrangler globally:
  ```bash
  npm install -g wrangler
  ```

### 2. Configure & Deploy
You can optionally open [wrangler.toml](file:///Users/shaswatraj/Desktop/earn/scriptly-codes/SELF_CREATED/Bots/scrapely-scraper-api-worker/wrangler.toml) and add a custom secret API key inside `vars.API_KEY`.
Run the deployment command:
```bash
wrangler deploy
```
After a successful upload, wrangler will print your live endpoint URL (e.g. `https://scrapely-scraper-api-worker.username.workers.dev`).

## API Usage

### Endpoint
`GET https://<your-worker-url>/scrape`

### Query Parameters
- `url` (Required): The full, url-encoded webpage link to scrape.
- `key` (Optional): Required only if `API_KEY` is set in your configuration.

### Example Request
```http
GET https://scrapely-scraper-api-worker.username.workers.dev/scrape?url=https://scriptly.store
```

### Example Response
```json
{
  "success": true,
  "url": "https://scriptly.store",
  "data": {
    "title": "Scriptly Store — Premium Code Templates",
    "description": "Buy and sell premium developer resources...",
    "canonical": "https://scriptly.store/",
    "og": {
      "title": "Scriptly Store",
      "image": "https://scriptly.store/logo.png"
    },
    "headings": {
      "h1": ["Premium Code Marketplace"],
      "h2": ["Explore Templates", "Featured Scripts"]
    },
    "images": [
      { "src": "https://scriptly.store/banner.jpg", "alt": "Marketplace Banner" }
    ],
    "links": [
      "https://github.com/sh20raj"
    ]
  }
}
```

## Need Help?
- Get support at: [https://scriptly.store/support](https://scriptly.store/support)
- Find more templates at: [https://scriptly.store/](https://scriptly.store/)
