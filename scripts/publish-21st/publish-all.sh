#!/bin/bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🚀 Starting 21st Registry Multi-Asset Batch Publisher..."

echo ""
echo ">>> STEP 1: Publishing Components"
bash "$DIR/publish-components.sh"

echo ""
echo ">>> STEP 2: Publishing Themes"
bash "$DIR/publish-themes.sh" || echo "Themes require API key from https://21st.dev/mcp"

echo ""
echo ">>> STEP 3: Publishing Templates"
bash "$DIR/publish-templates.sh" || echo "Templates require API key from https://21st.dev/mcp"

echo ""
echo "🎉 21st Registry Publication process finished!"
