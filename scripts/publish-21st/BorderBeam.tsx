"use client";

import React, { useId, type FC } from "react";

export interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam: FC<BorderBeamProps> = ({
  className = "",
  size = 200,
  duration = 12,
  borderWidth = 1.5,
  colorFrom = "#8b5cf6",
  colorTo = "#06b6d4",
  delay = 0,
}) => {
  const uid = useId().replace(/:/g, "");
  const animName = `border-beam-${uid}`;

  return (
    <div
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width))_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] ${className}`}
    >
      <style>{`
        @keyframes ${animName} {
          to {
            offset-distance: 100%;
          }
        }
        .${animName}-beam {
          animation: ${animName} var(--duration) linear infinite;
          animation-delay: var(--delay);
          offset-path: rect(0 auto auto 0 round calc(var(--size)));
        }
      `}</style>
      <div
        className={`${animName}-beam absolute aspect-square w-[var(--size)] bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent`}
      />
    </div>
  );
};

export default BorderBeam;
