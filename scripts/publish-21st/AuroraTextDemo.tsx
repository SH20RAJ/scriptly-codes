"use client";

import React, { useState } from "react";
import AuroraText from "./AuroraText";

export default function AuroraTextDemo() {
  const [speed, setSpeed] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState<"cyber" | "sunset" | "emerald">("cyber");

  const themes = {
    cyber: ["#f43f5e", "#8b5cf6", "#06b6d4", "#3b82f6", "#f43f5e"],
    sunset: ["#ff512f", "#dd2476", "#f09819", "#ff512f"],
    emerald: ["#10b981", "#06b6d4", "#3b82f6", "#a855f7", "#10b981"],
  };

  return (
    <div className="flex min-h-[420px] w-full flex-col items-center justify-center rounded-2xl bg-zinc-950 p-8 text-center border border-zinc-900 shadow-2xl">
      <div className="max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-950/40 px-3 py-1 text-xs font-medium text-violet-300">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          Ultra-Smooth Shimmer
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
          Build Websites That{" "}
          <AuroraText
            colors={themes[selectedTheme]}
            speed={speed}
            className="tracking-normal"
          >
            Hypnotize
          </AuroraText>
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
          Multi-layer fluid spectral refraction wave across modern typography. Zero dependencies, 60fps GPU-accelerated.
        </p>

        {/* Interactive Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex rounded-lg border border-zinc-800 bg-zinc-900/90 p-1">
            <button
              onClick={() => setSelectedTheme("cyber")}
              className={`px-3 py-1 text-xs rounded-md font-medium transition ${
                selectedTheme === "cyber" ? "bg-violet-600 text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Cyber
            </button>
            <button
              onClick={() => setSelectedTheme("sunset")}
              className={`px-3 py-1 text-xs rounded-md font-medium transition ${
                selectedTheme === "sunset" ? "bg-rose-600 text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Sunset
            </button>
            <button
              onClick={() => setSelectedTheme("emerald")}
              className={`px-3 py-1 text-xs rounded-md font-medium transition ${
                selectedTheme === "emerald" ? "bg-emerald-600 text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Emerald
            </button>
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300">
            <span>Speed</span>
            <button
              onClick={() => setSpeed((s) => (s >= 2 ? 0.5 : s + 0.5))}
              className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-violet-300 hover:bg-zinc-700"
            >
              {speed}x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
