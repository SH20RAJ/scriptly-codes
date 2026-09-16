/**
 * ScriptlyStore Public API Client (TypeScript / JavaScript)
 * Official Documentation: https://scriptly.store/docs/api
 *
 * Supports Cross-Origin Resource Sharing (CORS) for direct browser & server integration.
 */

export interface ScriptlyProduct {
  id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  category?: string;
  categoryName?: string;
  subcategory?: string | null;
  subcategoryName?: string | null;
  tags?: string[];
  thumbnail: string;
  previewGif?: string | null;
  screenshots?: string[];
  videoUrl?: string | null;
  demoUrl?: string | null;
  price: number;
  priceFormatted: string;
  effectivePrice: number;
  effectivePriceFormatted: string;
  isFree: boolean;
  hasDiscount?: boolean;
  discountPercent?: number;
  promoEnd?: string | null;
  version?: string;
  featured?: boolean;
  rating?: string | number;
  ratingCount?: number;
  storeName: string;
  url: string;
  createdAt?: string;
}

export interface ScriptlyProductsResponse {
  success: boolean;
  count: number;
  products: ScriptlyProduct[];
}

export interface ScriptlyBlogPost {
  id?: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  category?: string;
  publishedAt?: string;
  url?: string;
}

export interface ScriptlyBlogResponse {
  success: boolean;
  count: number;
  posts: ScriptlyBlogPost[];
}

export interface ProductQueryParams {
  limit?: number;
  category?: string;
  subcategory?: string;
  slug?: string;
  featured?: boolean;
}

export interface BlogQueryParams {
  limit?: number;
  category?: string;
  slug?: string;
}

export class ScriptlyApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = "https://scriptly.store") {
    this.baseUrl = baseUrl.replace(/\/$/, "");
  }

  /**
   * Fetch products with query parameters matching https://scriptly.store/docs/api
   */
  async getProducts(params: ProductQueryParams = {}): Promise<ScriptlyProduct[]> {
    const url = new URL(`${this.baseUrl}/api/products.json`);
    if (params.limit !== undefined) url.searchParams.set("limit", params.limit.toString());
    if (params.category) url.searchParams.set("category", params.category);
    if (params.subcategory) url.searchParams.set("subcategory", params.subcategory);
    if (params.slug) url.searchParams.set("slug", params.slug);
    if (params.featured !== undefined) url.searchParams.set("featured", params.featured ? "true" : "false");

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`ScriptlyStore API Error (${response.status}): ${response.statusText}`);
    }

    const data = (await response.json()) as ScriptlyProductsResponse;
    return data.products || [];
  }

  /**
   * Fetch a single product by exact slug
   */
  async getProductBySlug(slug: string): Promise<ScriptlyProduct | null> {
    const products = await this.getProducts({ slug });
    return products.length > 0 ? products[0] : null;
  }

  /**
   * Fetch blog posts matching https://scriptly.store/docs/api
   */
  async getBlogPosts(params: BlogQueryParams = {}): Promise<ScriptlyBlogPost[]> {
    const url = new URL(`${this.baseUrl}/api/blog.json`);
    if (params.limit !== undefined) url.searchParams.set("limit", params.limit.toString());
    if (params.category) url.searchParams.set("category", params.category);
    if (params.slug) url.searchParams.set("slug", params.slug);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`ScriptlyStore Blog API Error (${response.status}): ${response.statusText}`);
    }

    const data = (await response.json()) as any;
    return data.posts || data.blogs || data.articles || [];
  }
}

// Default singleton export
export const scriptly = new ScriptlyApiClient();
