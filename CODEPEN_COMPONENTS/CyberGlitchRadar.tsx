"use client";

import React, { useEffect, useRef, useState, type FC } from "react";

export interface CyberGlitchRadarProps {
  title?: string;
  subtitle?: string;
  themeColor?: "cyan" | "emerald" | "amber" | "fuchsia";
  sweepSpeed?: number;
  showScanlines?: boolean;
  className?: string;
}

export const CyberGlitchRadar: FC<CyberGlitchRadarProps> = ({
  title = "TITAN-IX RECON HUD",
  subtitle = "SECTOR 07 // THREAT SCAN ACTIVE",
  themeColor = "cyan",
  sweepSpeed = 0.03,
  showScanlines = true,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glitchActive, setGlitchActive] = useState(false);
  const [threatCount, setThreatCount] = useState(4);

  const getThemeHex = () => {
    switch (themeColor) {
      case "emerald":
        return "#10b981";
      case "amber":
        return "#f59e0b";
      case "fuchsia":
        return "#d946ef";
      default:
        return "#06b6d4";
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angle = 0;
    let animId: number;

    const blips = [
      { r: 45, theta: 0.8, size: 4, pulse: 0 },
      { r: 90, theta: 2.3, size: 5, pulse: 0 },
      { r: 120, theta: 4.1, size: 3.5, pulse: 0 },
      { r: 75, theta: 5.4, size: 4.5, pulse: 0 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = canvas.width * 0.46;
      const color = getThemeHex();

      // Draw concentric radar range rings
      ctx.strokeStyle = `${color}30`;
      ctx.lineWidth = 1;
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (radius / 4) * i, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.stroke();

      // Rotating Radar Sweep Cone
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle - 0.4, angle);
      ctx.closePath();
      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      sweepGrad.addColorStop(0, `${color}40`);
      sweepGrad.addColorStop(1, `${color}05`);
      ctx.fillStyle = sweepGrad;
      ctx.fill();

      // Leading beam ray
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // Render Detected Blips
      blips.slice(0, threatCount).forEach((b) => {
        const bx = cx + b.r * Math.cos(b.theta);
        const by = cy + b.r * Math.sin(b.theta);

        // Calculate angular difference to beam for ping intensity
        let diff = (angle - b.theta) % (Math.PI * 2);
        if (diff < 0) diff += Math.PI * 2;
        const isPinged = diff < 0.2;

        if (isPinged) {
          b.pulse = 1;
        } else {
          b.pulse = Math.max(0.2, b.pulse - 0.015);
        }

        // Blip dot
        ctx.beginPath();
        ctx.arc(bx, by, b.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = b.pulse * 15;
        ctx.fill();

        // Expanding Ping Wave ring
        if (b.pulse > 0.4) {
          ctx.beginPath();
          ctx.arc(bx, by, b.size + (1 - b.pulse) * 20, 0, Math.PI * 2);
          ctx.strokeStyle = `${color}${Math.floor(b.pulse * 255).toString(16).padStart(2, "0")}`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      angle = (angle + sweepSpeed) % (Math.PI * 2);
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [themeColor, sweepSpeed, threatCount]);

  // Periodic random glitch pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 220);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative w-80 rounded-2xl bg-zinc-950 border border-zinc-800/80 p-5 overflow-hidden text-white flex flex-col items-center select-none shadow-2xl ${className}`}
    >
      {/* Scanline CRT Texture */}
      {showScanlines && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-30" />
      )}

      {/* Cyber Corner Markers */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-zinc-600" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-zinc-600" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-zinc-600" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-zinc-600" />

      {/* Header with Glitch Effect */}
      <div className="relative z-10 text-center w-full mb-3">
        <h3
          className={`font-mono text-xs font-bold tracking-widest uppercase transition-all duration-75 ${
            glitchActive
              ? "text-red-400 translate-x-[2px] skew-x-3 drop-shadow-[2px_0_#06b6d4]"
              : "text-zinc-300"
          }`}
        >
          {title}
        </h3>
        <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 mt-1 px-1">
          <span>STAT: 0x9B</span>
          <span className="text-emerald-400 font-semibold animate-pulse">LOCK ACTIVE</span>
        </div>
      </div>

      {/* Radar Canvas Display */}
      <div className="relative z-10 my-2 w-64 h-64 flex items-center justify-center rounded-full bg-zinc-900/60 border border-zinc-800 shadow-inner">
        <canvas ref={canvasRef} width={256} height={256} className="w-full h-full" />
      </div>

      {/* Telemetry Stats Bar */}
      <div className="relative z-10 w-full mt-3 pt-2 border-t border-zinc-800/80 grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
        <div className="bg-zinc-900/80 p-1.5 rounded border border-zinc-800">
          <div className="text-zinc-500 text-[8px]">TARGETS</div>
          <div className="font-bold text-white">{threatCount} BLIPS</div>
        </div>
        <div className="bg-zinc-900/80 p-1.5 rounded border border-zinc-800">
          <div className="text-zinc-500 text-[8px]">SWEEP</div>
          <div className="font-bold text-cyan-400">60 FPS</div>
        </div>
        <div className="bg-zinc-900/80 p-1.5 rounded border border-zinc-800">
          <div className="text-zinc-500 text-[8px]">GRID</div>
          <div className="font-bold text-zinc-300">GEO-SYNC</div>
        </div>
      </div>
    </div>
  );
};

export default CyberGlitchRadar;
