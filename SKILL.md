# Digital Product Conversion Skill
*Instructions for the AI Assistant*

When the user triggers this skill (e.g., "Convert this project into a digital product"), you must autonomously execute the following pipeline to transform a raw, open-source codebase into a premium, sellable template.

## Execution Pipeline

### Phase 1: Research & Rebranding
1. **Analyze the Codebase**: Read the main files (`index.html`, `App.js`, `styles.css`, etc.) to understand the core mechanic (e.g., parallax scroll, dashboard, AI wrapper).
2. **Determine the Niche**: Based on the mechanic, decide the most lucrative category to sell it in (e.g., High-end Fashion Portfolio, SaaS Landing Page, Admin Dashboard).
3. **Rebrand**: Update the page `<title>`, `<header>`, logos, and footer text. Remove all traces of the original open-source tutorial names and replace them with a premium brand name (e.g., "AURA", "NEXUS").

### Phase 2: Assets & Copyright Compliance
1. **Remove Licensed Assets**: Delete any existing images or media that may be restricted by the original creator's license.
2. **Source Royalty-Free Media**: Automatically download relevant, high-quality images from Unsplash (or similar royalty-free APIs) using `curl`. Place them in the `assets/` or `public/` directory.
   - *Example Command:* `curl -s -L "https://images.unsplash.com/photo-[ID]?w=800&q=80" -o assets/01.jpg`
3. **Clean the Code**: Remove specific author attributions in the HTML/JS that are not required by the MIT license to ensure the buyer receives a clean, white-labeled product.

### Phase 3: Structural Polish
1. **Premium Styling**: Modify the CSS to utilize modern luxury aesthetics (e.g., Dark mode, Inter/Playfair Display fonts, subtle linear-gradients, and smooth hover micro-interactions).
2. **Expand the Layout**: If it's a single-page script, make it a Multi-Page Theme by adding a `contact.html` (with a form) and a secondary layout page (e.g., `gallery.html` or `pricing.html`). Ensure all navigation links work seamlessly.

### Phase 4: Buyer Documentation
1. **Generate `README.md`**: Overwrite the original README with a buyer-friendly setup guide. It MUST include:
   - "Thank you for purchasing from [Scriptly Store](https://scriptly.store/)!"
   - Easy 1-2-3 setup instructions for non-technical buyers.
   - Customization guide (how to change text, images, and colors).
   - "Need Help? Get support at: [https://scriptly.store/support](https://scriptly.store/support)"
   - "Find more templates at: [https://scriptly.store/](https://scriptly.store/)"
   - **A working Live Demo link** pointing to the deployed `surge.sh` URL.

### Phase 5: Viral Marketing Assets
1. **Generate `STORE_LISTING.md`**: Create a markdown file containing high-CTR, psychologically driven marketing copy for the product page.
   - **Product Name**: Catchy, value-driven title (e.g., "The $10k Agency-Grade Portfolio").
   - **Categories & Tags**: SEO-optimized tags for marketplaces.
   - **Short Description**: A hook that calls out the target audience's pain points.
   - **Long Description**: Focus on the *feeling* and the *value* (e.g., "Stop losing clients to generic websites").
   - **A working Live Demo link** pointing to the deployed `surge.sh` URL.
   - Include links to `https://scriptly.store/` and `https://scriptly.store/support` at the bottom.

### Phase 6: Deployment
1. **Deploy to Surge**: Automatically deploy the finished project to `surge.sh` using `npx surge ./ [custom-domain].surge.sh`.
2. **Link Everything**: Once deployed, ensure the live URL is correctly placed in both the `README.md` and the `STORE_LISTING.md`.

### Phase 7: Packaging & Organization
1. **Package the Zip**: Use the `package.sh` script to rename the original folder to the premium brand name. The script will zip the project into the centralized `ZIP/` folder while strictly excluding `STORE_LISTING.md` from the zip archive.
2. **Categorize the Source**: The script will then move the renamed project folder into the `PRODUCTS/[Category]/` directory for clean organization.

---
**Agent Rule:** Execute this entire pipeline autonomously when requested, making all file changes directly, deploying the site to Surge, packaging the zip, and notifying the user when the product is 100% packaged, live, and properly organized in the PRODUCTS directory.
