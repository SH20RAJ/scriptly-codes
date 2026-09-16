# 🌟 Trending CodePen React Components for 21st.dev

A curated collection of world-class, viral UI effects and creative experiments inspired by top-trending and all-time most hearted **CodePen** demos around the globe. Converted into production-ready, typed TypeScript React components with interactive sandbox demos for **21st.dev**.

---

## 📦 Published Component Registry

| Component | CodePen Inspiration | Tech & Visual Hook | 21st.dev Component Registry | Install Command |
| :--- | :--- | :--- | :--- | :--- |
| **Holographic 3D Tilt Card** | *Simon Goellner's #1 Most Hearted Pokecards Pen* | 3D perspective tilt, rainbow foil iridescence (`mix-blend-mode: color-dodge`), and specular cursor reflection. | [21st.dev/@sh20raj/components/holographic-3-d-tilt-card](https://21st.dev/@sh20raj/components/holographic-3-d-tilt-card) | `npx @21st-dev/cli add @sh20raj/holographic-3-d-tilt-card` |
| **Liquid Magnetic Button** | *Lucas Bebber's Iconic Gooey SVG Filter & Elastic Physics* | SVG `<feColorMatrix>` gooey liquid filter, elastic cursor spring tracking, and detached fluid droplets. | [21st.dev/@sh20raj/components/liquid-magnetic-button](https://21st.dev/@sh20raj/components/liquid-magnetic-button) | `npx @21st-dev/cli add @sh20raj/liquid-magnetic-button` |
| **Cyberpunk HUD Radar** | *Sci-Fi Telemetry & CRT Scanner Pens* | 60fps rotating canvas sweep cone, procedural distance rings, phosphorescent ping waves, and chromatic glitch text. | [21st.dev/@sh20raj/components/cyberpunk-hud-radar](https://21st.dev/@sh20raj/components/cyberpunk-hud-radar) | `npx @21st-dev/cli add @sh20raj/cyberpunk-hud-radar` |
| **Fluid Wave Canvas** | *Jack Rugile's Harmonic Sine Wave Simulations* | Multi-layered 60fps sine wave simulation with neon glow shaders and real-time interactive cursor ripple disturbances. | [21st.dev/@sh20raj/components/fluid-wave-canvas](https://21st.dev/@sh20raj/components/fluid-wave-canvas) | `npx @21st-dev/cli add @sh20raj/fluid-wave-canvas` |

---

## 🛠️ Architecture & 21st.dev Headless Sandbox Guidelines

Every component adheres to the strict 21st.dev headless capture origin specifications:
1. **Zero External Image Dependencies**: No network calls to Unsplash or third-party image CDNs (which trigger `Capture request left its allowed origin` errors during headless Chrome screenshot capture). All visual art uses vector SVG paths, CSS gradients, or Canvas 2D procedural rendering.
2. **Self-Contained Components**: Embedded CSS animations, inline SVG filters, and self-contained utilities.
3. **Interactive Demo Sandboxes**: Every `<Name>Demo.tsx` includes interactive sliders, color variant selectors, and live state toggles so users can test props directly on the 21st marketplace.

---

## 🚀 Quick Batch Publishing

To publish or update all CodePen components on 21st.dev:
```bash
bash CODEPEN_COMPONENTS/publish-all-codepen-components.sh
```
