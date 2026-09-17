#!/bin/bash
# Batch publishing script for high-viral components to 21st.dev
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=================================================="
echo "Publishing Verified Components to 21st.dev Registry"
echo "=================================================="

echo "=== 1. Publishing Aurora Text Shimmer ==="
21st publish "$DIR/AuroraText.tsx" \
  --demo "$DIR/AuroraTextDemo.tsx" \
  --name "Aurora Text Shimmer" \
  --description "Ultra-smooth fluid aurora spectral gradient text animation for modern typography with customizable colors, speed, and zero dependencies." \
  --tags "aurora,gradient,typography,animation,text,magicui,tailwind" \
  --auto --no-open

echo "=== 2. Publishing Quantum Pixel Grid Dissolve ==="
21st publish "$DIR/PixelGridTransition.tsx" \
  --demo "$DIR/PixelGridTransitionDemo.tsx" \
  --name "Quantum Pixel Grid Dissolve" \
  --description "Procedural 60fps canvas pixel grid dissolution transition with interactive hover reveal, scanlines, and customizable matrix accent colors." \
  --tags "shader,canvas,transition,pixel-grid,codrops,matrix,hover-effect" \
  --auto --no-open

echo "=== 3. Publishing Precision Border Beam Glow ==="
21st publish "$DIR/BorderBeam.tsx" \
  --demo "$DIR/BorderBeamDemo.tsx" \
  --name "Precision Border Beam Glow" \
  --description "High-intensity traveling laser ray along card perimeter with sub-pixel collision curvature and customizable dual-tone gradient trails." \
  --tags "border-beam,card,glow,animation,stroke,css-offset" \
  --auto --no-open

echo "=== 4. Publishing Tactile Shimmer CTA Button ==="
21st publish "$DIR/ShimmerButton.tsx" \
  --demo "$DIR/ShimmerButtonDemo.tsx" \
  --name "Tactile Shimmer CTA Button" \
  --description "High-conversion tactile button with 360-degree rotating specular conic light spark, inner bevel highlight, and elastic active physics." \
  --tags "button,shimmer,interactive,3d,micro-interaction,cta" \
  --auto --no-open

echo "=== 5. Publishing Reactive Particle Mesh Canvas ==="
21st publish "$DIR/ParticlesCanvas.tsx" \
  --demo "$DIR/ParticlesCanvasDemo.tsx" \
  --name "Reactive Particle Mesh Canvas" \
  --description "Zero-dependency HTML5 Canvas particle network with real-time cursor proximity repulsion, dynamic density, and kinetic physics." \
  --tags "particles,background,canvas,physics,interactive,math" \
  --auto --no-open

echo "=== 6. Publishing Kinetic 3D Sphere Tag Cloud ==="
21st publish "$DIR/SphereTagCloud.tsx" \
  --demo "$DIR/SphereTagCloudDemo.tsx" \
  --name "Kinetic 3D Sphere Tag Cloud" \
  --description "Mathematical 3D spherical tag cloud with mouse drag inertia, Fibonacci distribution, perspective depth projection, and click interaction." \
  --tags "tag-cloud,3d,sphere,canvas,interactive,tech-stack" \
  --auto --no-open

echo "=================================================="
echo "All components published successfully!"
echo "=================================================="
