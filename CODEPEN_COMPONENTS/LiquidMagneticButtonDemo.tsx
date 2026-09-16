"use client";

import React, { useState } from "react";
import LiquidMagneticButton, { type LiquidMagneticButtonProps } from "./LiquidMagneticButton";

export default function LiquidMagneticButtonDemo() {
  const [variant, setVariant] = useState<LiquidMagneticButtonProps["variant"]>("emerald");
  const [strength, setStrength] = useState<number>(0.4);
  const [clicks, setClicks] = useState<number>(0);

  const getGlowColor = (v: LiquidMagneticButtonProps["variant"]) => {
    switch (v) {
      case "violet":
        return "#a855f7";
      case "amber":
        return "#f59e0b";
      case "cyan":
        return "#06b6d4";
      default:
        return "#10b981";
    }
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-lg mb-12">
        <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 inline-block">
          CodePen Gooey SVG Physics
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
          Liquid Magnetic Button
        </h2>
        <p className="text-sm text-zinc-400">
          Hover and pull with your cursor to see the SVG gooey filter stretch and spawn liquid droplets with elastic magnetic tracking.
        </p>

        {/* Controls */}
        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Variant Selector */}
          <div className="flex items-center gap-2">
            {(["emerald", "violet", "cyan", "amber"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`text-xs font-semibold px-3 py-1 rounded-md border capitalize transition-all ${
                  variant === v
                    ? "bg-white text-zinc-950 border-white shadow-md shadow-white/10"
                    : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          {/* Magnetic Strength Slider */}
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span>Strength: {Math.round(strength * 100)}%</span>
            <input
              type="range"
              min="0.1"
              max="0.7"
              step="0.05"
              value={strength}
              onChange={(e) => setStrength(parseFloat(e.target.value))}
              className="accent-emerald-500 cursor-pointer w-32"
            />
          </div>
        </div>
      </div>

      {/* Button Arena */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <LiquidMagneticButton
          variant={variant}
          glowColor={getGlowColor(variant)}
          magneticStrength={strength}
          onClick={() => setClicks((c) => c + 1)}
        >
          {clicks > 0 ? `Triggered (${clicks})` : "Launch Neural Warp"}
        </LiquidMagneticButton>

        <span className="text-xs text-zinc-500 font-mono">
          Try moving cursor quickly around button edges
        </span>
      </div>
    </div>
  );
}
