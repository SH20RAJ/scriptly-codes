"use client";

import React, { useState } from "react";
import SphereTagCloud from "./SphereTagCloud";

export default function SphereTagCloudDemo() {
  const [selectedTag, setSelectedTag] = useState<string | null>("React");

  return (
    <div className="flex min-h-[480px] w-full flex-col items-center justify-center rounded-2xl bg-zinc-950 p-6 text-center border border-zinc-900 shadow-2xl">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-400">
        Drag sphere to rotate in 3D space
      </div>

      <SphereTagCloud
        radius={150}
        onTagClick={(tag) => setSelectedTag(tag)}
      />

      <div className="mt-2 text-xs font-mono text-zinc-400">
        Selected Stack:{" "}
        <span className="font-bold text-violet-400">{selectedTag ?? "Click any tag"}</span>
      </div>
    </div>
  );
}
