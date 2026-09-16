"use client";

import React, { useState } from "react";
import OrbitingCircles from "./OrbitingCircles";

export default function OrbitingCirclesDemo() {
  const [speed, setSpeed] = useState(1);
  const [reverse, setReverse] = useState(false);

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b50_1px,transparent_1px),linear-gradient(to_bottom,#18181b50_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Header Controls */}
      <div className="relative z-20 text-center max-w-lg mb-8">
        <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3 inline-block">
          Extracted from Scriptly VETRA
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
          Concentric Orbiting Circles
        </h2>
        <p className="text-sm text-zinc-400">
          Smooth CSS mathematical orbital choreography with customizable radii, speeds, and reverse spin directions.
        </p>

        <div className="flex items-center justify-center gap-4 mt-4 text-xs">
          <button
            onClick={() => setReverse(!reverse)}
            className="px-3.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white transition-colors"
          >
            Direction: {reverse ? "Counter-Clockwise" : "Clockwise"}
          </button>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Speed: {speed}x</span>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.5"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="accent-cyan-400 cursor-pointer w-20"
            />
          </div>
        </div>
      </div>

      {/* Orbital Arena Container */}
      <div className="relative flex h-[460px] w-full max-w-[460px] items-center justify-center overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xl shadow-2xl">
        {/* Central Anchor Node (Creative Scriptly Backlink) */}
        <a
          href="https://scriptly.store/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 group flex flex-col items-center justify-center w-24 h-24 rounded-full bg-zinc-950 border border-cyan-500/30 p-2 shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:border-cyan-400 hover:scale-105 transition-all cursor-pointer"
        >
          <svg className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-[10px] font-bold text-white tracking-wider mt-1 group-hover:text-cyan-300 flex items-center gap-0.5">
            SCRIPTLY <span className="text-[8px]">↗</span>
          </span>
        </a>

        {/* Inner Orbit (Radius 90) */}
        <OrbitingCircles radius={90} duration={14} speed={speed} reverse={!reverse} strokeColor="rgba(6, 182, 212, 0.2)">
          <div className="w-9 h-9 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <path strokeWidth="2" d="M12 6v6l4 2"/>
            </svg>
          </div>
          <div className="w-9 h-9 rounded-full bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
        </OrbitingCircles>

        {/* Outer Orbit (Radius 165) */}
        <OrbitingCircles radius={165} duration={24} speed={speed} reverse={reverse} strokeColor="rgba(255, 255, 255, 0.1)">
          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-emerald-400 shadow-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-pink-400 shadow-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-amber-400 shadow-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </OrbitingCircles>
      </div>
    </div>
  );
}
