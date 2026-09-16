---
name: publish-to-21st
description: Comprehensive playbook, CLI workflows, schemas, and best practices for extracting, preparing, testing, and publishing React/WebGL components, CSS themes, commercial templates, gradients, and ASCII recipes to 21st.dev registry.
---

# 21st.dev Publishing Skill for AI Agents & Developers

This guide documents the architecture, CLI commands, schemas, edge cases, and automated pipelines to publish digital assets directly to **[21st.dev](https://21st.dev)** using the official `@21st-dev/cli` tool (`21st`).

---

## 1. Authentication & Credentials Architecture

21st.dev uses two different authentication mechanisms depending on the asset category:

| Operation | CLI Command | Supported Auth | Auth Resolution |
| :--- | :--- | :--- | :--- |
| **Components** | `21st publish <file>` | OAuth Session or API Key | `~/.config/21st/auth.json` or `API_KEY_21ST` |
| **CSS Themes** | `21st publish-theme <theme.css>` | **API Key strictly required** | `API_KEY_21ST` or `TWENTYFIRST_TOKEN` |
| **Paid Templates** | `21st publish-template <name>` | **API Key strictly required** | `API_KEY_21ST` or `TWENTYFIRST_TOKEN` |
| **Gradients** | `21st publish-gradient <recipe.json>`| OAuth Session or API Key | `auth.json` or `API_KEY_21ST` |
| **ASCII Recipes**| `21st publish-ascii <recipe.json>` | OAuth Session or API Key | `auth.json` or `API_KEY_21ST` |

### Environment Variables
Store the API key in your shell configuration (`~/.zshrc`, `~/.bashrc`, or `.env`):
```bash
export API_KEY_21ST="21st_sk_..."
export TWENTYFIRST_TOKEN="21st_sk_..."
```
*(Get your personal API key directly from [https://21st.dev/mcp](https://21st.dev/mcp)).*

### CLI Status Verification
```bash
# Check logged-in identity
21st whoami

# Check retrieval quota & AI access
21st usage

# List your published components and drafts
21st components
```

---

## 2. Platform Limits & Quota Rules

Keep these server-side constraints in mind before executing mass publishing:

1. **Hourly Publish Quota**: Maximum **30 publishes per hour** across all endpoints. Hitting this returns `HTTP 429: Publish rate limit exceeded: 30 publishes per hour`.
2. **Draft Limit**: Maximum **20 new drafts per hour**.
3. **Tags Constraints**:
   - Themes strictly allow a **maximum of 5 tags** (`tags: Array must contain at most 5 element(s)`). Exceeding 5 tags returns `HTTP 400`.
   - Tags must be comma-separated strings without leading spaces.

---

## 3. Asset Type 1: Publishing Interactive Components

### Anatomy of a Publishable Component
Every component submitted to 21st.dev must consist of two clean, typed TypeScript files:
1. **Primary Component** (`<Name>.tsx`):
   - Fully self-contained.
   - Embed internal keyframes/animations using `<style>` or standard Tailwind CSS classes.
   - Avoid broken relative imports; embed small utilities like `cn(...)` directly if needed.
2. **Interactive Demo** (`<Name>Demo.tsx`):
   - Must have a `default` export.
   - Provides live interactive controls (buttons, toggles, color selectors, sliders) so users can play with props directly in the 21st.dev browser sandbox.

### Command Specification
```bash
21st publish <Component.tsx> \
  --demo <ComponentDemo.tsx> \
  --name "<Catchy Human Title>" \
  --description "<SEO description (10+ characters explaining what it does and when to use it)>" \
  --tags "tag1,tag2,tag3,tag4,tag5" \
  --auto \
  --no-open
```

### Flags Breakdown
- `--demo <file>`: Attaches the interactive preview component.
- `--auto`: Automatically initiates build verification and publishes upon success without prompting.
- `--no-open`: Prevents opening a browser window during automated runs.
- `--registry ui|hooks|blocks|icons`: Defaults to `ui`.

---

## 4. Asset Type 2: Publishing CSS Themes

Themes on 21st.dev map directly to shadcn/ui and Tailwind CSS design tokens.

### Theme File Format
A valid theme file **MUST** declare both `:root` (light mode) and `.dark` (dark mode) scopes:
```css
:root {
  --background: #060609;
  --foreground: #f4f4f5;
  --card: #0d0d14;
  --card-foreground: #f4f4f5;
  --popover: #0d0d14;
  --popover-foreground: #f4f4f5;
  --primary: #8b5cf6;
  --primary-foreground: #ffffff;
  --secondary: #1e1b4b;
  --secondary-foreground: #c7d2fe;
  --muted: #181824;
  --muted-foreground: #94a3b8;
  --accent: #06b6d4;
  --accent-foreground: #083344;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #27273a;
  --input: #27273a;
  --ring: #8b5cf6;
  --radius: 0.75rem;
}

.dark {
  --background: #030305;
  --foreground: #f8fafc;
  --card: #09090f;
  --card-foreground: #f8fafc;
  --popover: #09090f;
  --popover-foreground: #f8fafc;
  --primary: #a855f7;
  --primary-foreground: #ffffff;
  --secondary: #1e1b4b;
  --secondary-foreground: #e0e7ff;
  --muted: #13131e;
  --muted-foreground: #94a3b8;
  --accent: #22d3ee;
  --accent-foreground: #083344;
  --destructive: #f87171;
  --destructive-foreground: #ffffff;
  --border: #1f1f2e;
  --input: #1f1f2e;
  --ring: #a855f7;
}
```

### Command Specification
```bash
21st publish-theme <theme.css> \
  --name "My Theme Name" \
  --tags "tag1,tag2,tag3,tag4,tag5"
```
*(Remember: Max 5 tags!)*

---

## 5. Asset Type 3: Publishing Commercial & Paid Templates

Templates are full-stack websites, Next.js starters, or HTML/GSAP themes with live preview deployments and buy links.

### Command Specification
```bash
21st publish-template "<Template Title>" \
  --site "<live-preview-url>" \
  --preview "<high-res-thumbnail-url>" \
  --price "<price-in-dollars>" \
  --buy-url "<checkout-or-product-page-url>" \
  --description "<marketing-copy-focusing-on-value-and-tech-stack>"
```

### Parameter Details
| Flag | Required | Format / Example | Description |
| :--- | :--- | :--- | :--- |
| `name` | Yes | `"MATTER - Luxury Agency"` | Display name in marketplace |
| `--site` | Yes | `https://my-template.surge.sh` | Live working demo website |
| `--preview` | Yes | `https://images.unsplash.com/...` | High-res cover thumbnail (16:9) |
| `--price` | No | `29` or `49` (Integer USD) | Omit or set `0` for free templates |
| `--buy-url` | No | `https://scriptly.store/products/...` | Direct payment or purchase link |
| `--description` | No | Markdown / plain text string | Value-focused sales hook |

---

## 6. Asset Type 4 & 5: Gradients & ASCII Recipes

```bash
# Gradient Recipe
21st publish-gradient <recipe.json> \
  --name "Neon Sunrise" \
  --thumbnail <image-path-or-url>

# ASCII Art / Animation Recipe
21st publish-ascii <recipe.json> \
  --name "Cyberpunk Skull" \
  --thumbnail <image-path-or-url> \
  --video <video-path-or-url>
```

---

## 7. SEO & Marketplace Virality Checklist

To ensure assets get featured on 21st.dev and achieve high conversion/clones:

1. **Title Formula**: `[Brand/Name] — [Specific Technical Hook & Aesthetic]`
   - *Example:* `Quantum Pixel Grid Dissolve` or `MATTER - Luxury Agency Template`
2. **Visual Contrast**: Ensure dark themes and component demos use deep backgrounds (`bg-zinc-950` or `#09090b`) with vibrant neon/emerald accents for maximum contrast in 21st cards.
3. **Interactive Demo Defaults**: Pre-populate demos with realistic data (e.g., real names, high-res Unsplash photos, sensible defaults) rather than empty placeholders.
4. **Installability**: Verify that `npx @21st-dev/cli add @<username>/<component-slug>` installs the file cleanly without missing helper utilities.

---

## 8. ScriptlyStore API Integration & Verification
Official API Documentation: `https://scriptly.store/docs/api`

Before publishing commercial templates or syncing listings, ALWAYS verify metadata using the official ScriptlyStore public JSON API:
- Endpoint: `GET https://scriptly.store/api/products.json?slug=<product-slug>`
- Filters supported: `limit`, `category`, `subcategory`, `slug`, `featured`
- The API supports CORS for client-side fetching in React/Vue web applications.
- Run local synchronization tool:
  ```bash
  python3 scripts/scriptly_api.py list --limit 10
  python3 scripts/scriptly_api.py get <slug>
  python3 scripts/scriptly_api.py sync-listings
  ```
- Always use the returned canonical values for:
  - `--buy-url`: `prod.url` (e.g., `https://scriptly.store/products/<canonical-slug>`)
  - `--preview`: `prod.thumbnail` (e.g., jsDelivr or S3 CDN image)
  - `--price`: `prod.effectivePriceFormatted` (rounded integer USD)

