"use client";

import React, { useState } from "react";
import HoloTiltCard, { type HoloTiltCardProps } from "./HoloTiltCard";

export default function HoloTiltCardDemo() {
  const [rarity, setRarity] = useState<HoloTiltCardProps["rarity"]>("secret-rare");
  const [glowColor, setGlowColor] = useState("#ec4899");

  const cards = [
    {
      title: "Quantum Neural Core",
      subtitle: "Autonomous LLM Cluster Engine",
      badge: "SECRET RARE",
      rarity: "secret-rare" as const,
      glowColor: "#ec4899",
    },
    {
      title: "Cyberpunk Cyberblade",
      subtitle: "Sub-atomic Plasma Matrix",
      badge: "ULTRA RARE",
      rarity: "ultra-rare" as const,
      glowColor: "#f59e0b",
    },
    {
      title: "Aetherial Horizon",
      subtitle: "Zero-Gravity Satellite Array",
      badge: "RARE",
      rarity: "rare" as const,
      glowColor: "#38bdf8",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(120,50,255,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Header Controls */}
      <div className="relative z-10 text-center max-w-xl mb-10">
        <span className="text-xs font-semibold tracking-widest text-pink-400 uppercase px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 mb-3 inline-block">
          CodePen Trending Classic
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
          Holographic 3D Tilt Cards
        </h2>
        <p className="text-sm text-zinc-400">
          Move your cursor over each card to experience specular rainbow foil reflections and real-time 3D perspective physics.
        </p>

        {/* Quick Toggles */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {(["secret-rare", "ultra-rare", "rare"] as const).map((r) => (
            <button
              key={r}
              onClick={() => {
                setRarity(r);
                if (r === "secret-rare") setGlowColor("#ec4899");
                if (r === "ultra-rare") setGlowColor("#f59e0b");
                if (r === "rare") setGlowColor("#38bdf8");
              }}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-all ${
                rarity === r
                  ? "bg-white text-zinc-950 border-white font-semibold shadow-lg shadow-white/10"
                  : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {r.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Showcase Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
        {cards.map((c, idx) => (
          <HoloTiltCard
            key={idx}
            title={c.title}
            subtitle={c.subtitle}
            badge={c.badge}
            rarity={rarity}
            image={c.image}
            glowColor={glowColor}
          />
        ))}
      </div>
    </div>
  );
}
