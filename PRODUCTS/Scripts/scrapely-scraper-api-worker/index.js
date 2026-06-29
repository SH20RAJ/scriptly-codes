/**
 * SCRAPELY - High-Performance Web Scraper & Metadata API
 * Fully deployable Cloudflare Worker scraping page content, titles, meta description,
 * open-graph attributes, links, and images natively using HTMLRewriter.
 *
 * For licensing, credits, or source, see: https://scriptly.store/products/scrapely-scraper-api-worker
 */

export default {
  async fetch(request, env) {
    // 1. Enable CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-API-Key',
      'Content-Type': 'application/json'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const targetUrl = url.searchParams.get('url');

    if (!targetUrl) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing query parameter: url. Example: /scrape?url=https://example.com'
      }), { status: 400, headers: corsHeaders });
    }

    // 2. Validate API Key (Optional)
    const apiKey = request.headers.get('X-API-Key') || url.searchParams.get('key');
    if (env.API_KEY && apiKey !== env.API_KEY) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Unauthorized: Invalid API Key'
      }), { status: 401, headers: corsHeaders });
    }

    try {
      // Fetch target page
      const response = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Scrapely/1.0'
        }
      });

      if (!response.ok) {
        return new Response(JSON.stringify({
          success: false,
          error: `Failed to fetch target page: Status ${response.status}`
        }), { status: 502, headers: corsHeaders });
      }

      // 3. Parse HTML using Cloudflare HTMLRewriter
      const data = {
        title: '',
        description: '',
        canonical: '',
        og: {},
        headings: { h1: [], h2: [] },
        images: [],
        links: []
      };

      const rewriter = new HTMLRewriter()
        .on('title', {
          text(text) {
            data.title += text.text;
          }
        })
        .on('meta', {
          element(element) {
            const name = element.getAttribute('name');
            const property = element.getAttribute('property');
            const content = element.getAttribute('content');

            if (name === 'description') data.description = content;
            if (name === 'canonical') data.canonical = content;

            if (property && property.startsWith('og:')) {
              const key = property.substring(3);
              data.og[key] = content;
            }
          }
        })
        .on('h1', {
          text(text) {
            const val = text.text.trim();
            if (val && !text.lastInTextNode) {
              data.headings.h1.push(val);
            }
          }
        })
        .on('h2', {
          text(text) {
            const val = text.text.trim();
            if (val && !text.lastInTextNode) {
              data.headings.h2.push(val);
            }
          }
        })
        .on('img', {
          element(element) {
            const src = element.getAttribute('src');
            const alt = element.getAttribute('alt');
            if (src) {
              data.images.push({ src, alt: alt || '' });
            }
          }
        })
        .on('a', {
          element(element) {
            const href = element.getAttribute('href');
            if (href && href.startsWith('http')) {
              data.links.push(href);
            }
          }
        });

      await rewriter.transform(response).arrayBuffer();

      // Clean up lists (remove duplicates and empty items)
      data.title = data.title.trim();
      data.headings.h1 = [...new Set(data.headings.h1)].filter(Boolean);
      data.headings.h2 = [...new Set(data.headings.h2)].filter(Boolean);
      data.links = [...new Set(data.links)];
      data.images = data.images.filter((img, index, self) =>
        index === self.findIndex((t) => t.src === img.src)
      );

      return new Response(JSON.stringify({
        success: true,
        url: targetUrl,
        data: data
      }), { headers: corsHeaders });

    } catch (err) {
      return new Response(JSON.stringify({
        success: false,
        error: `Scraping error: ${err.message}`
      }), { status: 500, headers: corsHeaders });
    }
  }
};
