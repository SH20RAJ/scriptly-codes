#!/usr/bin/env bash
# ==============================================================================
# 21st.dev Publisher - Trending CodePen React Components
# Account: @sh20raj
# ==============================================================================
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ -f "$DIR/../.env" ]; then
  export $(grep -E '^(API_KEY_21ST|TWENTYFIRST_API_KEY)=' "$DIR/../.env" | xargs)
elif [ -f ".env" ]; then
  export $(grep -E '^(API_KEY_21ST|TWENTYFIRST_API_KEY)=' .env | xargs)
fi

API_KEY="${API_KEY_21ST:-$TWENTYFIRST_API_KEY}"

echo "=================================================================="
echo "🚀 Publishing Curated Trending CodePen Components to 21st.dev"
echo "=================================================================="

publish_comp() {
  local comp="$1"
  local demo="$2"
  local name="$3"
  local desc="$4"
  local tags="$5"

  echo ""
  echo "📦 Publishing: $name"
  API_KEY_21ST="$API_KEY" 21st publish "$DIR/$comp" \
    --demo "$DIR/$demo" \
    --name "$name" \
    --description "$desc" \
    --tags "$tags" \
    --auto --no-open || echo "⚠️ Draft created or already active for $name"

  sleep 3
}

# 1. Holographic 3D Tilt Card (CodePen #1 Most Hearted Classic)
publish_comp \
  "HoloTiltCard.tsx" \
  "HoloTiltCardDemo.tsx" \
  "Holographic 3D Tilt Card" \
  "World-famous 3D holographic tilt card with iridescent rainbow foil glare, dynamic specular reflection, and realistic perspective physics inspired by CodePen's #1 most hearted pen." \
  "holographic,tilt,card,3d,glare"

# 2. Liquid Magnetic Button (Gooey SVG Filter & Elastic Physics)
publish_comp \
  "LiquidMagneticButton.tsx" \
  "LiquidMagneticButtonDemo.tsx" \
  "Liquid Magnetic Button" \
  "High-performance magnetic CTA button with elastic cursor tracking, SVG gooey filter liquid droplets, and customizable vibrant color accents." \
  "button,magnetic,gooey,liquid,svg-filter"

# 3. Cyberpunk HUD Radar (Sci-Fi Canvas Telemetry Scanner)
publish_comp \
  "CyberGlitchRadar.tsx" \
  "CyberGlitchRadarDemo.tsx" \
  "Cyberpunk HUD Radar" \
  "Futuristic 60fps canvas radar scanner with dynamic target ping rings, CRT scanline overlay, and chromatic glitch text headers." \
  "radar,cyberpunk,canvas,hud,glitch"

# 4. Fluid Wave Canvas (Harmonic 60fps Sine Wave Physics)
publish_comp \
  "FluidWaveCanvas.tsx" \
  "FluidWaveCanvasDemo.tsx" \
  "Fluid Wave Canvas" \
  "Harmonic 60fps sine wave simulation with neon glow shaders and real-time interactive cursor ripple disturbances." \
  "canvas,waves,sine,fluid,animation"

echo ""
echo "=================================================================="
echo "🎉 All CodePen trending components successfully processed!"
echo "=================================================================="
