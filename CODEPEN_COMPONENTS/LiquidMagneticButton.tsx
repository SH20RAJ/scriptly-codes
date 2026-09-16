"use client";

import React, { useRef, useState, type FC, type ButtonHTMLAttributes } from "react";

export interface LiquidMagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  magneticStrength?: number;
  glowColor?: string;
  variant?: "emerald" | "violet" | "amber" | "cyan";
  className?: string;
}

export const LiquidMagneticButton: FC<LiquidMagneticButtonProps> = ({
  children = "Explore Nexus",
  magneticStrength = 0.35,
  glowColor = "#10b981",
  variant = "emerald",
  className = "",
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [blobOffset, setBlobOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({
      x: x * magneticStrength,
      y: y * magneticStrength,
    });

    setBlobOffset({
      x: x * 0.7,
      y: y * 0.7,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setBlobOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "violet":
        return "from-purple-600 to-indigo-600 text-white shadow-purple-500/25";
      case "amber":
        return "from-amber-500 to-orange-600 text-white shadow-amber-500/25";
      case "cyan":
        return "from-cyan-500 to-blue-600 text-white shadow-cyan-500/25";
      default:
        return "from-emerald-500 to-teal-600 text-white shadow-emerald-500/25";
    }
  };

  return (
    <>
      {/* SVG Gooey Filter Definition */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="liquid-goo-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="relative inline-block p-4">
        {/* Gooey Liquid Container */}
        <div
          style={{
            filter: "url(#liquid-goo-filter)",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Main Blobs behind button */}
          <div
            style={{
              transform: `translate(${blobOffset.x * 0.5}px, ${blobOffset.y * 0.5}px) scale(${isHovered ? 1.15 : 0.85})`,
              transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              backgroundColor: glowColor,
            }}
            className="w-24 h-12 rounded-full opacity-60 filter blur-md"
          />
          {/* Detached Liquid Droplet */}
          <div
            style={{
              transform: `translate(${blobOffset.x * 1.2}px, ${blobOffset.y * 1.2}px) scale(${isHovered ? 1 : 0})`,
              transition: isHovered ? "transform 0.15s ease-out" : "transform 0.4s ease-in",
              backgroundColor: glowColor,
            }}
            className="w-8 h-8 rounded-full opacity-75 filter blur-sm"
          />
        </div>

        {/* Magnetic Physical Button */}
        <button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: isHovered
              ? "transform 0.1s ease-out"
              : "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          className={`relative z-10 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide bg-gradient-to-r ${getVariantStyles()} shadow-lg cursor-pointer select-none transition-shadow duration-300 hover:shadow-2xl active:scale-95 flex items-center gap-2 ${className}`}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default LiquidMagneticButton;
