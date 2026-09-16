"use client";

import React, { useRef, useState, useCallback, ReactNode } from "react";

export interface SpecularMagicCardProps {
  children?: ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
  borderColor?: string;
  onClick?: () => void;
}

export function SpecularMagicCard({
  children,
  className = "",
  gradientSize = 250,
  gradientColor = "rgba(120, 119, 198, 0.15)",
  gradientOpacity = 0.8,
  gradientFrom = "#a855f7",
  gradientTo = "#6366f1",
  borderColor = "rgba(255, 255, 255, 0.08)",
  onClick,
}: SpecularMagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -gradientSize, y: -gradientSize });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300 ${className}`}
      style={{
        background: isHovered
          ? `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientFrom}, ${gradientTo}, ${borderColor} 60%)`
          : borderColor,
      }}
    >
      {/* Inner Card Body */}
      <div className="relative z-10 h-full w-full rounded-2xl bg-[#0d0f17] transition-colors duration-300">
        {/* Spotlight Surface Fill */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? gradientOpacity : 0,
            background: `radial-gradient(${gradientSize * 1.2}px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 70%)`,
          }}
        />

        {/* Card Content */}
        <div className="relative z-20 h-full w-full p-6">{children}</div>
      </div>
    </div>
  );
}

export default SpecularMagicCard;
