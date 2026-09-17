"use client";

import React, { memo, useId } from "react";

export interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#ec4899", "#8b5cf6", "#3b82f6", "#06b6d4", "#ec4899"],
    speed = 1,
  }: AuroraTextProps) => {
    const id = useId().replace(/:/g, "");
    const animName = `aurora-${id}`;
    const duration = 8 / Math.max(0.1, speed);

    const gradient = `linear-gradient(135deg, ${colors.join(", ")})`;

    return (
      <span className={`relative inline-block font-extrabold ${className}`}>
        <style>{`
          @keyframes ${animName} {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .${animName}-text {
            background-image: ${gradient};
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: ${animName} ${duration}s ease infinite;
          }
        `}</style>
        <span className="sr-only">{children}</span>
        <span className={`${animName}-text select-none`} aria-hidden="true">
          {children}
        </span>
      </span>
    );
  }
);

AuroraText.displayName = "AuroraText";
export default AuroraText;
