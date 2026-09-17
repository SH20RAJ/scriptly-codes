"use client";

import React, { useState } from "react";
import ShimmerButton from "./ShimmerButton";

export default function ShimmerButtonDemo() {
  const [shimmerColor, setShimmerColor] = useState("#8b5cf6");

  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-2xl bg-zinc-950 p-8 border border-zinc-900 shadow-2xl">
      <div className="max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Tactile Shimmer Action</h2>
        <p className="text-sm text-zinc-400 mb-8">
          High-conversion micro-interaction button with rotating specular light reflection.
        </p>

        <div className="flex justify-center mb-8">
          <ShimmerButton
            shimmerColor={shimmerColor}
            shimmerDuration="2s"
            className="text-base px-8 py-4"
          >
            <span>Claim Your Access</span>
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </ShimmerButton>
        </div>

        {/* Shimmer color selector */}
        <div className="flex items-center justify-center gap-3">
          {[
            { label: "White", color: "#ffffff" },
            { label: "Purple", color: "#8b5cf6" },
            { label: "Cyan", color: "#06b6d4" },
            { label: "Amber", color: "#f59e0b" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setShimmerColor(item.color)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium transition ${
                shimmerColor === item.color
                  ? "border-white bg-zinc-800 text-white"
                  : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
