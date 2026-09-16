"use client";

import React, { useEffect, useRef, useState, type FC } from "react";

export interface FluidWaveCanvasProps {
  waveCount?: number;
  speed?: number;
  amplitude?: number;
  colorScheme?: "ocean" | "sunset" | "neon" | "emerald";
  className?: string;
  interactive?: boolean;
}

export const FluidWaveCanvas: FC<FluidWaveCanvasProps> = ({
  waveCount = 4,
  speed = 0.02,
  amplitude = 35,
  colorScheme = "ocean",
  className = "",
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  const getColors = () => {
    switch (colorScheme) {
      case "sunset":
        return ["#f43f5e", "#fb923c", "#facc15", "#db2777"];
      case "neon":
        return ["#a855f7", "#ec4899", "#3b82f6", "#06b6d4"];
      case "emerald":
        return ["#10b981", "#14b8a6", "#06b6d4", "#22c55e"];
      default: // ocean
        return ["#0284c7", "#06b6d4", "#38bdf8", "#6366f1"];
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let step = 0;
    const colors = getColors();

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const midY = height / 2;

      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const color = colors[i % colors.length];
        const waveSpeed = speed * (1 + i * 0.25);
        const waveAmp = amplitude * (1 - i * 0.15);
        const freq = 0.008 + i * 0.002;

        for (let x = 0; x <= width; x += 4) {
          // Sine baseline wave
          let y = midY + Math.sin(x * freq + step * waveSpeed + i) * waveAmp;

          // Interactive cursor pull effect
          if (interactive && mouseRef.current.active) {
            const dx = x - mouseRef.current.x;
            const dy = y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 180;
            if (dist < maxDist) {
              const pull = (1 - dist / maxDist) * 35;
              y += Math.sin(dist * 0.05 - step * 0.1) * pull;
            }
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = 2 + (waveCount - i) * 0.5;
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.globalAlpha = 0.85 - i * 0.15;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      step += 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [waveCount, speed, amplitude, colorScheme, interactive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div className={`relative w-full h-80 rounded-2xl bg-zinc-950 border border-zinc-800/80 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full cursor-crosshair"
      />
    </div>
  );
};

export default FluidWaveCanvas;
