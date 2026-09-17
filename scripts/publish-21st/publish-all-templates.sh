#!/usr/bin/env bash
# ==============================================================================
# 21st.dev Complete Paid Templates Publisher
# Synced with ground-truth products from https://scriptly.store/api/products.json
# ==============================================================================
set -e

if [ -f "$(dirname "$0")/../../.env" ]; then
  export $(grep -E '^(API_KEY_21ST|TWENTYFIRST_API_KEY)=' "$(dirname "$0")/../../.env" | xargs)
elif [ -f ".env" ]; then
  export $(grep -E '^(API_KEY_21ST|TWENTYFIRST_API_KEY)=' .env | xargs)
fi

API_KEY="${API_KEY_21ST:-$TWENTYFIRST_API_KEY}"

echo "=================================================================="
echo "🚀 21st.dev Marketplace - Complete Commercial Templates Publisher"
echo "Synced with ScriptlyStore API (https://scriptly.store/api/products.json)"
echo "Account: @sh20raj"
echo "=================================================================="

publish_template() {
  local name="$1"
  local site="$2"
  local preview="$3"
  local price="$4"
  local buy_url="$5"
  local description="$6"

  echo ""
  echo "------------------------------------------------------------------"
  echo "📦 Processing: $name"
  echo "   Price: \$$price | Live Demo: $site"
  echo "   Buy Link: $buy_url"
  echo "   Preview: $preview"
  echo "------------------------------------------------------------------"

  API_KEY_21ST="$API_KEY" 21st publish-template "$name" \
    --site "$site" \
    --preview "$preview" \
    --price "$price" \
    --buy-url "$buy_url" \
    --description "$description" || {
      echo "⚠️ Note: Could not publish $name right now (rate-limited or already active)."
    }

  sleep 2
}

# 1. VORTEX — Animated Agency Landing Page | 14 MagicUI Components
publish_template \
  "VORTEX — Animated Agency Landing Page" \
  "https://vortex-agency.surge.sh" \
  "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/r2t4eb1ac03zwpcwsk5z.png" \
  "29" \
  "https://scriptly.store/products/vortex-agency-magicui" \
  "Premium agency landing page with 14 animated MagicUI components, bento layout, and Next.js 16 + Tailwind CSS 4."

# 2. AURA — Premium AI SaaS Landing Page Template
publish_template \
  "AURA — Premium AI SaaS Landing Page" \
  "https://aura-ai-template.surge.sh" \
  "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@a6a4f912f0928cd4a7468fe55f539eed6f61db41/aura-screenshot-f2af123aaf190589.png" \
  "49" \
  "https://scriptly.store/products/aura-ai-template" \
  "Ultra-clean dark mode SaaS landing page optimized for high-intent B2B conversion, developer tooling, and product launches."

# 3. LUMIÈRE | Elite Digital Agency HTML Theme
publish_template \
  "LUMIÈRE — Elite Digital Agency HTML Theme" \
  "https://lumiere-theme-scriptly.surge.sh" \
  "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@08ca470aff1a4db6db672cf53545b9264d445fe9/Screenshot_2026-06-22_at_11.10.53_AM-fd2c74f48e70e3ac.png" \
  "39" \
  "https://scriptly.store/products/lumiere-elite-digital-agency-html-theme" \
  "Minimalist typography and high-end editorial layouts designed for bespoke creative agencies, architects, and luxury studios."

# 4. KRAFT - Premium 3D Hand-Drawn Portfolio Theme
publish_template \
  "KRAFT — Premium 3D Hand-Drawn Portfolio Theme" \
  "https://kraft-portfolio-theme.surge.sh" \
  "https://cdn.jsdelivr.net/gh/SH20RAJ/scriptly-codes@main/PRODUCTS/Portfolio/kraft-theme/public/thumbnail.png" \
  "29" \
  "https://scriptly.store/products/kraft-premium-3d-hand-drawn-portfolio-theme" \
  "Immersive 3D storytelling portfolio with Three.js camera transitions, hand-drawn papercraft textures, and physics interactions."

# 5. GRILLÉ — Premium Fine Dining & Luxury Restaurant HTML Template
publish_template \
  "GRILLÉ — Fine Dining & Luxury Restaurant" \
  "https://grille-restaurant-theme.surge.sh/" \
  "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@1c814a43b4a148ffab01a64df446e132419949a1/grille-thumbnail-9659c7da5fb1cdb0.png" \
  "39" \
  "https://scriptly.store/products/grille-restaurant-theme" \
  "Luxury dining and hospitality template featuring interactive menu showcase, reservation forms, and culinary gallery."

# 6. PIXELCRAFT — Retro Pixel Art Portfolio Next.js Theme
publish_template \
  "PIXELCRAFT — Retro Pixel Art Portfolio" \
  "https://pixel-craft-portfolio.surge.sh/" \
  "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@6cdafcff3c3edb59696d7c38104e5ef764de03b0/pixel-craft-thumbnail-52d45625eaeaff77.png" \
  "39" \
  "https://scriptly.store/products/pixel-craft-theme" \
  "Gamified retro developer showcase with nostalgic 8-bit styling, interactive arcade buttons, and pixel-art assets."

# 7. AURA | Premium Editorial & Fashion Portfolio HTML Theme
publish_template \
  "AURA — Editorial & Fashion Portfolio" \
  "https://aura-scriptly-theme.surge.sh/" \
  "https://github.com/30tools/scriptly-assets/releases/download/dwq/Screen.Recording.2026-06-22.at.11.26.34.AM.gif" \
  "26" \
  "https://scriptly.store/products/aura-premium-editorial-fashion-portfolio-html-theme" \
  "Clean, high-aesthetic fashion and editorial portfolio layout with typography micro-interactions, dark mode, and case study grids."

# 8. SmileFlow — Premium Next.js 16 Dental Practice Template
publish_template \
  "SmileFlow — Next.js 16 Dental Practice Template" \
  "https://smileflow.shraj.workers.dev/" \
  "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/dtxlpqos5xb2bupgbahv.png" \
  "50" \
  "https://scriptly.store/products/smileflow-premium-next-js-16-dental-practice-template" \
  "Conversion-engineered healthcare website template with bento services, smile transformation slider, and instant booking."

# 9. Panda Scroll Travel Animation Portfolio
publish_template \
  "Panda Scroll Travel Animation Portfolio" \
  "https://www.mr-pandas-psychologically-safe-portfolio.com/" \
  "https://github.com/30tools/coders/releases/download/few/Screenshot.2026-06-24.at.12.28.39.AM.png" \
  "40" \
  "https://scriptly.store/products/panda-scroll-travel-animation-portfolio" \
  "Delightful 3D journey storytelling portfolio with physics curves, procedural animations, and interactive character milestones."

# 10. Aero UI - Next.js 15 & Tailwind v4 Premium 3D Landing Page
publish_template \
  "Aero UI — Next.js 15 3D Landing Page" \
  "https://aero-ui-premium.surge.sh/" \
  "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@main/Screenshot 2026-06-14 at 8.24.25 AM.png" \
  "24" \
  "https://scriptly.store/products/aero-ui-premium-next-js-15-tailwind-v4-landing-page-template" \
  "Next.js 15 and Tailwind CSS v4 landing page featuring 3D perspective hero sections and dark glassmorphic cards."

# 11. Edors — Premium Next-Gen 3D React & Next.js Template
publish_template \
  "Edors — Next-Gen 3D React Template" \
  "https://edors.surge.sh/" \
  "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@main/Screenshot%202026-06-14%20at%208.34.08%E2%80%AFAM.png" \
  "40" \
  "https://scriptly.store/products/edors-premium-next-gen-3d-react-next-js-landing-page-template" \
  "High-performance interactive 3D WebGL scenes for SaaS startups seeking an extraordinary first impression."

# 12. JARVIS Cinematic - Futuristic Iron Man HUD Landing Page
publish_template \
  "JARVIS Cinematic — Futuristic Iron Man HUD" \
  "https://iron-man-jet.vercel.app/" \
  "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@main/Screenshot 2026-06-13 at 10.31.24 PM.png" \
  "39" \
  "https://scriptly.store/products/iron-man-j-a-r-v-i-s-cinematic-landing-page" \
  "Sci-fi HUD interface inspired by Iron Man's JARVIS with sound effects, canvas radar sweepers, and telemetry widgets."

# 13. Fizzi - 3D Ecommerce Landing Page with GSAP & Three.js
publish_template \
  "Fizzi — 3D Ecommerce Landing Page" \
  "https://fizzi-utvl.vercel.app/" \
  "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@main/Screenshot 2026-06-14 at 6.33.40 PM.png" \
  "19" \
  "https://scriptly.store/products/fizzi-a-3d-ecommerce-landing-page-built-with-next-js-14-gsap-three-js-and-prismic" \
  "E-commerce beverage landing page featuring real-time 3D can physics, liquid shaders, and smooth GSAP scroll triggers."

# 14. Norrav Animating GSAP Landing Page
publish_template \
  "Norrav — Animating GSAP Landing Page" \
  "https://norrav-landing-page.vercel.app/" \
  "https://cdn.jsdelivr.net/gh/30tools/scriptly-assets@main/ezgif-829fe881f6690f71.gif" \
  "34" \
  "https://scriptly.store/products/norrav-animating-gsap-landing-page" \
  "Awwwards-level interactive GSAP horizontal scrolling studio showcase with fluid cursor follower."

# 15. AETHEL - Autonomous AI Agents Platform
publish_template \
  "AETHEL — Autonomous AI Agents Platform" \
  "https://aethel-ai.surge.sh" \
  "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/aethel-real.png" \
  "49" \
  "https://scriptly.store/products/aethel-ai-agents" \
  "Ultra-modern dark mode SaaS landing page for autonomous AI agent platforms with live sandbox simulator, bento grids, and billing toggle."

# 16. LUMEN - Editorial Architecture & Spatial Atelier
publish_template \
  "LUMEN — Editorial Architecture Atelier" \
  "https://lumen-atelier.surge.sh" \
  "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/lumen-real.png" \
  "49" \
  "https://scriptly.store/products/lumen-atelier" \
  "Editorial luxury architecture and spatial atelier HTML5 template with project feasibility estimator, filterable monographs, and material swatches."

# 17. MATTER - Luxury Creative Agency Template
publish_template \
  "MATTER — Luxury Creative Agency Template" \
  "https://matter-agency-theme.surge.sh" \
  "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/matter-real.png" \
  "29" \
  "https://scriptly.store/products/matter-theme" \
  "A cinematic, scroll-triggered digital agency HTML template designed for elite marketing, content creation, and paid media studios."

# 18. VETRA - Autonomous AI Marketing Platform
publish_template \
  "VETRA — Autonomous AI Marketing Platform" \
  "https://vetra-saas.surge.sh" \
  "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/vetra-real.png" \
  "39" \
  "https://scriptly.store/products/vetra-ai-automation" \
  "Enterprise-grade AI marketing automation SaaS landing page with Next.js 15, Tailwind CSS, Framer Motion, and shadcn/ui."

# 19. NEXUS - Next.js 16 & Tailwind v4 Modern SaaS
publish_template \
  "NEXUS — Next.js 16 & Tailwind v4 Modern SaaS" \
  "https://nexus-saas.surge.sh" \
  "https://raw.githubusercontent.com/SH20RAJ/scriptly-codes/main/assets/previews/nexus-real.png" \
  "49" \
  "https://scriptly.store/products/nexus-saas-template" \
  "Bleeding-edge B2B SaaS landing page built with Next.js 16 App Router, Tailwind CSS v4, dynamic pricing matrices, and bento layouts."

# 20. APEX - Cinematic AI Agency & Interactive Studio
publish_template \
  "APEX — Cinematic AI Agency & Interactive Studio" \
  "https://apex-studio.surge.sh" \
  "https://images.unsplash.com/photo-1534972195531-a756b1126f25?w=1200&auto=format&fit=crop&q=80" \
  "39" \
  "https://scriptly.store/products/apex-ai-studio" \
  "Cinematic dark-mode agency and AI platform template featuring Framer Motion choreography, DotLottie vector animations, and lead capture funnels."

# 21. LINKIFY PRO - Developer Showcase & Multi-Tool SaaS
publish_template \
  "LINKIFY PRO — Developer Showcase & Multi-Tool SaaS" \
  "https://linkify-pro.surge.sh" \
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80" \
  "29" \
  "https://scriptly.store/products/linkify-pro-showcase" \
  "Ultra-modern personal branding, developer portfolio, and multi-link SaaS showcase platform built with Next.js 14, Tailwind CSS, and Framer Motion."

echo ""
echo "=================================================================="
echo "🎉 Finished publishing cycle for all verified ScriptlyStore templates!"
echo "=================================================================="
