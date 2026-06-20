#!/bin/bash

if [ "$#" -ne 3 ]; then
    echo "Usage: ./package.sh <original-folder> <new-product-name> <category>"
    echo "Example: ./package.sh infinite-scroll-with-parallax aura-theme Portfolio"
    exit 1
fi

ORIGINAL_DIR=$1
PRODUCT_NAME=$2
CATEGORY=$3

echo "Starting packaging for $PRODUCT_NAME..."

# Ensure target directories exist
mkdir -p ZIP
mkdir -p "PRODUCTS/$CATEGORY"

# Ensure the original directory exists
if [ ! -d "$ORIGINAL_DIR" ]; then
    echo "Error: Directory '$ORIGINAL_DIR' not found."
    exit 1
fi

# 1. Rename the directory
echo "Renaming '$ORIGINAL_DIR' to '$PRODUCT_NAME'..."
mv "$ORIGINAL_DIR" "$PRODUCT_NAME"

# 2. Zip the directory, excluding STORE_LISTING.md and .git
echo "Zipping '$PRODUCT_NAME' to ZIP/$PRODUCT_NAME.zip..."
zip -r "ZIP/$PRODUCT_NAME.zip" "$PRODUCT_NAME" -x "*/STORE_LISTING.md" -x "*/.git/*"

# 3. Move the renamed directory to the PRODUCTS folder
echo "Moving '$PRODUCT_NAME' to PRODUCTS/$CATEGORY/..."
mv "$PRODUCT_NAME" "PRODUCTS/$CATEGORY/"

# 4. Organize STORE_LISTING.md
if [ -f "PRODUCTS/$CATEGORY/$PRODUCT_NAME/STORE_LISTING.md" ]; then
    echo "Organizing STORE_LISTING.md into STORE_LISTING/$CATEGORY/$PRODUCT_NAME.md..."
    mkdir -p "STORE_LISTING/$CATEGORY"
    mv "PRODUCTS/$CATEGORY/$PRODUCT_NAME/STORE_LISTING.md" "STORE_LISTING/$CATEGORY/$PRODUCT_NAME.md"
fi

echo "✅ Packaging complete!"
echo "Zip file: ZIP/$PRODUCT_NAME.zip"
echo "Source code: PRODUCTS/$CATEGORY/$PRODUCT_NAME"
echo "Store listing: STORE_LISTING/$CATEGORY/$PRODUCT_NAME.md"

