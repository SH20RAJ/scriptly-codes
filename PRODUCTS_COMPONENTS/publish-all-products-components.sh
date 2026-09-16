#!/usr/bin/env bash
set -e

# ==============================================================================
# Scriptly & 21st.dev Component Publishing Suite
# ==============================================================================

API_KEY_21ST="${API_KEY_21ST:-21st_sk_72d6ae9d2237f5ad7986e096d11e6310b3c16d97cfba3db675b95fe0c7787ac1}"
export API_KEY_21ST

echo "=========================================================="
echo "Publishing Scriptly-Enhanced UI Components to 21st.dev"
echo "=========================================================="

publish_comp() {
  local comp="$1"
  local demo="$2"
  local name="$3"
  local desc="$4"
  local tags="$5"

  echo ""
  echo "🚀 Publishing: $name"
  echo "File: $comp"
  echo "Demo: $demo"
  21st publish "$comp" \
    --demo "$demo" \
    --name "$name" \
    --description "$desc" \
    --tags "$tags" \
    --auto --no-open
}

# 1. Concentric Orbiting Circles (component:13806)
publish_comp \
  "PRODUCTS_COMPONENTS/OrbitingCircles.tsx" \
  "PRODUCTS_COMPONENTS/OrbitingCirclesDemo.tsx" \
  "Concentric Orbiting Circles" \
  "Smooth mathematical concentric orbital animation system with custom radii, rotation durations, reverse direction support, and interactive central anchor." \
  "orbit,animation,circles,svg,interactive,react"

# 2. Harmonic Acoustic Ripple (component:13807)
publish_comp \
  "PRODUCTS_COMPONENTS/AcousticRipple.tsx" \
  "PRODUCTS_COMPONENTS/AcousticRippleDemo.tsx" \
  "Harmonic Acoustic Ripple" \
  "Procedural concentric acoustic wave rings with harmonic frequency pulsation, radial field distortion, and interactive trigger." \
  "ripple,sound,waves,circles,animation,interactive,react"

# 3. Specular Spotlight Magic Card (component:13808)
publish_comp \
  "PRODUCTS_COMPONENTS/SpecularMagicCard.tsx" \
  "PRODUCTS_COMPONENTS/SpecularMagicCardDemo.tsx" \
  "Specular Spotlight Magic Card" \
  "Luxury cursor-following specular spotlight border illumination and radial surface glow for high-converting cards." \
  "card,spotlight,glow,border,cursor,mouse,react"

# 4. Curved Beam Interconnect (component:13812)
publish_comp \
  "PRODUCTS_COMPONENTS/CurvedBeamInterconnect.tsx" \
  "PRODUCTS_COMPONENTS/CurvedBeamInterconnectDemo.tsx" \
  "Curved Beam Interconnect" \
  "Dynamic SVG bezier interconnect curves with bidirectional animated photon gradient beams for reactive architecture graphs." \
  "beam,graph,nodes,bezier,svg,animation,react"

# 5. Cyber Matrix Retro Grid (component:13813)
publish_comp \
  "PRODUCTS_COMPONENTS/CyberRetroGrid.tsx" \
  "PRODUCTS_COMPONENTS/CyberRetroGridDemo.tsx" \
  "Cyber Matrix Retro Grid" \
  "3D perspective-projected retro wireframe synth terrain with continuous horizon acceleration, custom angles, and speed warping." \
  "grid,retro,synthwave,cyber,perspective,animation,react"

# 6. Kinetic 3D Parallax Cards (component:13815)
publish_comp \
  "PRODUCTS_COMPONENTS/KineticParallaxCards.tsx" \
  "PRODUCTS_COMPONENTS/KineticParallaxCardsDemo.tsx" \
  "Kinetic 3D Parallax Cards" \
  "Continuous interactive parallax card carousel with 3D depth layering, smooth inertial mouse tracking, and subtle brand badge." \
  "portfolio,cards,3d,parallax,carousel,animation,react"

# 7. Studiova Champagne Gold Metrics (component:13814)
publish_comp \
  "PRODUCTS_COMPONENTS/StudiovaMetricsGrid.tsx" \
  "PRODUCTS_COMPONENTS/StudiovaMetricsGridDemo.tsx" \
  "Studiova Champagne Gold Metrics" \
  "Luxury agency statistics and KPI counter grid with champagne gold accents, subtle borders, and smooth entrance transitions." \
  "metrics,stats,counter,agency,portfolio,react"

# 8. Kinetic Cyber Audio HUD
publish_comp \
  "PRODUCTS_COMPONENTS/YuffieKineticInterface.tsx" \
  "PRODUCTS_COMPONENTS/YuffieKineticInterfaceDemo.tsx" \
  "Kinetic Cyber Audio HUD" \
  "Anime and cyberpunk kinetic HUD music visualizer with HTML5 2D canvas falling sakura petal physics, inertia lerp parallax cursor tracking, laser scanning aura, and audio player." \
  "cyberpunk,anime,audio,hud,canvas,parallax,interactive"

# 9. Studiova Luxury Pricing Table
publish_comp \
  "PRODUCTS_COMPONENTS/StudiovaPricingTable.tsx" \
  "PRODUCTS_COMPONENTS/StudiovaPricingTableDemo.tsx" \
  "Studiova Luxury Pricing Table" \
  "High-converting dark mode pricing table with monthly/annual billing toggle, champagne gold accents, popular tier highlighting, and custom features breakdown." \
  "pricing,pricing-table,table,dark-mode,agency,saas,billing,react"

# 10. Studiova Interactive Services Tabs
publish_comp \
  "PRODUCTS_COMPONENTS/StudiovaServicesTabs.tsx" \
  "PRODUCTS_COMPONENTS/StudiovaServicesTabsDemo.tsx" \
  "Studiova Interactive Services Tabs" \
  "Luxury dark mode agency capabilities and services accordion tab system with champagne gold accents, dynamic deliverables preview, and responsive layouts." \
  "services,tabs,accordion,agency,portfolio,interactive,dark-mode,react"

# 11. Developer GitHub Activity Matrix
publish_comp \
  "PRODUCTS_COMPONENTS/GitHubStatsMatrix.tsx" \
  "PRODUCTS_COMPONENTS/GitHubStatsMatrixDemo.tsx" \
  "Developer GitHub Activity Matrix" \
  "Interactive developer GitHub activity dashboard with merged pull request telemetry, external repository counters, contribution metrics, and multi-tab repository showcase." \
  "github,stats,dashboard,developer,portfolio,telemetry,react,open-source"

echo ""
echo "=========================================================="
echo "✅ All components successfully deployed to 21st.dev!"
echo "=========================================================="

