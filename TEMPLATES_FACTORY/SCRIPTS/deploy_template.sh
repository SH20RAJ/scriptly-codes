#!/usr/bin/env bash
# ==============================================================================
# Multi-Cloud Deployer for TEMPLATES_FACTORY
# Supports Surge.sh (default), Netlify, and Vercel CLI
# ==============================================================================
set -e

DIR="$1"
SLUG="$2"
PROVIDER="${3:-surge}"

if [ -z "$DIR" ] || [ -z "$SLUG" ]; then
  echo "Usage: ./deploy_template.sh <directory> <slug> [surge|netlify|vercel]"
  exit 1
fi

echo "=================================================================="
echo "🚀 Deploying: $SLUG"
echo "   Directory: $DIR"
echo "   Provider:  $PROVIDER"
echo "=================================================================="

case "$PROVIDER" in
  surge)
    DOMAIN="${SLUG}.surge.sh"
    echo "⚡ Deploying to Surge: https://${DOMAIN} ..."
    npx surge "$DIR" "$DOMAIN"
    echo "🔍 Verifying HTTP response..."
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://${DOMAIN}")
    echo "HTTP Status: $HTTP_CODE"
    if [ "$HTTP_CODE" -ne 200 ]; then
      echo "⚠️ Warning: Domain returned HTTP $HTTP_CODE"
    else
      echo "✅ Successfully live at https://${DOMAIN}"
    fi
    ;;

  netlify)
    echo "⚡ Deploying to Netlify..."
    npx netlify deploy --prod --dir="$DIR"
    ;;

  vercel)
    echo "⚡ Deploying to Vercel..."
    cd "$DIR" && npx vercel deploy --prod --yes
    ;;

  *)
    echo "❌ Unknown provider: $PROVIDER"
    exit 1
    ;;
esac
