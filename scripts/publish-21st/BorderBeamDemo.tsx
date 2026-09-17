"use client";

import React, { useState } from "react";
import BorderBeam from "./BorderBeam";

export default function BorderBeamDemo() {
  const [duration, setDuration] = useState(8);

  return (
    <div className="flex min-h-[420px] w-full items-center justify-center rounded-2xl bg-zinc-950 p-8 border border-zinc-900 shadow-2xl">
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-10 text-center backdrop-blur-xl shadow-2xl max-w-md w-full">
        <BorderBeam
          size={160}
          duration={duration}
          borderWidth={2}
          colorFrom="#a855f7"
          colorTo="#38bdf8"
        />

        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h3 className="text-xl font-extrabold text-white">Next-Gen Architecture</h3>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          High-precision traveling laser beam navigating borders with native hardware CSS offset-path calculations.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => setDuration((d) => (d <= 4 ? 12 : d - 4))}
            className="rounded-lg border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-700 transition"
          >
            Speed: {duration}s
          </button>
        </div>
      </div>
    </div>
  );
}
