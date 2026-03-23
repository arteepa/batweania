# Design System Strategy: Ancestral Resonance

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Living Parchment."**

This system moves away from the sterile, pixel-perfect rigidity of modern SaaS and toward a digital experience that feels "grown" rather than "built." It interprets the Yoeme Yaqui culture not as a museum exhibit, but as a vibrant, breathing ecosystem. By utilizing intentional asymmetry, overlapping layers that mimic stacked organic materials, and a "paper-first" tactile philosophy, we create a space that feels respectful, wild, and deeply grounded.

We break the "template" look by treating the browser or mobile screen as a canvas of physical artifacts—where typography is carved and elements sit on the page with the weight of stone or the lightness of a moth’s wing.

---

## 2. Colors & Tonal Depth
Our palette is rooted in the earth: the deep shade of the mesquite tree, the dust of the desert, and the sacred glow of the sun.

### The Color Tokens
* **Primary (Earth & Bark):** `#594f3f` (Primary) / `#2c2416` (Deepest Text)
* **Secondary (Desert Flora):** `#616133` (Secondary) / `#6b6b3c` (Olive Accents)
* **Tertiary (Sacred Sun):** `#684c0b` (Tertiary) / `#e9c176` (Muted Gold)
* **Surface (Bone & Parchment):** `#fff8ef` (Background) / `#f2e8d0` (Main Background)

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. In the wild, boundaries are soft and transitional. Use background shifts (e.g., a `surface-container-low` section sitting against a `surface` background) or wide-margin "gutters" to signify a change in content.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, hand-made papers.
* **Base Layer:** `surface` (#fff8ef)
* **Sub-sections:** `surface-container-low` (#fdf3db) to create a subtle recessed feel.
* **Interactive Cards:** `surface-container-high` (#f1e7cf) to "lift" the element toward the user.

### Signature Textures & Soul
To elevate the UI beyond flat hex codes, apply a subtle, grainy noise overlay (opacity 3-5%) across all surfaces to mimic aged paper. Use "Atmospheric Gradients" for Hero sections: a radial transition from `primary-container` (#726755) to `primary` (#594f3f) to simulate the depth of a canyon or a shaded grove.

---

## 3. Typography
The typography is a dialogue between the ancestral and the modern.

* **The Display Voice (Newsreader):** Used for `display-lg` through `headline-sm`. This serif carries a rustic, editorial weight. It should be typeset with tighter letter-spacing (-0.02em) to feel "carved." Use this for titles that speak of heritage and land.
* **The Utility Voice (Manrope):** Used for all `body` and `label` roles. A clean, humanist sans-serif that ensures the park's practical information—trails, hours, community notices—is accessible and clear.

**Hierarchy as Identity:**
- **Display Lg (3.5rem):** Reserved for emotional "hooks."
- **Title Md (1.125rem):** Used for navigational signposts, acting as the "voice" of the park guides.

---

## 4. Elevation & Depth
In this system, depth is achieved through **Tonal Layering**, not synthetic shadows.

* **The Layering Principle:** Avoid the "drop shadow" tool. Instead, place a `surface-container-lowest` card on a `surface-dim` background. This creates a natural "paper-on-wood" lift.
* **Ambient Shadows:** If an element must float (e.g., a navigation bar or a moth-inspired fab), use a shadow color tinted with the `on-surface` color (#201b0d) at 5% opacity with a very high blur (24px+). This mimics natural, diffused sunlight.
* **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline-variant` (#c9c7b8) at 15% opacity. It should be felt, not seen.
* **Glassmorphism:** For overlays, use `surface` colors at 80% opacity with a `backdrop-filter: blur(12px)`. This creates a "frosted resin" effect, keeping the user connected to the textures beneath.

---

## 5. Components
Every component must feel like a handcrafted tool.

* **Buttons:**
* **Primary:** Solid `primary` (#594f3f) with `on-primary` (#ffffff) text. Keep corners square—no border radius.
* **Secondary:** No background; a `ghost border` (15% opacity) and `secondary` (#616133) text.
* **Chips:** Use `surface-container-highest` with `label-md` text. These should look like small bone or wooden tags.
* **Cards:** Forbid divider lines. Separate content using `spacing-6` (2rem) and subtle shifts from `surface` to `surface-container`.
* **Inputs:** Use `surface-variant` for the field background. The active state should not be a bright blue, but a transition to a `tertiary` (#684c0b) bottom-border (2px).
* **Motif Integration:** Small "moth" icons should be used as decorative flourishes at the end of long-form articles or as bullet points in `Lists`. "Sun" symbols should be utilized as subtle background watermarks in the `surface-container-lowest` tier.

---

## 6. Do’s and Don’ts

### Do:
* **Embrace Asymmetry:** Align text to the left but allow imagery to break the grid, overlapping text containers to create a "scrapbook" feel.
* **Use White Space:** Use `spacing-16` (5.5rem) and `spacing-20` (7rem) to give the content "room to breathe," reflecting the vastness of the natural park.
* **Square geometry:** Use square corners (`border-radius: 0`) on containers and controls so surfaces read as cut paper, tile, or carved stone—not pill-shaped UI chrome.

### Don’t:
* **Don’t use pure black (#000):** Use `on-background` (#201b0d) for all "black" text to maintain the organic warmth.
* **Don’t use 1px Dividers:** They are too "digital." Use a gap of `spacing-8` (2.75rem) instead.
* **Don’t Over-animate:** Transitions should be slow and ease-in-out, mimicking the movement of shadows or the slow growth of plants. Avoid "snappy" or "bouncy" UI animations.