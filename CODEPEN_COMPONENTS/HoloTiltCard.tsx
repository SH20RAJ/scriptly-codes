"use client";

import React, { useRef, useState, type FC, type ReactNode } from "react";

export interface HoloTiltCardProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  rarity?: "common" | "rare" | "ultra-rare" | "secret-rare";
  image?: string;
  className?: string;
  glowColor?: string;
  href?: string;
  children?: ReactNode;
}

export const HoloTiltCard: FC<HoloTiltCardProps> = ({
  title = "Cosmic Vanguard",
  subtitle = "Neural Combat Class #042",
  badge = "LEGENDARY",
  rarity = "ultra-rare",
  image = "",
  className = "",
  glowColor = "#38bdf8",
  href = "https://scriptly.store/",
  children,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [glareOpacity, setGlareOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -14;
    const rY = ((x - centerX) / centerX) * 14;

    setRotX(rX);
    setRotY(rY);
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
    setGlareOpacity(0.75);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setGlareOpacity(0);
    setIsHovered(false);
  };

  const getRarityGradient = () => {
    switch (rarity) {
      case "secret-rare":
        return "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)";
      case "ultra-rare":
        return "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #9333ea 100%)";
      case "rare":
        return "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)";
      default:
        return "linear-gradient(135deg, #94a3b8 0%, #475569 100%)";
    }
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      className={`inline-block select-none cursor-pointer ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${isHovered ? 1.04 : 1}, ${isHovered ? 1.04 : 1}, 1)`,
          transition: isHovered
            ? "transform 0.08s ease-out"
            : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: isHovered
            ? `0 24px 48px -12px ${glowColor}40, 0 0 24px 2px ${glowColor}20`
            : "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
        }}
        className="relative w-72 h-[410px] rounded-2xl bg-zinc-950 border border-zinc-800/80 p-3.5 overflow-hidden text-white flex flex-col justify-between"
      >
        {/* Holographic Iridescent Foil Overlay */}
        <div
          style={{
            opacity: glareOpacity,
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.7) 0%, transparent 60%),
                         conic-gradient(from ${rotX * 5 + rotY * 5}deg at ${glareX}% ${glareY}%, 
                         rgba(255,0,128,0.25), rgba(255,255,0,0.25), rgba(0,255,128,0.25), rgba(0,128,255,0.25), rgba(255,0,128,0.25))`,
            mixBlendMode: "color-dodge",
            transition: isHovered ? "opacity 0.15s ease" : "opacity 0.4s ease",
          }}
          className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
        />

        {/* Diagonal Specular Reflection Line */}
        <div
          style={{
            opacity: glareOpacity * 0.4,
            background: `linear-gradient(${115 + rotY * 2}deg, transparent 20%, rgba(255,255,255,0.4) 48%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 52%, transparent 80%)`,
            mixBlendMode: "overlay",
          }}
          className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
        />

        {/* Card Header */}
        <div className="relative z-10 flex items-center justify-between">
          <span
            style={{ background: getRarityGradient() }}
            className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full text-white shadow-sm"
          >
            {badge}
          </span>
          <span className="text-[11px] font-mono text-zinc-400">#0042</span>
        </div>

        {/* Card Visual Artwork (Self-contained vector shader graphic) */}
        <div className="relative z-10 my-2.5 rounded-xl overflow-hidden aspect-[4/3] w-full border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 flex items-center justify-center p-4">
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]">
            <defs>
              <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="innerShine" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="80,15 135,50 135,115 80,145 25,115 25,50" fill="url(#crystalGrad)" opacity="0.9" />
            <polygon points="80,25 125,55 125,110 80,135 35,110 35,55" fill="#09090b" opacity="0.75" />
            <polygon points="80,35 115,60 80,120 45,60" fill="url(#crystalGrad)" opacity="0.6" />
            <polygon points="80,35 80,120 45,60" fill="url(#innerShine)" opacity="0.4" />
            <circle cx="80" cy="80" r="14" fill="#ffffff" opacity="0.9" className="animate-pulse" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
        </div>

        {/* Card Body Details */}
        <div className="relative z-10 flex flex-col gap-1">
          <h4 className="text-base font-bold tracking-tight text-white">{title}</h4>
          <p className="text-xs text-zinc-400">{subtitle}</p>
          {children}
        </div>

        {/* Card Footer Rarity Ribbon */}
        <div className="relative z-10 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="hover:text-pink-400 transition-colors flex items-center gap-1 group font-medium"
          >
            <span>Scriptly Holographic Series</span>
            <svg
              className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <span className="font-mono text-zinc-400">HP 9800</span>
        </div>
      </div>
    </div>
  );
};

export default HoloTiltCard;
