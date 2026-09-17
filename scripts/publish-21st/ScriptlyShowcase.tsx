"use client";

import React, { useEffect, useState, type FC } from "react";

export interface ScriptlyProductItem {
  id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  category?: string;
  categoryName?: string;
  thumbnail: string;
  demoUrl?: string | null;
  priceFormatted: string;
  effectivePriceFormatted: string;
  rating?: string | number;
  ratingCount?: number;
  url: string;
}

export interface ScriptlyShowcaseProps {
  category?: string;
  limit?: number;
  featuredOnly?: boolean;
  className?: string;
}

const FALLBACK_PRODUCTS: ScriptlyProductItem[] = [
  {
    id: "vortex",
    title: "VORTEX — Animated Agency Landing Page",
    slug: "vortex-agency-magicui",
    shortDescription: "Premium agency landing page with 14 animated MagicUI components. Next.js 16 + Tailwind CSS 4.",
    categoryName: "Landing Pages",
    thumbnail: "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/r2t4eb1ac03zwpcwsk5z.png",
    demoUrl: "https://vortex-agency.surge.sh",
    priceFormatted: "29.00",
    effectivePriceFormatted: "29.00",
    rating: "5.0",
    ratingCount: 12,
    url: "https://scriptly.store/products/vortex-agency-magicui"
  },
  {
    id: "aura-ai",
    title: "AURA — Premium AI SaaS Landing Page",
    slug: "aura-ai-template",
    shortDescription: "Ultra-clean dark mode SaaS landing page optimized for high-intent B2B conversion.",
    categoryName: "Landing Pages",
    thumbnail: "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@a6a4f912f0928cd4a7468fe55f539eed6f61db41/aura-screenshot-f2af123aaf190589.png",
    demoUrl: "https://aura-ai-template.surge.sh",
    priceFormatted: "49.00",
    effectivePriceFormatted: "49.00",
    rating: "4.9",
    ratingCount: 18,
    url: "https://scriptly.store/products/aura-ai-template"
  },
  {
    id: "kraft",
    title: "KRAFT — Premium 3D Hand-Drawn Portfolio",
    slug: "kraft-premium-3d-hand-drawn-portfolio-theme",
    shortDescription: "Immersive 3D storytelling portfolio with Three.js camera transitions and physics.",
    categoryName: "Portfolio",
    thumbnail: "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/PRODUCTS/Portfolio/kraft-theme/public/thumbnail.png",
    demoUrl: "https://kraft-portfolio-theme.surge.sh",
    priceFormatted: "29.00",
    effectivePriceFormatted: "29.00",
    rating: "4.8",
    ratingCount: 9,
    url: "https://scriptly.store/products/kraft-premium-3d-hand-drawn-portfolio-theme"
  }
];

export const ScriptlyShowcase: FC<ScriptlyShowcaseProps> = ({
  category,
  limit = 6,
  featuredOnly = false,
  className = "",
}) => {
  const [products, setProducts] = useState<ScriptlyProductItem[]>(FALLBACK_PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        setLoading(true);
        const url = new URL("https://scriptly.store/api/products.json");
        if (category) url.searchParams.set("category", category);
        if (limit) url.searchParams.set("limit", limit.toString());
        if (featuredOnly) url.searchParams.set("featured", "true");

        const res = await fetch(url.toString());
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (isMounted && data && Array.isArray(data.products) && data.products.length > 0) {
          setProducts(data.products);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message || "Failed to load live feed");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, [category, limit, featuredOnly]);

  return (
    <div className={`w-full font-sans ${className}`}>
      {/* Header Badge */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-800/80">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <h2 className="text-sm font-semibold tracking-wider uppercase text-zinc-300">
            ScriptlyStore Live Marketplace
          </h2>
        </div>
        <div className="text-xs text-zinc-400">
          Powered by{" "}
          <a
            href="https://scriptly.store/docs/api"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2"
          >
            Scriptly API
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, limit).map((p) => {
          const hasDiscount = p.priceFormatted !== p.effectivePriceFormatted;
          return (
            <div
              key={p.id || p.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Media Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to high-res dark placeholder
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill */}
                {p.categoryName && (
                  <span className="absolute top-3 left-3 rounded-full bg-zinc-950/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-sm border border-zinc-700/60">
                    {p.categoryName}
                  </span>
                )}

                {/* Rating Badge */}
                {p.rating && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-zinc-950/80 px-2.5 py-1 text-[11px] font-bold text-amber-400 backdrop-blur-sm border border-zinc-700/60">
                    <span>★</span>
                    <span>{p.rating}</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-1 text-base font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-zinc-400 leading-relaxed flex-1">
                  {p.shortDescription || "Production-grade developer template optimized for conversion."}
                </p>

                {/* Price & Actions */}
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-zinc-800/80">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-bold text-white tracking-tight">
                        ${p.effectivePriceFormatted}
                      </span>
                      {hasDiscount && (
                        <span className="text-xs text-zinc-500 line-through">
                          ${p.priceFormatted}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                      Commercial License
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-zinc-700 bg-zinc-800/60 px-2.5 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white transition"
                      >
                        Demo
                      </a>
                    )}
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500 transition shadow-sm hover:shadow-indigo-500/25"
                    >
                      Get It
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScriptlyShowcase;
