"use client";

import React, { useState } from "react";
import PixelGridTransition from "./PixelGridTransition";

export default function PixelGridTransitionDemo() {
  const [accent, setAccent] = useState("#8b5cf6");

  // High-res royalty-free tech/abstract image from Unsplash
  const sampleImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80";

  return (
    <div className="flex min-h-[460px] w-full flex-col items-center justify-center rounded-2xl bg-zinc-950 p-6 text-center border border-zinc-900 shadow-2xl">
      <div className="w-full max-w-lg">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
          Hover card to trigger procedural pixel dissolution
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3 backdrop-blur-xl shadow-2xl">
          <PixelGridTransition
            src={sampleImage}
            alt="Cyberpunk Matrix Grid"
            gridSize={20}
            accentColor={accent}
            className="aspect-[3/2] w-full"
          />

          <div className="mt-4 flex items-center justify-between px-2 text-left">
            <div>
              <h3 className="text-base font-bold text-white">Quantum Dissolve Shader</h3>
              <p className="text-xs text-zinc-400">Procedural 60fps canvas pixel grid reveal</p>
            </div>

            <div className="flex items-center gap-1.5">
              {[
                { color: "#8b5cf6", name: "Purple" },
                { color: "#06b6d4", name: "Cyan" },
                { color: "#10b981", name: "Emerald" },
                { color: "#f43f5e", name: "Rose" },
              ].map((c) => (
                <button
                  key={c.color}
                  onClick={() => setAccent(c.color)}
                  className={`h-5 w-5 rounded-full border-2 transition ${
                    accent === c.color ? "border-white scale-110" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: c.color }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
