#!/bin/bash
# Script to publish paid templates to 21st.dev registry
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
API_KEY="${API_KEY_21ST:-21st_sk_72d6ae9d2237f5ad7986e096d11e6310b3c16d97cfba3db675b95fe0c7787ac1}"

echo "=================================================="
echo "Publishing Paid Templates to 21st.dev Registry"
echo "=================================================="

publish_template() {
  local name="$1"
  local site="$2"
  local preview="$3"
  local price="$4"
  local buy_url="$5"
  local description="$6"

  echo ""
  echo "--> Publishing Template: $name (\$$price)..."
  API_KEY_21ST="$API_KEY" 21st publish-template "$name" \
    --site "$site" \
    --preview "$preview" \
    --price "$price" \
    --buy-url "$buy_url" \
    --description "$description" || echo "Failed/Rate-limited on $name"

  sleep 2
}

publish_template \
  "MATTER - Luxury Agency Template" \
  "https://matter-agency-theme.surge.sh" \
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" \
  "29" \
  "https://scriptly.store/products/matter-theme" \
  "A cinematic, scroll-triggered digital agency HTML template designed for elite marketing and paid media studios."

publish_template \
  "VORTEX - High-Impact Agency MagicUI" \
  "https://vortex-agency.surge.sh" \
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" \
  "49" \
  "https://scriptly.store/products/vortex-agency-magicui" \
  "Next.js and MagicUI powered creative studio website with animated beam, particles, and interactive bento layout."

publish_template \
  "AURA - Minimalist AI SaaS Landing" \
  "https://aura-ai-template.surge.sh" \
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" \
  "39" \
  "https://scriptly.store/products/aura-theme" \
  "Ultra-clean dark mode SaaS landing page optimized for high-intent B2B conversion and developer tooling."

publish_template \
  "LUMIERE - Luxury Design Studio" \
  "https://lumiere-theme-scriptly.surge.sh" \
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80" \
  "49" \
  "https://scriptly.store/products/lumiere-theme" \
  "Minimalist typography and high-end editorial layouts designed for bespoke creative agencies and architects."

publish_template \
  "KRAFT - 3D Interactive Portfolio" \
  "https://kraft-portfolio-theme.surge.sh" \
  "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80" \
  "59" \
  "https://scriptly.store/products/kraft-theme" \
  "Immersive 3D storytelling portfolio with Three.js camera transitions, hand-drawn papercraft textures, and physics."

publish_template \
  "PIXEL CRAFT - Retro 8-Bit Portfolio" \
  "https://pixel-craft-portfolio.surge.sh/" \
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80" \
  "29" \
  "https://scriptly.store/products/pixel-craft-theme" \
  "Gamified retro developer showcase with nostalgic 8-bit styling, interactive arcade buttons, and pixel-art assets."

publish_template \
  "GRILLE - Fine Dining Restaurant" \
  "https://grille-restaurant-theme.surge.sh/" \
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80" \
  "39" \
  "https://scriptly.store/products/grille-theme" \
  "Luxury dining and hospitality template featuring interactive menu showcase, reservation forms, and culinary gallery."

echo ""
echo "=================================================="
echo "Done publishing templates!"
echo "=================================================="
