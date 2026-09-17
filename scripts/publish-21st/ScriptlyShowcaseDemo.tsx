"use client";

import React, { useState } from "react";
import ScriptlyShowcase from "./ScriptlyShowcase";

export default function ScriptlyShowcaseDemo() {
  const [category, setCategory] = useState<string | undefined>(undefined);

  return (
    <div className="flex min-h-[600px] w-full flex-col items-center justify-center rounded-2xl bg-zinc-950 p-6 md:p-10 border border-zinc-900 shadow-2xl">
      <div className="w-full max-w-6xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              ScriptlyStore Live Catalog
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Live CORS feed from <code className="text-indigo-400">https://scriptly.store/api/products.json</code>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCategory(undefined)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                category === undefined
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setCategory("landing-pages")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                category === "landing-pages"
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              Landing Pages
            </button>
            <button
              onClick={() => setCategory("ui-kits")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                category === "ui-kits"
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              UI Kits
            </button>
          </div>
        </div>

        <ScriptlyShowcase category={category} limit={6} />
      </div>
    </div>
  );
}
