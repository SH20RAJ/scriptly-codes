"use client";

import React, { useRef, useEffect, useState, type FC } from "react";

export interface PixelGridTransitionProps {
  src: string;
  alt?: string;
  gridSize?: number;
  className?: string;
  accentColor?: string;
}

export const PixelGridTransition: FC<PixelGridTransitionProps> = ({
  src,
  alt = "Pixel Grid Image",
  gridSize = 24,
  className = "",
  accentColor = "#8b5cf6",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      imgRef.current = img;
      setLoaded(true);
    };
  }, [src]);

  useEffect(() => {
    targetProgressRef.current = isHovered ? 1 : 0;
  }, [isHovered]);

  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const render = () => {
      // Lerp progress
      progressRef.current += (targetProgressRef.current - progressRef.current) * 0.08;
      const p = progressRef.current;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (imgRef.current) {
        // Draw base image
        ctx.drawImage(imgRef.current, 0, 0, w, h);
      }

      if (p > 0.001) {
        const cols = Math.floor(w / gridSize);
        const rows = Math.floor(h / gridSize);

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            // Deterministic pseudorandom factor based on coordinates
            const rand = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
            const seed = rand - Math.floor(rand);

            // Stagger wave based on row position and seed
            const normalizedY = y / rows;
            const threshold = normalizedY + (seed - 0.5) * 0.5;

            if (p > threshold * 0.7) {
              const alpha = Math.min(1, Math.max(0, (p - threshold * 0.7) * 2.5));
              ctx.fillStyle = accentColor;
              ctx.globalAlpha = alpha * 0.85;
              ctx.fillRect(x * gridSize + 1, y * gridSize + 1, gridSize - 2, gridSize - 2);

              // Grid border lines for matrix cyberpunk effect
              ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
              ctx.lineWidth = 1;
              ctx.strokeRect(x * gridSize, y * gridSize, gridSize, gridSize);
            }
          }
        }
        ctx.globalAlpha = 1.0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [loaded, gridSize, accentColor]);

  return (
    <div
      className={`relative overflow-hidden rounded-xl cursor-pointer select-none group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        aria-label={alt}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
    </div>
  );
};

export default PixelGridTransition;
