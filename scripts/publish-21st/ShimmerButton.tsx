"use client";

import React, { type ComponentPropsWithoutRef, type FC } from "react";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton: FC<ShimmerButtonProps> = ({
  shimmerColor = "#ffffff",
  shimmerDuration = "2.5s",
  borderRadius = "100px",
  background = "#09090b",
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--speed": shimmerDuration,
          "--radius": borderRadius,
          "--bg": background,
        } as React.CSSProperties
      }
      className={`group relative inline-flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/15 px-6 py-3.5 font-semibold text-white shadow-2xl transition-all duration-300 active:scale-95 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] ${className}`}
      {...props}
    >
      <style>{`
        @keyframes shimmer-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .shimmer-spinner {
          animation: shimmer-spin var(--speed) linear infinite;
        }
      `}</style>

      {/* Rotating conic gradient light spark */}
      <div className="absolute inset-0 -z-30 overflow-hidden [border-radius:var(--radius)]">
        <div className="shimmer-spinner absolute -inset-full w-[300%] h-[300%] left-[-100%] top-[-100%] [background:conic-gradient(from_0deg,transparent_0_300deg,var(--shimmer-color)_340deg,transparent_360deg)]" />
      </div>

      {/* Inner backdrop fill */}
      <div className="absolute inset-[1.5px] -z-20 [border-radius:calc(var(--radius)-1.5px)] [background:var(--bg)] transition-colors group-hover:bg-zinc-900" />

      {/* Specular inner bevel highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.5)]" />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default ShimmerButton;
