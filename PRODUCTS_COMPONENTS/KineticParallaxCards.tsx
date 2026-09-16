"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

export interface CardItem {
  id: string;
  title: string;
  role: string;
  tag: string;
  initialRot: number;
  gradient: string;
  accentColor: string;
}

export interface KineticParallaxCardsProps {
  className?: string;
  cards?: CardItem[];
}

const DEFAULT_CARDS: CardItem[] = [
  {
    id: "1",
    title: "Mateus Aldana",
    role: "Creative Director",
    tag: "DIRECTION",
    initialRot: -8,
    gradient: "linear-gradient(145deg, #1e1b4b, #0f172a)",
    accentColor: "#818cf8",
  },
  {
    id: "2",
    title: "Eli Ramirez",
    role: "Design Lead",
    tag: "ARCHITECTURE",
    initialRot: -4,
    gradient: "linear-gradient(145deg, #451a03, #18181b)",
    accentColor: "#fbbf24",
  },
  {
    id: "3",
    title: "Naomi Park",
    role: "Brand Strategist",
    tag: "STRATEGY",
    initialRot: -1,
    gradient: "linear-gradient(145deg, #1e293b, #0f172a)",
    accentColor: "#38bdf8",
  },
  {
    id: "4",
    title: "Theo Vance",
    role: "Senior Engineer",
    tag: "SYSTEMS",
    initialRot: 3,
    gradient: "linear-gradient(145deg, #3b0764, #18181b)",
    accentColor: "#c084fc",
  },
  {
    id: "5",
    title: "Kit Bellamy",
    role: "Art Director",
    tag: "3D & MOTION",
    initialRot: 6,
    gradient: "linear-gradient(145deg, #4c0519, #090a0f)",
    accentColor: "#fb7185",
  },
];

export function KineticParallaxCards({
  className = "",
  cards = DEFAULT_CARDS,
}: KineticParallaxCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredIdx(null);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex w-full items-center justify-center py-12 select-none [perspective:1000px] overflow-visible ${className}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:flex-nowrap">
        {cards.map((card, idx) => {
          const isHovered = hoveredIdx === idx;
          const parallaxX = mouseOffset.x * (10 + idx * 3);
          const parallaxY = mouseOffset.y * (6 + idx * 2);

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative h-72 w-48 cursor-pointer rounded-2xl p-[1.5px] transition-transform duration-300 ease-out sm:h-80 sm:w-52"
              style={{
                transform: isHovered
                  ? `translate3d(${parallaxX}px, ${parallaxY - 18}px, 40px) rotate(${card.initialRot * 0.2}deg) scale(1.08)`
                  : `translate3d(${parallaxX}px, ${parallaxY}px, 0px) rotate(${card.initialRot}deg) scale(1)`,
                zIndex: isHovered ? 30 : 10 + idx,
                boxShadow: isHovered
                  ? `0 25px 50px -12px rgba(0,0,0,0.8), 0 0 25px ${card.accentColor}33`
                  : "0 10px 25px -5px rgba(0,0,0,0.5)",
              }}
            >
              {/* Outer Border Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${card.accentColor}66, transparent 70%)`,
                }}
              />

              {/* Card Inner Body */}
              <div
                className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl p-5"
                style={{ background: card.gradient }}
              >
                {/* Background Ambient Grid/Aura */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-300"
                  style={{
                    backgroundColor: card.accentColor,
                    opacity: isHovered ? 0.35 : 0.15,
                  }}
                />

                {/* Top Tag & Dot */}
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[9px] font-bold text-white/70 tracking-wider">
                    {card.tag}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: card.accentColor,
                      boxShadow: `0 0 8px ${card.accentColor}`,
                    }}
                  />
                </div>

                {/* Center Abstract Graphic */}
                <div className="flex flex-1 items-center justify-center py-4">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  >
                    <svg
                      className="h-10 w-10 transition-colors duration-300"
                      style={{ color: card.accentColor }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Meta */}
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {card.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-400 font-medium">
                    {card.role}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KineticParallaxCards;
