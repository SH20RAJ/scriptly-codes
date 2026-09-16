"use client";

import React from "react";
import { YuffieKineticInterface } from "./YuffieKineticInterface";

export function YuffieKineticInterfaceDemo() {
  return (
    <div className="min-h-screen w-full bg-[#050507] text-white flex flex-col items-center justify-center p-4 md:p-10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Component Title & Metadata */}
      <div className="text-center mb-8 relative z-10 max-w-xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono font-medium mb-3">
          ✦ Cyberpunk HUD // Interactive Audio Visualizer
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
          Kinetic Cyber Interface
        </h2>
        <p className="text-sm text-zinc-400">
          Features real-time HTML5 2D canvas petal aerodynamics, inertia lerp parallax tracking,
          and interactive audio visualizer deck.
        </p>
      </div>

      {/* Main Interactive Component */}
      <YuffieKineticInterface
        title="BLAZING SUN // CHIXIA"
        kanjiTitle="朝日"
        audioTrackName="Fall To Hell - DOLLWAVE"
        brandLink="https://scriptly.store/"
      />

      {/* Quick Documentation Footer */}
      <div className="mt-8 text-center text-xs text-zinc-500 font-mono relative z-10">
        Interactive mouse parallax • Canvas sakura aerodynamics • Fully self-contained
      </div>
    </div>
  );
}

export default YuffieKineticInterfaceDemo;
