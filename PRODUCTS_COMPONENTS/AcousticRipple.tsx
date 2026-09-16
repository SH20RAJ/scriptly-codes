"use client";

import React, { CSSProperties, useId } from "react";

export interface AcousticRippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
  color?: string;
}

export function AcousticRipple({
  mainCircleSize = 180,
  mainCircleOpacity = 0.25,
  numCircles = 8,
  className = "",
  color = "rgba(147, 51, 234, 0.4)", // purple accent
}: AcousticRippleProps) {
  const rippleId = useId().replace(/:/g, "");

  return (
    <div
      className={`pointer-events-none absolute inset-0 select-none overflow-hidden [mask-image:linear-gradient(to_bottom,white,transparent)] ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes acoustic-pulse-${rippleId} {
          0% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.35;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.1;
          }
        }
        .acoustic-circle-${rippleId} {
          animation: acoustic-pulse-${rippleId} 3.8s ease-in-out infinite;
        }
      `}</style>

      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 85;
        const opacity = Math.max(0.04, mainCircleOpacity - i * 0.028);
        const animationDelay = `${i * 0.22}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";

        return (
          <div
            key={i}
            className={`acoustic-circle-${rippleId} absolute rounded-full`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1.5px",
                borderColor: color,
                background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: `0 0 ${12 + i * 4}px ${color}`,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}

export default AcousticRipple;
