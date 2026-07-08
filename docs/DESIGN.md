---
name: Tectonic Portfolio System
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#424844'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737874'
  outline-variant: '#c2c8c2'
  surface-tint: '#4f6358'
  primary: '#061810'
  on-primary: '#ffffff'
  primary-container: '#1b2d24'
  on-primary-container: '#819589'
  inverse-primary: '#b6ccbe'
  secondary: '#914b33'
  on-secondary: '#ffffff'
  secondary-container: '#ffa588'
  on-secondary-container: '#793822'
  tertiary: '#0c161a'
  on-tertiary: '#ffffff'
  tertiary-container: '#202b2e'
  on-tertiary-container: '#879296'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e8da'
  primary-fixed-dim: '#b6ccbe'
  on-primary-fixed: '#0d1f17'
  on-primary-fixed-variant: '#384b41'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59d'
  on-secondary-fixed: '#390b00'
  on-secondary-fixed-variant: '#74341e'
  tertiary-fixed: '#d9e4e9'
  tertiary-fixed-dim: '#bdc8cd'
  on-tertiary-fixed: '#131d21'
  on-tertiary-fixed-variant: '#3e484c'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  mono-meta:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  unit: 4px
  gutter: 24px
  margin-edge: 48px
  section-gap: 120px
---

## Brand & Style

The design system is built on the philosophy of "Engineered Organicism." It targets high-end creative directors, architects, and technical artisans who require a digital presence that feels both grounded in nature and meticulously programmed. The visual narrative rejects the "template" look in favor of a bespoke, high-precision aesthetic.

The style is a hybrid of **Minimalism** and **Technical Brutalism**. It utilizes heavy whitespace to signify luxury and "custom craftsmanship." Key brand attributes include:
- **Precision:** Use of micro-copy and technical metadata to justify design decisions.
- **Asymmetry:** Intentional breaking of the grid to create visual tension and focal points.
- **Layering:** Elements should overlap slightly, using hairlines rather than shadows to define boundaries, suggesting blueprints or schematics.

## Colors

The palette is derived from raw, structural materials.
- **Primary (Deep Forest):** Used for primary text and core structural elements. It provides a heavy, grounded foundation.
- **Secondary (Warm Clay):** Used sparingly for action items, highlights, and "human" touchpoints.
- **Tertiary (Slate):** Reserved for technical metadata, grid coordinates, and secondary information.
- **Neutral (Rich Cream):** The primary canvas color. It is warmer than pure white, evoking the feel of premium architectural paper.

Avoid pure black; use the Deep Forest Green for all high-contrast needs to maintain the earthy, bespoke tone.

**Mode:** Light mode only. No dark-mode variant.

## Typography

Typography acts as a navigational instrument. **Hanken Grotesk** provides a clean, neutral, and precise geometric framework for headlines and body copy. **JetBrains Mono** is introduced as a functional layer for "engineered" details—page coordinates, timestamps, project metadata, and labels.

**Styling Rules:**
- Large display text should use tight tracking to feel "constructed."
- Monospaced labels should always be uppercase with generous letter spacing to enhance legibility and technical feel.
- Metadata (mono-meta) should often be rotated 90 degrees or placed in margins to act as "grid markers."

## Layout & Spacing

This design system uses an **asymmetrical fluid grid**. While the underlying structure is a 12-column grid, content must not be centered or balanced traditionally.

**Layout Principles:**
- **The Offset:** Images and text blocks should rarely align on the same vertical axis. Offset content by 1-2 columns to create a sense of bespoke arrangement.
- **The Margin:** Wide margins (48px+) are mandatory to frame the content as a "gallery piece."
- **Coordinate System:** Use JetBrains Mono labels to "mark" the start of sections (e.g., `[SECTION_01 // ABOUT]`) to reinforce the engineered aesthetic.
- **Vertical Rhythm:** Use exaggerated vertical gaps (120px+) between major sections to allow the design to breathe and signify premium quality.

## Elevation & Depth

Depth is conveyed through **structural layering** and **low-contrast outlines** rather than shadows.
- **Hairlines:** Use 0.5pt or 1pt borders in Slate or a desaturated version of the Forest Green. These represent "cut lines" or "blueprints."
- **Zero Shadows:** Do not use ambient shadows. Overlapping elements should be distinguished by color contrast (e.g., a Cream surface over a Slate background) or thin hairlines.
- **Backdrop Blurs:** Use subtle blurs on navigation overlays to suggest "tracing paper" or translucent architectural materials.

## Shapes

The shape language is strictly **Sharp (0px)**.

To achieve an "engineered" and "bespoke" feel, rounded corners are avoided entirely. The intersection of horizontal and vertical hairlines should be crisp and precise. Occasional "notched" corners or diagonal cuts may be used on buttons or image containers to simulate machined components, but the primary language remains orthogonal and sharp.

## Components

### Buttons
Buttons are rectangular with 1px borders. Primary buttons use a solid Deep Forest fill with Cream text. Secondary buttons are ghost-style with a Slate hairline. On hover, the background fill "slides" in from the left to simulate a mechanical shutter.

### Cards & Containers
Avoid standard card components. Instead, use "Project Modules" which consist of an image block offset from a text block. The text block should include a JetBrains Mono project index in the top-left corner.

### Inputs & Forms
Input fields are single bottom-aligned hairlines. Labels use the `mono-meta` style and sit 8px above the line. Error states are highlighted in Warm Clay.

### Technical Callouts
A custom component used to highlight specific details (e.g., core values). These are small blocks of JetBrains Mono text framed by L-shaped corner markers, simulating a viewfinder or a technical drawing callout.

### Navigation
Sticky top navigation bar separated by a hairline, with backdrop blur. Site name on the left, section anchor links in the center/right, and GitHub + LinkedIn icon links on the far right.

---

## Site Implementation Spec

Decisions locked for the Matt Smith portfolio build. Reference mockup: `docs/screen.png`.

### Architecture

- **Structure:** Single-page scroll. No additional routes.
- **Page flow:** Hero → Projects → Experience → Contact
- **Background:** No decorative grid pattern overlay.

### Copy Tone

- **Light theater** for section labels and metadata (e.g., `[SECTION_02 // PROJECTS]`). Decorative coordinates are acceptable.
- **Plain English** for the contact section and form — no playful systems language.
- **Hero headline:** `Matt Smith` (display type). Name also appears in the sticky header.

### Sticky Header

| Element | Content |
|---------|---------|
| Left | `Matt Smith` (site name, links to top) |
| Center/Right | `PROJECTS` · `WORK EXPERIENCE` · `CONTACT` (anchor links) |
| Far right | GitHub + LinkedIn icon links |

### Section 01 — About

| Element | Spec |
|---------|------|
| Label | `[SECTION_01 // ABOUT]` |
| Photo | Prominent, offset in a sharp-corner frame overlapping a hairline grid marker |
| Headline | `Matt Smith` |
| Primary content | Six value statements as a vertical list with hairline dividers (no boxed callouts) |
| Secondary content | Bio paragraphs below values, still within the hero section |
| Nav link | None (hero is the landing state) |

### Section 02 — Projects

| Element | Spec |
|---------|------|
| Label | `[SECTION_02 // PROJECTS]` |
| Nav anchor | `#projects` |
| Layout | Alternating Project Modules — odd index: text left / media right; even index: media left / text right |
| Hero media | First item in the project's `media` array. YouTube embeds inline when first; images render as cover |
| Stamp overlays | None |
| Interaction | Click hero media → lightbox modal with full media carousel in **original array order** |
| Links | GitHub, App Store, and live URL buttons below the description |
| Tech stack | Bordered mono tags below description |

### Section 03 — Work Experience

| Element | Spec |
|---------|------|
| Label | `[SECTION_03 // WORK EXPERIENCE]` |
| Section title | `Work Experience` (headline below label) |
| Nav anchor | `#experience` |
| Layout | Always-expanded chronology rows separated by hairlines |
| Content | Role as-is from data, company name (linked), period, skill tags, achievement bullets — all visible |
| Interaction | No accordion |

### Section 04 — Contact

| Element | Spec |
|---------|------|
| Label | `[SECTION_04 // CONTACT]` |
| Nav anchor | `#contact` |
| Tone | Simple and direct — no theater copy |
| Form fields | Name, Email, Message |
| Email delivery | Form UI built now; backend wiring deferred (target: `mattsmithwebdev@gmail.com`) |
| Fallback | Display email address for direct contact |

### Footer

- Text: `MATT_SMITH`
- Optional copyright line in mono-meta style

### Motion

- **Framer Motion** for section reveal on scroll, lightbox open/close, and carousel transitions.
- **CSS** for button shutter-hover effect.
- Respect `prefers-reduced-motion` — disable or shorten animations when set.

### Deferred

- Contact form email delivery (Resend, Formspree, or similar — requires env configuration)
- Dark mode
- Additional pages (`/resume`, `/blog`, etc.)
