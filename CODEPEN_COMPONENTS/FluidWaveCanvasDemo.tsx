"use client";

import React, { useState } from "react";
import FluidWaveCanvas, { type FluidWaveCanvasProps } from "./FluidWaveCanvas";

export default function FluidWaveCanvasDemo() {
  const [scheme, setScheme] = useState<FluidWaveCanvasProps["colorScheme"]>("neon");
  const [waveCount, setWaveCount] = useState<number>(4);
  const [amplitude, setAmplitude] = useState<number>(40);

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-lg mb-8">
        <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-3 inline-block">
          CodePen Generative Waves
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
          Fluid Wave Canvas
        </h2>
        <p className="text-sm text-zinc-400">
          60fps harmonic sine wave simulation with neon glow shaders. Move your cursor over the canvas to create real-time ripple disturbances.
        </p>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {(["neon", "ocean", "sunset", "emerald"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setScheme(s)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-md border capitalize transition-all ${
                scheme === s
                  ? "bg-white text-zinc-950 border-white shadow-md shadow-white/10"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Sliders */}
        <div className="flex items-center justify-center gap-6 mt-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>Waves: {waveCount}</span>
            <input
              type="range"
              min="2"
              max="6"
              value={waveCount}
              onChange={(e) => setWaveCount(parseInt(e.target.value))}
              className="accent-purple-500 cursor-pointer w-24"
            />
          </div>
          <div className="flex items-center gap-2">
            <span>Amp: {amplitude}px</span>
            <input
              type="range"
              min="20"
              max="70"
              value={amplitude}
              onChange={(e) => setAmplitude(parseInt(e.target.value))}
              className="accent-purple-500 cursor-pointer w-24"
            />
          </div>
        </div>
      </div>

      {/* Interactive Canvas Canvas */}
      <div className="relative z-10 w-full max-w-3xl">
        <FluidWaveCanvas
          colorScheme={scheme}
          waveCount={waveCount}
          amplitude={amplitude}
        />
      </div>
    </div>
  );
}
