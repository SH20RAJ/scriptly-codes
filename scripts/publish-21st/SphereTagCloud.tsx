"use client";

import React, { useRef, useEffect, useState, type FC } from "react";

export interface SphereTagCloudProps {
  tags?: string[];
  radius?: number;
  className?: string;
  onTagClick?: (tag: string) => void;
}

interface TagItem {
  text: string;
  x: number;
  y: number;
  z: number;
}

export const SphereTagCloud: FC<SphereTagCloudProps> = ({
  tags = [
    "Next.js", "React", "TypeScript", "TailwindCSS", "Node.js",
    "GraphQL", "Docker", "Rust", "Python", "WebGL", "Three.js",
    "Prisma", "PostgreSQL", "Figma", "GSAP", "Redis", "Vercel"
  ],
  radius = 160,
  className = "",
  onTagClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tagItems, setTagItems] = useState<TagItem[]>([]);
  const rotationRef = useRef({ rx: 0.003, ry: 0.003 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  // Initialize spherical distribution using Fibonacci sphere algorithm
  useEffect(() => {
    const items: TagItem[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    const count = tags.length;

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      items.push({
        text: tags[i],
        x: x * radius,
        y: y * radius,
        z: z * radius,
      });
    }

    setTagItems(items);
  }, [tags, radius]);

  // Rotate sphere on animation frame
  useEffect(() => {
    let animId: number;

    const animate = () => {
      const rx = rotationRef.current.rx;
      const ry = rotationRef.current.ry;

      setTagItems((prev) =>
        prev.map((item) => {
          // Rotate around X axis
          const cosX = Math.cos(rx);
          const sinX = Math.sin(rx);
          const y1 = item.y * cosX - item.z * sinX;
          const z1 = item.z * cosX + item.y * sinX;

          // Rotate around Y axis
          const cosY = Math.cos(ry);
          const sinY = Math.sin(ry);
          const x2 = item.x * cosY + z1 * sinY;
          const z2 = z1 * cosY - item.x * sinY;

          return {
            ...item,
            x: x2,
            y: y1,
            z: z2,
          };
        })
      );

      // Dampen rotation speed smoothly towards base drift
      if (!isDraggingRef.current) {
        rotationRef.current.rx += (0.003 - rotationRef.current.rx) * 0.05;
        rotationRef.current.ry += (0.003 - rotationRef.current.ry) * 0.05;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };

    rotationRef.current.ry = dx * 0.0004;
    rotationRef.current.rx = -dy * 0.0004;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className={`relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ width: radius * 2 + 80, height: radius * 2 + 80 }}
    >
      {tagItems.map((item, idx) => {
        // Depth projection formula
        const depth = (item.z + radius) / (2 * radius); // 0 (back) to 1 (front)
        const scale = 0.65 + depth * 0.55;
        const opacity = 0.25 + depth * 0.75;
        const zIndex = Math.round(depth * 100);

        return (
          <button
            key={idx}
            onClick={() => onTagClick?.(item.text)}
            style={{
              transform: `translate3d(${item.x}px, ${item.y}px, 0px) scale(${scale})`,
              opacity,
              zIndex,
            }}
            className="absolute rounded-lg border border-white/10 bg-zinc-900/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-lg transition-colors hover:border-violet-500 hover:text-violet-300"
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

export default SphereTagCloud;
