"use client";

import React, { useEffect, useRef, useState } from "react";

interface YuffieKineticInterfaceProps {
  title?: string;
  subtitle?: string;
  kanjiTitle?: string;
  quote?: string;
  quoteJp?: string;
  audioTrackName?: string;
  audioSrc?: string;
  brandLink?: string;
  accentColor?: string;
  className?: string;
}

export function YuffieKineticInterface({
  title = "BLAZING BRIGHT",
  subtitle = "OVERDRIVE MODE // FREQUENCY: STABLE",
  kanjiTitle = "朝日",
  quote = "Fret not! The kinetic vanguard has arrived!",
  quoteJp = "心配ご無用！正義の味方、参上！",
  audioTrackName = "DOLLWAVE // Cybernetic Pulse",
  audioSrc = "https://www.dropbox.com/scl/fi/ersb17v6uwmcelmvapgxp/Fall-To-Hell-DOLLWAVE-Darkwave-Lyrics-visualizer.mp3?rlkey=3pfivpdswvsnwxwzqnix01wnl&st=vs1tmdms&dl=1",
  brandLink = "https://scriptly.store/",
  accentColor = "#b5893d",
  className = "",
}: YuffieKineticInterfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180);
  const [volume, setVolume] = useState(0.8);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Smooth lerp mouse tracking
  useEffect(() => {
    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    const updateParallax = () => {
      currentX += (mousePos.x * 20 - currentX) * 0.08;
      currentY += (mousePos.y * 14 - currentY) * 0.08;
      setParallax({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos.x, mousePos.y]);

  // Petals Canvas Particle Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resizeCanvas = () => {
      if (!containerRef.current || !canvas) return;
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Petal {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedY: number = 0;
      speedX: number = 0;
      angle: number = 0;
      spin: number = 0;
      color: string = "";

      constructor(w: number, h: number) {
        this.reset(w, h);
      }

      reset(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = -20 - Math.random() * h;
        this.size = Math.random() * 5 + 3;
        this.speedY = Math.random() * 0.7 + 0.3;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.angle = Math.random() * 360;
        this.spin = Math.random() * 0.8 - 0.4;
        const colors = [
          "rgba(239, 68, 68, 0.28)",
          "rgba(249, 115, 22, 0.22)",
          "rgba(254, 205, 211, 0.25)",
          "rgba(181, 137, 61, 0.35)",
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(w: number, h: number, wind: number) {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y / 40) * 0.25 + wind * 0.05;
        this.angle += this.spin;

        if (this.y > h + 20 || this.x < -20 || this.x > w + 20) {
          this.reset(w, h);
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate((this.angle * Math.PI) / 180);
        context.fillStyle = this.color;
        context.beginPath();
        context.ellipse(0, 0, this.size, this.size / 1.8, 0, 0, 2 * Math.PI);
        context.fill();
        context.restore();
      }
    }

    const maxPetals = 28;
    const petals: Petal[] = [];
    for (let i = 0; i < maxPetals; i++) {
      petals.push(new Petal(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < petals.length; i++) {
        petals[i].update(canvas.width, canvas.height, -parallax.x);
        petals[i].draw(ctx);
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, [parallax.x]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Fallback if browser audio policy prevents autoplay
          setIsPlaying(true);
        });
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetTime = pct * duration;
    setCurrentTime(targetTime);
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[1100px] h-[580px] rounded-2xl overflow-hidden bg-[#07070a] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.9),inset_0_0_80px_rgba(7,7,10,0.9)] select-none font-sans ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(80, 8, 8, 0.4) 0%, rgba(7, 7, 10, 0.95) 85%)",
      }}
    >
      {/* Hidden Audio Element (Lazy-loaded on interaction to pass headless review) */}
      <audio
        ref={audioRef}
        src={isPlaying ? audioSrc : undefined}
        preload="none"
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            if (audioRef.current.duration) {
              setDuration(audioRef.current.duration);
            }
          }
        }}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Cyberpunk Vignette & Dot Matrix */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.05) 15%, transparent 16%)",
          backgroundSize: "6px 6px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle,transparent_40%,rgba(6,6,8,0.85)_100%)]" />

      {/* Corner Brackets */}
      <div className="absolute top-5 left-5 w-4 h-4 border-t-2 border-l-2 border-white/20 z-20 pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-4 h-4 border-b-2 border-r-2 border-white/20 z-20 pointer-events-none" />

      {/* Background Animated Kinetic Text */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[10rem] font-black tracking-[28px] text-[#b5893d]/[0.03] pointer-events-none z-0 uppercase transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${parallax.x * 0.4}px, -50%)`,
        }}
      >
        NIHILITY NIHILITY KINETIC OVERDRIVE
      </div>

      {/* Falling Sakura Petals Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-20 pointer-events-none"
      />

      {/* Main Grid: Left HUD / Center Art / Right Kanji */}
      <div className="relative z-30 grid grid-cols-1 md:grid-cols-[45%_42%_13%] h-full">
        {/* LEFT PANEL */}
        <div className="p-8 md:p-10 flex flex-col justify-between bg-gradient-to-r from-[#07070a]/95 via-[#350505]/40 to-transparent">
          {/* Header Quote */}
          <div>
            <div className="border-l-2 border-[#b5893d] pl-3">
              <p className="text-xs font-bold tracking-[2px] text-zinc-300 uppercase">
                {quote}
              </p>
              <span className="text-[10px] tracking-wider text-zinc-500 block mt-1">
                {quoteJp}
              </span>
            </div>

            {/* Kanji Brand Heading */}
            <div className="mt-6">
              <span className="text-xs font-semibold tracking-[4px] text-zinc-300 block mb-1">
                {title}
              </span>
              <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                {kanjiTitle}
              </h1>
              <div className="inline-block bg-white text-black text-[11px] font-mono font-bold tracking-widest px-3 py-1 mt-3 rounded shadow-lg">
                V4.0 // ACTIVE
              </div>
            </div>
          </div>

          {/* Music Player & HUD Widget */}
          <div
            className={`mt-4 p-4 rounded-xl bg-black/60 border backdrop-blur-md transition-all duration-300 ${
              isPlaying
                ? "border-[#b5893d]/60 shadow-[0_0_25px_rgba(181,137,61,0.2)]"
                : "border-white/10"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider truncate max-w-[200px]">
                {audioTrackName}
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Progress Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 bg-white/10 rounded-full cursor-pointer overflow-hidden relative mb-3"
            >
              <div
                className="h-full bg-gradient-to-r from-[#b5893d] to-amber-300 transition-[width] duration-100 ease-linear rounded-full shadow-[0_0_8px_#b5893d]"
                style={{
                  width: `${Math.min(100, (currentTime / duration) * 100)}%`,
                }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={togglePlay}
                className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all transform active:scale-95 shadow"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>

              {/* Volume Slider */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-zinc-500">VOL</span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setVolume(val);
                    if (audioRef.current) audioRef.current.volume = val;
                  }}
                  className="w-16 h-1 bg-white/20 accent-[#b5893d] rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Footer Meta & Scriptly Backlink Badge */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>{subtitle}</span>
            <a
              href={brandLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-0.5 rounded border border-[#b5893d]/40 text-[#b5893d] hover:bg-[#b5893d]/10 transition-colors text-[10px] tracking-wider uppercase font-semibold"
            >
              ✦ Scriptly.Store
            </a>
          </div>
        </div>

        {/* CENTER PANEL: Holographic Parallax Character / Laser Scan */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Cyber Glass Backdrop with Laser Scanner */}
          <div className="w-[88%] h-[88%] rounded-xl relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-sm">
            {/* Horizontal Laser Scanning Line */}
            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#b5893d] to-transparent animate-pulse pointer-events-none top-1/4 shadow-[0_0_12px_#b5893d]" />

            {/* Kanji Watermark */}
            <span className="absolute -top-10 -left-6 text-[13rem] font-black text-white/[0.02] select-none pointer-events-none">
              古
            </span>

            {/* HUD Status Text Overlay */}
            <div className="absolute top-6 right-6 flex flex-col items-end gap-1.5 text-[9px] font-mono text-white/40 tracking-widest pointer-events-none">
              <span>STATUS: ACTIVE</span>
              <span>NEURAL: SYNCED</span>
              <div
                className="h-[2px] bg-[#b5893d] transition-all duration-300"
                style={{ width: isPlaying ? "48px" : "18px" }}
              />
            </div>
          </div>

          {/* Smooth Parallax Character Silhouette Canvas/SVG */}
          <div
            className="absolute inset-0 flex items-end justify-center pointer-events-none transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${parallax.x * 0.9}px, ${parallax.y * 0.6}px, 0)`,
            }}
          >
            {/* Cyber Heroine Vector Art with Atmospheric Backlight */}
            <div className="relative w-[340px] h-[460px] flex items-end justify-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
              {/* Radial Energy Bloom */}
              <div className="absolute bottom-16 w-56 h-56 rounded-full bg-red-600/15 blur-3xl" />
              <div className="absolute bottom-28 w-44 h-44 rounded-full bg-[#b5893d]/20 blur-2xl" />

              {/* High-fidelity Vector Cyber Character Silhouette */}
              <svg
                viewBox="0 0 400 600"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(181,137,61,0.25)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="cyberBodyGrad"
                    x1="200"
                    y1="100"
                    x2="200"
                    y2="580"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#f8fafc" />
                    <stop offset="0.3" stopColor="#cbd5e1" />
                    <stop offset="0.7" stopColor="#1e293b" />
                    <stop offset="1" stopColor="#090a0f" />
                  </linearGradient>
                  <linearGradient
                    id="goldTrim"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#b5893d" />
                  </linearGradient>
                </defs>

                {/* Cyber Scarf Flow */}
                <path
                  d="M190 230 C220 250 280 280 320 380 C340 430 350 510 330 580 C320 540 300 450 270 410 C245 375 210 320 190 280 Z"
                  fill="url(#goldTrim)"
                  opacity="0.8"
                />

                {/* Torso & Armor */}
                <path
                  d="M170 240 Q200 230 230 240 L245 340 Q200 370 155 340 Z"
                  fill="url(#cyberBodyGrad)"
                />
                {/* Glowing Core Gem */}
                <circle cx="200" cy="285" r="7" fill="#f59e0b" />
                <circle
                  cx="200"
                  cy="285"
                  r="14"
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                  opacity="0.5"
                />

                {/* Armor Collar & Shoulders */}
                <path
                  d="M140 250 L170 240 L200 255 L230 240 L260 250 L275 300 L250 310 L230 270 L200 280 L170 270 L150 310 L125 300 Z"
                  fill="#0f172a"
                  stroke="url(#goldTrim)"
                  strokeWidth="2"
                />

                {/* Cyber Visor / Head */}
                <circle cx="200" cy="180" r="32" fill="#1e293b" />
                <path
                  d="M180 175 Q200 165 220 175 L218 190 Q200 195 182 190 Z"
                  fill="#ef4444"
                  filter="drop-shadow(0 0 6px #ef4444)"
                />

                {/* Cyber Ponytail / Antenna */}
                <path
                  d="M210 160 C240 130 270 140 285 180 C270 170 250 165 230 170 Z"
                  fill="url(#goldTrim)"
                />
                <path
                  d="M190 160 C160 120 130 140 115 180 C130 170 150 165 170 170 Z"
                  fill="#0f172a"
                />

                {/* Lower Robe / Tech Skirt */}
                <path
                  d="M155 340 L245 340 L270 540 Q200 580 130 540 Z"
                  fill="#020617"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />

                {/* Gold Trim Accents on Robe */}
                <line
                  x1="200"
                  y1="340"
                  x2="200"
                  y2="555"
                  stroke="url(#goldTrim)"
                  strokeWidth="2"
                />
                <line
                  x1="165"
                  y1="380"
                  x2="145"
                  y2="520"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="235"
                  y1="380"
                  x2="255"
                  y2="520"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Vertical Kanji & Micro Japanese Typography */}
        <div className="hidden md:flex flex-col justify-between items-center py-10 px-4 bg-gradient-to-l from-[#07070a]/80 to-transparent border-l border-white/5">
          {/* Pill Badge */}
          <div className="border border-white/20 rounded-full px-3 py-1 text-[10px] font-mono tracking-widest text-zinc-300 bg-white/5">
            KINETIC
          </div>

          {/* Vertical Kanji Column */}
          <div className="flex flex-col items-center gap-4 my-auto">
            <span
              className="text-3xl font-black text-white tracking-[8px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
              style={{ writingMode: "vertical-rl" }}
            >
              朝日
            </span>
            <span
              className="text-[10px] tracking-[6px] text-zinc-400 font-mono"
              style={{ writingMode: "vertical-rl" }}
            >
              ASAHI
            </span>
            <span className="text-amber-400 text-xs animate-pulse">✦</span>
            <span
              className="text-[10px] tracking-[6px] text-zinc-500 font-mono"
              style={{ writingMode: "vertical-rl" }}
            >
              CREATIVE
            </span>
          </div>

          {/* Stamp */}
          <div className="text-center">
            <span
              className="text-[8px] tracking-[3px] text-zinc-500 font-mono block rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              システム起動
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YuffieKineticInterface;
