"use client";

import React, { useState } from "react";
import { StudiovaMetricsGrid } from "./StudiovaMetricsGrid";

export default function StudiovaMetricsGridDemo() {
  const [triggerKey, setTriggerKey] = useState(0);

  return (
    <div className="relative flex min-h-[540px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#08090d] p-8 text-white select-none border border-slate-800 shadow-2xl">
      {/* Ambience glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C1FF72]/15 blur-[120px]" />

      {/* Header telemetry */}
      <div className="relative z-10 mb-8 flex flex-col items-center text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C1FF72]/30 bg-[#C1FF72]/10 px-3.5 py-1 text-xs font-semibold text-[#C1FF72]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C1FF72] animate-ping" />
          STUDIO PERFORMANCE TELEMETRY
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Agency Impact Metrics
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Animated milestone metrics engineered for high-converting studio portfolios
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="relative z-10 w-full max-w-5xl">
        <StudiovaMetricsGrid key={triggerKey} accentColor="#C1FF72" duration={1800} />
      </div>

      {/* Action triggers */}
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setTriggerKey((k) => k + 1)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white"
        >
          <svg
            className="h-3.5 w-3.5 text-[#C1FF72]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          <span>Re-animate Counters</span>
        </button>

        <a
          href="https://scriptly.store/products/studiova-agency-bootstrap-template"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C1FF72] to-[#a3e635] px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-[#C1FF72]/20 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Get Studiova Template</span>
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>

      {/* Footer Backlink Attribution */}
      <a
        href="https://scriptly.store/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-[#C1FF72] transition-colors"
      >
        <span>Curated digital products available at</span>
        <span className="font-semibold text-[#C1FF72] underline underline-offset-4">Scriptly.store ↗</span>
      </a>
    </div>
  );
}
