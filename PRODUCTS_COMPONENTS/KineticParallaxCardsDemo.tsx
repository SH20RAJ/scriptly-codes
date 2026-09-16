"use client";

import React from "react";
import { KineticParallaxCards } from "./KineticParallaxCards";

export default function KineticParallaxCardsDemo() {
  return (
    <div className="relative flex min-h-[560px] w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-[#090a0f] p-8 text-white select-none border border-slate-800 shadow-2xl">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px]" />

      {/* Header */}
      <div className="relative z-20 flex flex-col items-center text-center mb-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/30 px-3.5 py-1 text-xs font-semibold text-amber-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          KINETIC 3D PARALLAX ENGINE
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Velour Floating Portfolio
        </h2>
        <p className="mt-1 text-xs text-slate-400 max-w-md">
          Move your cursor across the deck to experience real-time 3D parallax vector tracking and hover lift
        </p>
      </div>

      {/* Cards Deck */}
      <div className="relative z-10 w-full max-w-5xl my-auto">
        <KineticParallaxCards />
      </div>

      {/* Action triggers */}
      <div className="relative z-20 mt-4 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://scriptly.store/products/velour-kinetic-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-amber-500/20 transition-all duration-200 hover:from-amber-400 hover:to-amber-500 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Get Velour Template</span>
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

        <a
          href="https://velour-agency-theme.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
        >
          <span>Live Demo ↗</span>
        </a>
      </div>

      {/* Footer Backlink Attribution */}
      <a
        href="https://scriptly.store/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-20 mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-amber-400 transition-colors"
      >
        <span>Architected with precision for</span>
        <span className="font-semibold text-amber-400 underline underline-offset-4">Scriptly.store ↗</span>
      </a>
    </div>
  );
}
