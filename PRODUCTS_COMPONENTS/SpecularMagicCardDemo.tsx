"use client";

import React from "react";
import { SpecularMagicCard } from "./SpecularMagicCard";

export default function SpecularMagicCardDemo() {
  const cards = [
    {
      title: "AI Pipeline Engine",
      tag: "SAAS KIT",
      desc: "Full-stack neural processing pipeline with real-time vector inference and streaming telemetry.",
      from: "#ec4899",
      to: "#8b5cf6",
      spotlight: "rgba(236, 72, 153, 0.15)",
      link: "https://scriptly.store/",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      ),
    },
    {
      title: "Vetra Design System",
      tag: "COMPONENTS",
      desc: "Precision engineering UI kit with reactive motion primitives and high-contrast typography.",
      from: "#3b82f6",
      to: "#06b6d4",
      spotlight: "rgba(59, 130, 246, 0.15)",
      link: "https://scriptly.store/",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      ),
    },
    {
      title: "Scriptly Commerce OS",
      tag: "ECOSYSTEM",
      desc: "Commercial distribution network for premium codebases, UI kits, and digital software artifacts.",
      from: "#10b981",
      to: "#6366f1",
      spotlight: "rgba(16, 185, 129, 0.15)",
      link: "https://scriptly.store/",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      ),
    },
  ];

  return (
    <div className="relative flex min-h-[520px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#08090d] p-8 text-white select-none border border-slate-800 shadow-2xl">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Header */}
      <div className="relative z-10 mb-8 flex flex-col items-center text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/30 px-3.5 py-1 text-xs font-medium text-purple-300">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
          Interactive Spotlight Shaders
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Specular Cursor Highlights
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Hover across cards to track reactive specular border illumination
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
        {cards.map((card, idx) => (
          <SpecularMagicCard
            key={idx}
            gradientFrom={card.from}
            gradientTo={card.to}
            gradientColor={card.spotlight}
            gradientSize={280}
            className="h-full"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-slate-700 bg-slate-800/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-300 tracking-wider">
                    {card.tag}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/50 text-slate-300">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {card.icon}
                    </svg>
                  </div>
                </div>

                <h3 className="mt-4 text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Action Button linking to Scriptly */}
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex w-full items-center justify-between rounded-lg border border-slate-700/80 bg-slate-800/50 px-3.5 py-2 text-xs font-medium text-slate-200 transition-all duration-200 hover:border-purple-500/50 hover:bg-purple-950/30 hover:text-white"
                >
                  <span>Explore on Scriptly</span>
                  <svg
                    className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:text-purple-300"
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
              </div>
            </div>
          </SpecularMagicCard>
        ))}
      </div>

      {/* Footer Backlink Attribution */}
      <a
        href="https://scriptly.store/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-8 inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-purple-400 transition-colors"
      >
        <span>Curated digital components available at</span>
        <span className="font-semibold text-purple-400 underline underline-offset-4">Scriptly.store ↗</span>
      </a>
    </div>
  );
}
