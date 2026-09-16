---
name: codepen-to-21st
description: Master playbook for searching, extracting, transforming, and publishing world-class CodePen / web animations into production-ready React components on 21st.dev.
---

# CodePen to 21st.dev Component Engineering Playbook

This skill provides an end-to-end framework for finding the most loved, trending animations and creative experiments from **CodePen** and web design showcases around the world, converting them into self-contained React + TypeScript components, and publishing them directly to the **21st.dev** component registry.

---

## 1. Discovery & Curation Strategy

### Finding Viral Visual Hooks
Search for high-converting visual patterns that wow developers on first glance:
1. **Interactive Physics**: Magnetic cursors, liquid metaballs, elastic spring transitions, gravity drops.
2. **Procedural Shaders & Canvas**: Perlin noise waves, holographic iridescent foils, constellation particles, radar scanners.
3. **Typography & Text FX**: Aurora gradients, chromatic glitch aberration, variable font scroll triggers.
4. **Futuristic UI / HUDs**: Cyber telemetry, CRT scanlines, terminal simulators, sci-fi switches.

### Best Discovery Sources
- **CodePen Trending & Picks**: `https://codepen.io/trending`, `https://codepen.io/picks`
- **Most Hearted Pens of All Time**: Annual "Most Hearted" retrospectives on CSS-Tricks, DEV.to, and CodePen blogs.
- **GitHub Repositories**: Search GitHub for `awesome-codepen` and trending CSS animation libraries.

---

## 2. Converting Vanilla CodePen to React TypeScript

CodePens usually separate code into HTML, CSS (or SCSS), and JavaScript. To make them publishable on 21st.dev:

1. **Self-Contained File (`<Name>.tsx`)**:
   - Wrap state with standard React hooks (`useRef`, `useState`, `useEffect`).
   - Replace DOM queries (`document.querySelector`) with React `useRef`.
   - Embed internal keyframes or styles using Tailwind CSS or inline `<style>` tags.
   - Define a strictly typed prop interface (`export interface <Name>Props`).
   - Use standard `export default <Name>;` and named export.

2. **Interactive Demo Sandbox (`<Name>Demo.tsx`)**:
   - 21st.dev requires an interactive companion demo.
   - Must export `export default function <Name>Demo()`.
   - Include interactive UI controls: preset buttons, color variant pickers, and sensitivity/speed sliders.
   - Place on a deep dark canvas (`bg-zinc-950`) with subtle ambient radial gradients for maximum visual contrast.

---

## 3. The Headless Capture Origin Rule (CRITICAL)

During `21st publish`, the 21st cloud backend runs headless Chrome (`render-cli`) to take automated cover screenshots and record preview videos.

> [!CAUTION]
> **Strict Origin Boundary**:
> If your component or demo loads any asset from an external domain (e.g., `https://images.unsplash.com/photo...` or external CDNs), the headless renderer will abort with:
> `CLI review failed: Cover generation failed for "default": render-cli: Capture request left its allowed origin`

### How to Guarantee Clean Headless Capture:
- **Zero External Images**: NEVER use `<img src="https://images.unsplash.com/..." />` in registry components.
- **Use SVG Graphics**: Render icons and illustrations as inline `<svg>` vector paths with linear/radial gradients.
- **Use Procedural Canvas**: For complex art or backgrounds, draw them using HTML5 Canvas 2D or CSS gradients.

---

## 4. Creative Backlinking Guidelines

To drive traffic to your primary store (`https://scriptly.store/`) while maintaining marketplace design standards:

1. **Interactive Buttons**:
   - Provide a default `onClick` handler that opens the target URL:
   ```tsx
   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
     if (onClick) onClick(e);
     else if (typeof window !== "undefined") window.open("https://scriptly.store/", "_blank", "noopener,noreferrer");
   };
   ```
2. **Cards & Badges**:
   - Embed a branded series ribbon in the card footer (e.g., `"Scriptly Holographic Series"`) with an external link arrow.
3. **Canvas & HUD Components**:
   - Add a subtle status pill or telemetry tile (e.g., `"NETWORK: SCRIPTLY ↗"`) that links to the store.
4. **Watermarks / Signature Badges**:
   - Place a sleek glassmorphic pill in the bottom corner of canvas containers (e.g., `"Scriptly Wave Engine ↗"`).

---

## 5. CLI Publishing Workflow

Authenticate once with your API key:
```bash
export API_KEY_21ST="21st_sk_..."
```

Publish your component:
```bash
21st publish <Component>.tsx \
  --demo <ComponentDemo>.tsx \
  --name "Catchy Title" \
  --description "SEO-optimized description detailing the animation physics and use case." \
  --tags "canvas,animation,codepen,interactive,react" \
  --auto --no-open
```

### Handling Draft Collisions (HTTP 409)
If another draft operation is running or you need to finalize an existing draft:
```bash
# Check your active drafts
21st components

# Resume and publish with --no-push
21st publish <Component>.tsx \
  --draft draft:<uuid> \
  --no-push --auto --no-open
```
