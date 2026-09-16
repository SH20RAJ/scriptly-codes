"use client";

import React, { useEffect, useId, useState, RefObject } from "react";

export interface CurvedBeamInterconnectProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  duration?: number;
  delay?: number;
}

export function CurvedBeamInterconnect({
  className = "",
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  pathColor = "rgba(148, 163, 184, 0.2)",
  pathWidth = 2,
  pathOpacity = 0.3,
  gradientStartColor = "#38bdf8",
  gradientStopColor = "#a855f7",
  duration = 3,
  delay = 0,
}: CurvedBeamInterconnectProps) {
  const id = useId().replace(/:/g, "");
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2;
        const startY = rectA.top - containerRect.top + rectA.height / 2;
        const endX = rectB.left - containerRect.left + rectB.width / 2;
        const endY = rectB.top - containerRect.top + rectB.height / 2;

        const controlX = (startX + endX) / 2;
        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver(() => updatePath());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute top-0 left-0 transform-gpu ${className}`}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Background static curve path */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />

      {/* Animated gradient beam */}
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#gradient-${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient
          id={`gradient-${id}`}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} stopOpacity="1">
            <animate
              attributeName="offset"
              values={reverse ? "1; 0" : "0; 1"}
              dur={`${duration}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="70%" stopColor={gradientStopColor} stopOpacity="1">
            <animate
              attributeName="offset"
              values={reverse ? "1; 0.2" : "0.2; 1"}
              dur={`${duration}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CurvedBeamInterconnect;
