#!/bin/bash
# Script to publish CSS themes to 21st.dev using API_KEY_21ST
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ -f "$DIR/../../.env" ]; then
  export $(grep -E '^(API_KEY_21ST|TWENTYFIRST_API_KEY)=' "$DIR/../../.env" | xargs)
elif [ -f ".env" ]; then
  export $(grep -E '^(API_KEY_21ST|TWENTYFIRST_API_KEY)=' .env | xargs)
fi

API_KEY="${API_KEY_21ST:-$TWENTYFIRST_API_KEY}"

echo "=================================================="
echo "Publishing Curated CSS Themes to 21st.dev"
echo "=================================================="

publish_theme() {
  local file="$1"
  local name="$2"
  local tags="$3"

  if [ ! -f "$file" ]; then
    echo "Skipping $name (file not found: $file)"
    return
  fi

  echo "--> Publishing Theme: $name..."
  API_KEY_21ST="$API_KEY" 21st publish-theme "$file" --name "$name" --tags "$tags" || echo "Failed to publish $name"
}

publish_theme "$DIR/themes/theme-tokyo-synthwave.css" "Tokyo Synthwave" "tokyo,synthwave,cyberpunk,neon,dark,retro"
publish_theme "$DIR/themes/theme-pantheon-cyberpunk.css" "Pantheon Cyberpunk Obsidian" "cyberpunk,obsidian,neon,purple,cyan,dark"
publish_theme "$DIR/themes/theme-emerald-matrix.css" "Emerald Matrix Noir" "emerald,terminal,developer,matrix,minimal"
publish_theme "$DIR/themes/theme-sunset-luxury.css" "Sunset Luxury Bronze" "luxury,amber,sunset,warm,modern"

echo "Done publishing themes!"
