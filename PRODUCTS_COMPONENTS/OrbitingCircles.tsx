"use client";

import React, { type FC, type ReactNode } from "react";

export interface OrbitingCirclesProps {
  className?: string;
  children?: ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  strokeColor?: string;
}

export const OrbitingCircles: FC<OrbitingCirclesProps> = ({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
  iconSize = 40,
  speed = 1,
  strokeColor = "rgba(255, 255, 255, 0.15)",
}) => {
  const calculatedDuration = duration / speed;

  return (
    <>
      <style>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg);
          }
        }
        .animate-orbit {
          animation: orbit calc(var(--duration) * 1s) linear infinite;
        }
      `}</style>

      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            style={{ stroke: strokeColor }}
            strokeWidth="1"
            strokeDasharray="4 4"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        const angle = (360 / count) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                animationDirection: reverse ? "reverse" : "normal",
                transform: `rotate(${angle}deg) translateY(${radius}px) rotate(-${angle}deg)`,
              } as React.CSSProperties
            }
            className={`absolute flex items-center justify-center rounded-full animate-orbit ${className}`}
          >
            {child}
          </div>
        );
      })}
    </>
  );
};

export default OrbitingCircles;
