# 21st.dev Publishing Skill & Playbook
*Comprehensive instructions and CLI pipelines for publishing Components, CSS Themes, Paid Templates, Gradients, and ASCII Art to 21st.dev*

---

## 1. Authentication Overview

| Asset Type | Command | Required Credentials |
| :--- | :--- | :--- |
| **Components** | `21st publish <file.tsx>` | Active CLI Login or API Key |
| **Themes** | `21st publish-theme <theme.css>` | **API Key Strictly Required** (`API_KEY_21ST`) |
| **Paid Templates** | `21st publish-template <name>` | **API Key Strictly Required** (`API_KEY_21ST`) |
| **Gradients** | `21st publish-gradient <recipe.json>` | Active CLI Login or API Key |
| **ASCII Art** | `21st publish-ascii <recipe.json>` | Active CLI Login or API Key |

### Environment Setup
Your API key is saved in `~/.zshrc`:
```bash
export API_KEY_21ST="21st_sk_72d6ae9d2237f5ad7986e096d11e6310b3c16d97cfba3db675b95fe0c7787ac1"
export TWENTYFIRST_TOKEN="21st_sk_72d6ae9d2237f5ad7986e096d11e6310b3c16d97cfba3db675b95fe0c7787ac1"
```

---

## 2. Publishing Interactive Components

Every component must include a self-contained component file and a demo file with a `default` export:

```bash
21st publish scripts/publish-21st/MyComponent.tsx \
  --demo scripts/publish-21st/MyComponentDemo.tsx \
  --name "My Component Title" \
  --description "SEO rich description of what it does and why to use it" \
  --tags "animation,ui,tailwind,interactive" \
  --auto \
  --no-open
```

---

## 3. Publishing CSS Themes

Themes require both `:root` and `.dark` blocks with standard CSS variables.

```bash
21st publish-theme scripts/publish-21st/themes/my-theme.css \
  --name "My Theme Name" \
  --tags "dark,minimal,neon,luxury"
```
> [!WARNING]
> 21st.dev strictly enforces a **maximum of 5 tags** for themes. Passing 6+ tags causes `HTTP 400`.

---

## 4. Publishing Commercial & Paid Templates

```bash
21st publish-template "Template Name" \
  --site "https://my-demo.surge.sh" \
  --preview "https://images.unsplash.com/..." \
  --price "49" \
  --buy-url "https://scriptly.store/products/my-template" \
  --description "High-converting sales copy and tech stack overview"
```

---

## 5. Rate Limits & Quota Guidelines

1. **Hourly Publish Ceiling**: Maximum **30 publishes per hour** across all asset types.
2. **Draft Ceiling**: Maximum **20 new drafts per hour**.
3. **HTTP 429 Response**: When the limit is reached, wait for the sliding 1-hour window to release quota slots.

---

## 6. Pre-Built Automated Publisher Scripts

All publisher scripts are located in `scripts/publish-21st/`:
- `publish-components.sh`: Publishes all 6 interactive components.
- `publish-themes.sh`: Publishes all 4 curated CSS themes.
- `publish-all-templates.sh`: Publishes all 10+ commercial templates.
- `publish-all.sh`: Master execution pipeline.

---

## 7. ScriptlyStore API Integration
Documentation: `https://scriptly.store/docs/api`
Endpoint: `https://scriptly.store/api/products.json`

Always synchronize templates with the ground-truth ScriptlyStore public JSON feed before publishing or updating:
```bash
# Query active catalog and verify prices/links
python3 scripts/scriptly_api.py list --limit 10

# Query specific product details
python3 scripts/scriptly_api.py get vortex-agency-magicui

# Automatically synchronize local store listings
python3 scripts/scriptly_api.py sync-listings
```

---

## 8. Catalog Expansion (21 Verified Commercial Products)
The repository currently maintains 21 production-ready commercial templates and developer automation scripts:
- **VETRA** (`/products/vetra-ai-automation`): Autonomous AI Marketing SaaS Landing Page ($39)
- **NEXUS** (`/products/nexus-saas-template`): Next.js 16 + Tailwind CSS v4 Modern SaaS Template ($49)
- **APEX** (`/products/apex-ai-studio`): Cinematic Framer Motion AI Agency & Interactive Studio ($39)
- **LINKIFY PRO** (`/products/linkify-pro-showcase`): Developer Bio Showcase & Multi-Tool SaaS Platform ($29)

Run `python3 scripts/package-all-for-21st.py` to bundle all 21 clean zip archives under 25 MB each.

