"use client";

import React, { useState } from "react";
import CyberGlitchRadar, { type CyberGlitchRadarProps } from "./CyberGlitchRadar";

export default function CyberGlitchRadarDemo() {
  const [theme, setTheme] = useState<CyberGlitchRadarProps["themeColor"]>("cyan");
  const [speed, setSpeed] = useState<number>(0.03);
  const [scanlines, setScanlines] = useState<boolean>(true);

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b80_1px,transparent_1px),linear-gradient(to_bottom,#18181b80_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-lg mb-10">
        <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3 inline-block">
          CodePen Sci-Fi Telemetry
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2 font-mono">
          Cyberpunk HUD Radar
        </h2>
        <p className="text-sm text-zinc-400">
          60fps rotating radar sweep beam with distance rings, phosphorescent trail ping waves, scanline CRT effects, and chromatic glitch text.
        </p>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {(["cyan", "emerald", "amber", "fuchsia"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`text-xs font-mono font-semibold px-3 py-1 rounded-md border uppercase transition-all ${
                theme === t
                  ? "bg-white text-zinc-950 border-white shadow-md shadow-white/10"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}

          <button
            onClick={() => setScanlines(!scanlines)}
            className={`text-xs font-mono px-3 py-1 rounded-md border transition-all ${
              scanlines
                ? "bg-zinc-800 text-white border-zinc-600"
                : "bg-zinc-900 text-zinc-500 border-zinc-800"
            }`}
          >
            CRT Scanlines: {scanlines ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      {/* Component Display */}
      <div className="relative z-10 flex flex-col items-center">
        <CyberGlitchRadar
          themeColor={theme}
          sweepSpeed={speed}
          showScanlines={scanlines}
        />
      </div>
    </div>
  );
}
