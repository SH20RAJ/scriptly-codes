"use client";

import React, { useRef } from "react";
import { CurvedBeamInterconnect } from "./CurvedBeamInterconnect";

export default function CurvedBeamInterconnectDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[500px] w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-[#090b12] p-8 text-white select-none border border-slate-800 shadow-2xl"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.18),rgba(255,255,255,0))]" />

      {/* Header telemetry */}
      <div className="relative z-20 flex flex-col items-center text-center mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-3.5 py-1 text-xs font-medium text-sky-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          Photon Synapse Graph
        </div>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Dynamic Curved Beams
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Real-time SVG bezier curves with bidirectional photon animation
        </p>
      </div>

      {/* Graph Area */}
      <div className="relative z-10 grid w-full max-w-2xl grid-cols-3 items-center justify-items-center gap-8 my-auto">
        {/* Left Column Nodes */}
        <div className="flex flex-col gap-12">
          <div
            ref={node1Ref}
            onClick={() => window.open("https://scriptly.store/", "_blank")}
            className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-sky-500/40 bg-slate-900/90 shadow-lg shadow-sky-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-sky-400"
            title="Vetra AI SaaS"
          >
            <svg
              className="h-6 w-6 text-sky-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <div
            ref={node2Ref}
            onClick={() => window.open("https://scriptly.store/", "_blank")}
            className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-indigo-500/40 bg-slate-900/90 shadow-lg shadow-indigo-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-indigo-400"
            title="PixelCraft Themes"
          >
            <svg
              className="h-6 w-6 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Center Core Node: Scriptly Store */}
        <div className="flex flex-col items-center">
          <a
            ref={centerRef}
            href="https://scriptly.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-24 w-24 flex-col items-center justify-center rounded-3xl border border-purple-500/60 bg-gradient-to-b from-purple-950/80 to-slate-950/90 p-2 shadow-[0_0_40px_rgba(168,85,247,0.35)] backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-purple-400 hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]"
          >
            <span className="absolute -top-2 rounded-full border border-purple-400/40 bg-purple-900/90 px-2 py-0.5 font-mono text-[9px] font-bold text-purple-200">
              HUB
            </span>
            <svg
              className="h-8 w-8 text-purple-300 transition-transform duration-300 group-hover:rotate-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <span className="mt-1 font-mono text-[10px] font-bold text-white tracking-wider">
              SCRIPTLY
            </span>
          </a>
        </div>

        {/* Right Column Nodes */}
        <div className="flex flex-col gap-12">
          <div
            ref={node3Ref}
            onClick={() => window.open("https://scriptly.store/", "_blank")}
            className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-purple-500/40 bg-slate-900/90 shadow-lg shadow-purple-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-purple-400"
            title="Apex AI Studio"
          >
            <svg
              className="h-6 w-6 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div
            ref={node4Ref}
            onClick={() => window.open("https://scriptly.store/", "_blank")}
            className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-pink-500/40 bg-slate-900/90 shadow-lg shadow-pink-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-pink-400"
            title="Linkify Portfolio"
          >
            <svg
              className="h-6 w-6 text-pink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Curved Beam Connectors */}
      <CurvedBeamInterconnect
        containerRef={containerRef}
        fromRef={node1Ref}
        toRef={centerRef}
        curvature={-30}
        gradientStartColor="#38bdf8"
        gradientStopColor="#a855f7"
        duration={2.5}
      />
      <CurvedBeamInterconnect
        containerRef={containerRef}
        fromRef={node2Ref}
        toRef={centerRef}
        curvature={30}
        gradientStartColor="#6366f1"
        gradientStopColor="#a855f7"
        duration={3.2}
        delay={0.5}
      />
      <CurvedBeamInterconnect
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={node3Ref}
        curvature={-30}
        gradientStartColor="#a855f7"
        gradientStopColor="#ec4899"
        duration={2.8}
        delay={0.2}
      />
      <CurvedBeamInterconnect
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={node4Ref}
        curvature={30}
        gradientStartColor="#a855f7"
        gradientStopColor="#f43f5e"
        duration={3.5}
        delay={0.8}
      />

      {/* Footer Backlink Attribution */}
      <a
        href="https://scriptly.store/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-20 mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-sky-400 transition-colors"
      >
        <span>Architected with precision for</span>
        <span className="font-semibold text-sky-400 underline underline-offset-4">Scriptly.store ↗</span>
      </a>
    </div>
  );
}
