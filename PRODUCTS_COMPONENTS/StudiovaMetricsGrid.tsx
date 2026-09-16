"use client";

import React, { useEffect, useState, useId } from "react";

export interface MetricItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface StudiovaMetricsGridProps {
  className?: string;
  metrics?: MetricItem[];
  accentColor?: string;
  duration?: number;
}

const DEFAULT_METRICS: MetricItem[] = [
  {
    value: 250,
    suffix: "+",
    label: "Global Launches",
    description: "Multi-platform digital products delivered across 18 countries.",
  },
  {
    value: 99,
    suffix: ".4%",
    label: "Client Retention",
    description: "Sustained long-term engineering and branding partnerships.",
  },
  {
    value: 42,
    prefix: "$",
    suffix: "M+",
    label: "Client Revenue",
    description: "Measurable commercial growth unlocked for partner brands.",
  },
  {
    value: 14,
    suffix: "",
    label: "Design Accolades",
    description: "Industry recognition from top digital design platforms.",
  },
];

export function StudiovaMetricsGrid({
  className = "",
  metrics = DEFAULT_METRICS,
  accentColor = "#C1FF72",
  duration = 1600,
}: StudiovaMetricsGridProps) {
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart

      setCounts(metrics.map((m) => Math.floor(ease * m.value)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCounts(metrics.map((m) => m.value));
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [metrics, duration]);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d12] p-8 text-white select-none ${className}`}
    >
      <style>{`
        @keyframes pulse-glow-${id} {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.08); }
        }
        .studiova-glow-${id} {
          animation: pulse-glow-${id} 6s ease-in-out infinite;
        }
      `}</style>

      {/* Atmospheric Neon Ambience */}
      <div
        className={`studiova-glow-${id} pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-[110px]`}
        style={{ backgroundColor: accentColor }}
      />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-1"
          >
            {/* Top Accent Indicator */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                KPI 0{idx + 1}
              </span>
              <span
                className="h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-150"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 0 10px ${accentColor}`,
                }}
              />
            </div>

            {/* Counter Value */}
            <div className="my-5">
              <div
                className="font-mono text-4xl font-extrabold tracking-tight sm:text-5xl"
                style={{ color: accentColor }}
              >
                {item.prefix || ""}
                {counts[idx]}
                {item.suffix || ""}
              </div>
              <div className="mt-2 text-base font-bold text-white tracking-wide">
                {item.label}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudiovaMetricsGrid;
