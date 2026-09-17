"use client";

import React, { useState } from "react";
import ParticlesCanvas from "./ParticlesCanvas";

export default function ParticlesCanvasDemo() {
  const [colorMode, setColorMode] = useState<"violet" | "cyan" | "emerald">("violet");

  const colors = {
    violet: {
      particle: "rgba(168, 85, 247, 0.8)",
      line: "rgba(168, 85, 247, 0.3)",
      badge: "border-purple-500/30 text-purple-300 bg-purple-950/40",
    },
    cyan: {
      particle: "rgba(6, 182, 212, 0.8)",
      line: "rgba(6, 182, 212, 0.3)",
      badge: "border-cyan-500/30 text-cyan-300 bg-cyan-950/40",
    },
    emerald: {
      particle: "rgba(16, 185, 129, 0.8)",
      line: "rgba(16, 185, 129, 0.3)",
      badge: "border-emerald-500/30 text-emerald-300 bg-emerald-950/40",
    },
  };

  return (
    <div className="relative flex min-h-[460px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-zinc-950 p-8 border border-zinc-900 shadow-2xl">
      <ParticlesCanvas
        particleCount={75}
        particleColor={colors[colorMode].particle}
        lineColor={colors[colorMode].line}
        maxDistance={120}
        speed={0.9}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-lg text-center backdrop-blur-md rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-8 shadow-2xl">
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${colors[colorMode].badge}`}>
          Interactive Physics Grid
        </div>

        <h2 className="text-3xl font-black tracking-tight text-white mb-3">
          Reactive Particle Web
        </h2>
        <p className="text-sm text-zinc-300 mb-6">
          Move your cursor across the canvas to disturb and disperse the node mesh in real-time.
        </p>

        <div className="flex justify-center gap-2">
          {(["violet", "cyan", "emerald"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setColorMode(mode)}
              className={`capitalize px-3 py-1 text-xs rounded-lg font-medium transition ${
                colorMode === mode
                  ? "bg-white text-zinc-950 font-bold"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
