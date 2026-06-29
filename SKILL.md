# Digital Product Conversion Skill
*Instructions for the AI Assistant*

When the user triggers this skill (e.g., "Convert this project into a digital product"), you must autonomously execute the following pipeline to transform a raw, open-source codebase into a premium, sellable template.

## Execution Pipeline

### Phase 1: Research & Rebranding
1. **Analyze the Codebase**: Read the main files (`index.html`, `App.js`, `styles.css`, etc.) to understand the core mechanic (e.g., parallax scroll, dashboard, AI wrapper).
2. **Determine the Niche**: Based on the mechanic, decide the most lucrative category to sell it in (e.g., High-end Fashion Portfolio, SaaS Landing Page, Admin Dashboard).
3. **Rebrand**: Update the page `<title>`, `<header>`, logos, and footer text. Remove all traces of the original open-source tutorial names and replace them with a premium brand name (e.g., "AURA", "NEXUS").
4. **Mandatory Copy/Text Changes**: Changing the page copy/text is mandatory and non-negotiable. You must rewrite/update all descriptive text, headings, list items, and main paragraphs on the page to fit the new premium brand identity and target niche perfectly. Do not leave the original tutorial's copy/placeholder text.
5. **Rebrand Links & Socials**: During copy editing, always rebrand links:
   - Replace any demo, general, or project links in the code/text with `https://scriptly.store/`.
   - Replace any personal usernames, creators, or social media links with `@sh20raj` or `https://github.com/sh20raj`.

### Phase 2: Assets & Copyright Compliance
1. **Remove Licensed Assets**: Delete any existing images or media that may be restricted by the original creator's license.
2. **MIT License Exception**: If the raw product has an MIT license, you do NOT need to change or replace its media assets (e.g., images, textures, models, backups, etc.). You can keep them in full. You only need to edit all textual elements/copy and update the copyright/license file to Scriptly.
3. **Source Royalty-Free Media**: If assets need to be replaced (e.g., due to restrictive licensing), automatically download relevant, high-quality images from Unsplash (or similar royalty-free APIs) using `curl`. Place them in the `assets/` or `public/` directory.
   - *Example Command:* `curl -s -L "https://images.unsplash.com/photo-[ID]?w=800&q=80" -o assets/01.jpg`
4. **Clean the Code**: Remove specific author attributions in the HTML/JS that are not required by the MIT license to ensure the buyer receives a clean, white-labeled product.

### Phase 3: Structural Polish
1. **Premium Styling**: Modify the CSS to utilize modern luxury aesthetics (e.g., Dark mode, Inter/Playfair Display fonts, subtle linear-gradients, and smooth hover micro-interactions).
2. **Fix Dead Links & 404s**: Search the codebase for broken paths or dummy links (e.g., `/works`, `/about`) and convert them to valid `.html` files (e.g., `works.html`).
3. **Expand the Layout**: If it's a single-page script, or if the navigation links to missing pages, generate those missing subpages (`contact.html`, `about.html`, etc.) and any necessary subcomponents to ensure the theme is fully functional out of the box.

### Phase 4: Buyer Documentation
1. **Generate `README.md`**: Overwrite the original README with a buyer-friendly setup guide. It MUST include:
   - "Thank you for purchasing from [Scriptly Store](https://scriptly.store/)!"
   - Easy 1-2-3 setup instructions for non-technical buyers.
   - Customization guide (how to change text, images, and colors).
   - "Need Help? Get support at: [https://scriptly.store/support](https://scriptly.store/support)"
   - "Find more templates at: [https://scriptly.store/](https://scriptly.store/)"
   - **A working Live Demo link** pointing to the deployed `surge.sh` URL.

### Phase 5: Viral Marketing Assets & Visual Design
1. **Generate `STORE_LISTING.md`**: Create a markdown file containing high-CTR, psychologically driven marketing copy for the product page.
   - **Product Name**: Catchy, value-driven title (e.g., "The $10k Agency-Grade Portfolio").
   - **Slug**: URL-friendly unique identifier.
   - **Categories & Tags**: SEO-optimized tags for marketplaces.
   - **Short Description**: A hook that calls out the target audience's pain points.
   - **Long Description**: Focus on the *feeling* and the *value* (e.g., "Stop losing clients to generic websites").
   - **A working Live Demo link** pointing to the deployed `surge.sh` URL.
   - Include links to `https://scriptly.store/` and `https://scriptly.store/support` at the bottom.
2. **Generate Premium Mockup Images**: Use the `generate_image` tool (or browser screenshots if image generation is unavailable) to create professional, premium, high-converting visuals. You must always capture and upload at least 5 screenshots covering all main areas of the website (e.g., Hero, Services, About Us, Menu/Features, Contact/Footer) to serve as the product's screenshot carousel.
3. **Generate Walkthrough Preview GIF**: To create the animated preview GIF/WebP poster, optionally open the live demo URL in the browser using the `browser_subagent` and scroll through the page slowly. Rename the browser subagent's auto-generated WebP recording to `<slug>-walkthrough.webp` and upload it to the assets repository to serve as the animated preview image.

### Phase 6: Deployment & Hosting
1. **Deploy to Surge**: Automatically deploy the finished project's compiled `dist/` directory to `surge.sh` using `npx surge [project-path]/dist/ [custom-domain].surge.sh`.
2. **Link Everything**: Once deployed, ensure the live URL is correctly placed in both the `README.md` and the `STORE_LISTING.md`.
3. **Release Hosting**: If the generated ZIP file is larger than 20MB (exceeding jsDelivr's CDN limit), create a GitHub Release using the GitHub CLI to host it:
   - `GITHUB_TOKEN=[PAT] gh release create [tag] ZIP/[file].zip --title "[Title] [Version]" --notes "[Notes]"`
   - Use the public release download link (`https://github.com/[owner]/[repo]/releases/download/[tag]/[filename]`) for database/dashboard registration.

### Phase 7: Packaging & Organization
1. **Move from RAW_PRODUCT**: The project conversion begins in the `RAW_PRODUCT/` folder. After completing all rebranding, asset replacement, polishing, and documentation steps, the project folder must be moved to the `PRODUCTS/` directory.
2. **Package the Zip**: Use the `package.sh` script to rename the original folder to the premium brand name. The script will zip the project into the centralized `ZIP/` folder while strictly excluding `STORE_LISTING.md` from the zip archive.
3. **Categorize the Source**: The script will then move the renamed project folder from `RAW_PRODUCT/` into the `PRODUCTS/[Category]/` directory for clean organization.
4. **Centralize Store Listing**: Move the generated `STORE_LISTING.md` file into the centralized `STORE_LISTING/[Category]/[brand-name].md` path to keep all marketplace listings structured and organized in one location.

### Phase 8: Upload to Scriptly Store
1. **Auto-upload via API**: Call the `POST https://scriptly.store/api/agent/products` endpoint using the `AGENT_API_KEY` from `.env` as the Bearer token.
2. **Payload Schema**: Populate the payload using metadata parsed from `STORE_LISTING.md`:
   - `title`, `slug`, `shortDescription`, `description`
   - `category` (e.g. `"landing-pages"`), `subcategory` (e.g. `"portfolio-landing-pages"`)
   - `price` (e.g. `2900` paise = ₹29.00), `isFree: false`, `published: true`
   - `thumbnail`, `previewGif`, `screenshots` (pointing to jsDelivr CDN URLs if <=20MB)
   - `fileUrl` (pointing to the GitHub Release download URL if >20MB, or jsDelivr if <=20MB)
3. **Link Back Product Coordinates**: After publishing the product and obtaining the product slug and product ID from the API response, update the codebase as follows:
   - Add the product page link (`https://scriptly.store/products/<slug>`) to the project `README.md`.
   - Add a "Buy Theme" button or banner to the website's `index.html` (linked to `https://scriptly.store/products/<slug>`).
   - Add a license source comment or disclaimer in `index.html` or `LICENSE` stating: "For licensing, credits, or source, see: https://scriptly.store/products/<id>".
   - Re-package and overwrite the project ZIP file in the `ZIP/` folder so the buyer gets these links.

---
**Agent Rules:**
1. **Pipeline Execution**: Execute this entire pipeline autonomously when requested, making all file changes directly, deploying the site to Surge, packaging the zip, organizing the folders, creating GitHub Releases for heavy assets, and automatically listing the product on Scriptly Store.
2. **Git Push Rule**: You MUST run `git push` ONLY after all work is fully completed, verified, packaged, and uploaded to the Scriptly Store API. Do not push intermediate commits before the task is fully done.
