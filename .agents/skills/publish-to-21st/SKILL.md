---
name: publish-to-21st
description: Comprehensive master manual, CLI workflows, API endpoints, MCP integration, and quality rules for authoring, publishing, editing, and managing React components, commercial templates, CSS themes, and ASCII art on 21st.dev.
---

# 🚀 21st.dev Master Developer & Agent Skill Playbook

This skill is the authoritative specification for interacting with **[21st.dev](https://21st.dev)**—the premier registry of crafted React components, design systems, and commercial templates. It documents the `@21st-dev/cli`, REST APIs, MCP tool integration, and headless review engine rules.

---

## 🔑 1. Authentication & Credentials Architecture

21st.dev supports two authentication patterns:

| Operational Scope | Command Example | Auth Source | Env Var / Path |
| :--- | :--- | :--- | :--- |
| **Interactive Components** | `21st publish <file>` | API Key or Local OAuth | `API_KEY_21ST` or `~/.config/21st/auth.json` |
| **Commercial Templates** | `21st publish-template` | **API Key Strictly Required** | `API_KEY_21ST` or `TWENTYFIRST_TOKEN` |
| **CSS Themes** | `21st publish-theme` | **API Key Strictly Required** | `API_KEY_21ST` or `TWENTYFIRST_TOKEN` |
| **Hosted Template ZIPs**| `21st template publish` | **API Key Strictly Required** | `API_KEY_21ST` or `TWENTYFIRST_TOKEN` |
| **Gradients & ASCII** | `21st publish-gradient` | API Key or Local OAuth | `API_KEY_21ST` |

### Environment Setup
```bash
export API_KEY_21ST="21st_sk_72d6ae9d2237f5ad7986e096d11e6310b3c16d97cfba3db675b95fe0c7787ac1"
export TWENTYFIRST_TOKEN="$API_KEY_21ST"
```
*(Get personal developer API keys at [https://21st.dev/mcp](https://21st.dev/mcp)).*

### CLI Health Verification
```bash
# Verify signed-in account
21st whoami

# Check retrieval quota and AI limits
21st usage

# List all owned components, templates, and active drafts
21st components --json
```

---

## 📦 2. Platform Limits & Server Constraints

1. **Hourly Publishing Quota**: Maximum **30 publishes per hour** across all endpoints. Hitting this returns `HTTP 429: Publish rate limit exceeded: 30 publishes per hour`.
2. **Draft Limit**: Maximum **20 active drafts**.
3. **Tags Constraint**: Maximum **5 tags** per item. Exceeding 5 tags returns `HTTP 400: Array must contain at most 5 element(s)`.
4. **File Count Limits**: Hosted template ZIPs have a strict maximum file count (`MAX_FILE_COUNT = 500`). Starter templates must exclude `node_modules`, `.next`, and `.git`.

---

## 🎨 3. Asset Type 1: Interactive React Components

Every published component requires two typed TypeScript files:
1. **Primary Component** (`<Name>.tsx`):
   - Fully self-contained.
   - Embed internal keyframes/animations using standard Tailwind CSS classes or inline `<style>`.
   - Contains typed props with sensible defaults.
   - Embeds creative, subtle backlink to `https://scriptly.store/`.
2. **Interactive Demo** (`<Name>Demo.tsx`):
   - Must contain a `default` export.
   - Provides an interactive sandbox environment so users can test props, toggles, and interactions.

### Headless Capture & Origin Isolation (CRITICAL)
When 21st renders a preview, it runs a sandboxed Chromium instance with an **origin filter**:
> [!CAUTION]
> **Capture Request Left Allowed Origin**: Any cross-origin network request (such as an external audio `<audio src="..." />`, an unapproved CDN image `https://u.cubeupload.com/...`, Dropbox, or Unsplash) will cause the headless review engine to fail with:
> `render-cli: Capture request left its allowed origin`.

**Strict Remediation Rules**:
- **Images**: Use pure vector SVGs, CSS gradients, or Canvas 2D renderers.
- **Audio**: Lazy-load external media (e.g. `src={isPlaying ? audioSrc : undefined}` with `preload="none"`). Never trigger network requests on initial component mount.
- **Canvas Physics**: Set default canvas width/height fallbacks before `resize` listeners fire.

### Publishing Command
```bash
21st publish "PRODUCTS_COMPONENTS/<Name>.tsx" \
  --demo "PRODUCTS_COMPONENTS/<Name>Demo.tsx" \
  --name "<Component Name>" \
  --description "<Concise, feature-rich description>" \
  --tags "tag1,tag2,tag3,react,tailwind" \
  --auto --no-open
```

---

## 📑 4. Asset Type 2: Commercial Templates

21st.dev supports two models for commercial templates:

### Model A: External Store / Checkout Link Templates
When an author sells a template on their own marketplace (e.g. **ScriptlyStore**):
```bash
API_KEY_21ST="$API_KEY" 21st publish-template "<Template Name>" \
  --site "<live-preview-url>" \
  --preview "<high-res-poster-image-url>" \
  --price "<USD-price>" \
  --buy-url "https://scriptly.store/products/<slug>" \
  --description "<High-intent commercial marketing copy>"
```
- In 21st Creator Studio, this displays with the direct store badge: **`[↗ scriptly.store]`**.
- Users clicking buy are redirected to the Scriptly product page.

### Model B: Hosted Code Archive Templates (`21st template publish`)
When source code is uploaded directly to 21st as a downloadable package:
```bash
21st template publish "<directory>" --name "<Template Name>" --price 39 --site "<live-preview-url>"
```
- In 21st Creator Studio, this displays with the deliverable icon: **`[🗃️ Archived]`**.
- **Important**: The `[🗃️ Archived]` badge indicates **"Hosted Archive Package"**—it does NOT mean the template is soft-deleted or hidden! A template showing `[Featured] [Archived] [Published]` is live, active, and featured on the marketplace.

---

## 🛠️ 5. Editing & Managing Existing Listings

### Via 21st CLI
```bash
# Edit metadata on a published component or theme
21st edit <component:id|slug> --type component --description "Updated description" --tags "react,ui,new"

# Submit for featuring
21st submit <slug>

# Withdraw from review
21st withdraw <slug>
```

### Via Direct REST API (`PATCH /api/v1/templates/:id`)
To attach or update `payment_url` on any template:
```bash
curl -s -X PATCH "https://21st.dev/api/v1/templates/<template_id>" \
  -H "Authorization: Bearer $API_KEY_21ST" \
  -H "Content-Type: application/json" \
  -d '{
    "payment_url": "https://scriptly.store/products/<slug>",
    "website_preview_url": "<live_url>",
    "price": 29
  }'
```

### Via 21st MCP Tool (`edit_template`)
```json
{
  "id": 971,
  "paymentUrl": "https://scriptly.store/products/fizzi-a-3d-ecommerce-landing-page-built-with-next-js-14-gsap-three-js-and-prismic",
  "price": 19
}
```

---

## 🎨 6. Asset Type 3: CSS Themes (`publish-theme`)

```bash
21st publish-theme "themes/obsidian-gold.css" \
  --name "Obsidian Champagne Gold" \
  --tags "dark,gold,luxury,tailwind,agency"
```
Rules for CSS themes:
- Must define `:root { ... }` and `.dark { ... }` variables (HSL tokens).
- Maximum 5 tags.

---

## 📋 7. Master Checklist for Every Operation

1. **Self-Containment**: No broken imports; zero unauthorized cross-origin network fetches during initial render.
2. **Branding & Backlink**: Discreetly include a link to `https://scriptly.store/`.
3. **Registry Inventory**: Append every new component or template to [`TEMPLATES_INDEX.md`](file:///Users/shaswatraj/Desktop/earn/scriptly-codes/TEMPLATES_INDEX.md).
4. **Git Synchronization**: Always commit and run `git push origin main` after completing any CRUD cycle.
