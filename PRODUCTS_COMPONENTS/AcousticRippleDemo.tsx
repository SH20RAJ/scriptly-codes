"use client";

import React, { useState } from "react";
import { AcousticRipple } from "./AcousticRipple";

export default function AcousticRippleDemo() {
  const [active, setActive] = useState(true);

  return (
    <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#090b10] p-8 text-white select-none border border-slate-800/80 shadow-2xl">
      {/* Background Acoustic Waves */}
      <AcousticRipple
        mainCircleSize={190}
        mainCircleOpacity={0.35}
        numCircles={active ? 7 : 2}
        color="rgba(168, 85, 247, 0.45)"
      />

      {/* Top Telemetry Ribbon */}
      <div className="z-10 mb-8 flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-4 py-1.5 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
        </span>
        <span className="font-mono text-xs text-purple-300 uppercase tracking-widest">
          Acoustic Resonance Engine
        </span>
      </div>

      {/* Central Interactive Card */}
      <div className="z-10 flex max-w-md flex-col items-center text-center">
        <div
          onClick={() => setActive(!active)}
          className="group mb-5 flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-600/30 to-indigo-700/20 shadow-[0_0_30px_rgba(168,85,247,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
        >
          <svg
            className="h-9 w-9 text-purple-300 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Harmonic Signal Emitter
        </h3>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          Procedural concentric acoustic wave generator with frequency modulation and dynamic radial field distortion.
        </p>

        {/* Action Button with direct link to Scriptly */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://scriptly.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-all duration-200 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore on Scriptly</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <button
            onClick={() => setActive(!active)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <span>{active ? "Dampen Pulse" : "Trigger Pulse"}</span>
          </button>
        </div>
      </div>

      {/* Footer Backlink Attribution Badge */}
      <a
        href="https://scriptly.store/"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 mt-10 inline-flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-purple-400 transition-colors"
      >
        <span>Architected with precision for</span>
        <span className="font-semibold text-purple-400 underline underline-offset-4">Scriptly.store ↗</span>
      </a>
    </div>
  );
}
