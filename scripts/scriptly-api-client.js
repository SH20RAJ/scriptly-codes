/**
 * ScriptlyStore Public API Client (CommonJS & ES Module compatible JavaScript)
 * Documentation: https://scriptly.store/docs/api
 */

class ScriptlyApiClient {
  constructor(baseUrl = "https://scriptly.store") {
    this.baseUrl = baseUrl.replace(/\/$/, "");
  }

  async getProducts(params = {}) {
    const url = new URL(`${this.baseUrl}/api/products.json`);
    if (params.limit !== undefined) url.searchParams.set("limit", params.limit);
    if (params.category) url.searchParams.set("category", params.category);
    if (params.subcategory) url.searchParams.set("subcategory", params.subcategory);
    if (params.slug) url.searchParams.set("slug", params.slug);
    if (params.featured !== undefined) url.searchParams.set("featured", params.featured ? "true" : "false");

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error(`ScriptlyStore API Error (${response.status}): ${response.statusText}`);
    }

    const data = await response.json();
    return data.products || [];
  }

  async getProductBySlug(slug) {
    const products = await this.getProducts({ slug });
    return products.length > 0 ? products[0] : null;
  }

  async getBlogPosts(params = {}) {
    const url = new URL(`${this.baseUrl}/api/blog.json`);
    if (params.limit !== undefined) url.searchParams.set("limit", params.limit);
    if (params.category) url.searchParams.set("category", params.category);
    if (params.slug) url.searchParams.set("slug", params.slug);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error(`ScriptlyStore Blog API Error (${response.status}): ${response.statusText}`);
    }

    const data = await response.json();
    return data.posts || data.blogs || data.articles || [];
  }
}

const scriptly = new ScriptlyApiClient();

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ScriptlyApiClient, scriptly };
}
if (typeof window !== "undefined") {
  window.ScriptlyApiClient = ScriptlyApiClient;
  window.scriptly = scriptly;
}
