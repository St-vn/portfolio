# Visual Interface & Asset Design Specification
**Document Identifier:** Y2K-OS-V1-SPEC
**Classification:** Production Architecture Guidelines

---

## 1. System Color Architecture

The user interface uses a dual-layer color taxonomy: a low-luminance, high-precision industrial foreground framework overlaid across a multi-chromatic, hyper-saturated structural backdrop.

### 1.1 Foreground Interface Canvas (UI Elements & Frames)
* **Workspace Canvas Background (`--bg-desktop`):** Hex `#121417` (Deep Obsidian Matte). Base layer void to eliminate illumination bleeding.
* **Window Frame Component Core (`--bg-window`):** Hex `#252930` (Liquid Titanium Metallic). Solid backing for modular nodes.
* **Skeuomorphic Extrusion Highlight (`--border-bevel-light`):** Hex `#4B525E` (Mid-Tone Gray). Bound strictly to Top and Left item coordinates.
* **Skeuomorphic Extrusion Shadow (`--border-bevel-dark`):** Hex `#0B0C0E` (Ink Black). Bound strictly to Bottom and Right item coordinates.
* **Recessed Inner Viewport Surface (`--bg-recessed`):** Hex `#1C1E22` (Charcoal Void). Sink effect baseline.

### 1.2 Hyper-Saturated Asset Contrast Matrix (Backdrop & Callouts)
* **High-Visibility Accent Alpha (`--accent-yellow`):** Hex `#FFEA00` (Saturated Solar Yellow).
* **High-Visibility Accent Beta (`--accent-magenta`):** Hex `#FF007A` (Arcade Magenta).
* **High-Visibility Accent Gamma (`--accent-cyan`):** Hex `#00E5FF` (Cyber Cyan).
* **High-Visibility Accent Delta (`--accent-crimson`):** Hex `#FF0055` (Flyer Crimson).
* **High-Visibility Accent Epsilon (`--accent-purple`):** Hex `#7B2CBF` (Electric Violet).

---

## 2. Typography Hierarchy

To preserve structural data scaling across coordinate grids, the font pipeline strictly splits low-level diagnostic parameters from high-density copy blocks.

### 2.1 Technical System Font Layer
* **Font Families:** `'MS Sans Serif'`, `'Tahoma'`, or pixel-aligned non-aliased monospace (`monospace`).
* **Application Mapping:** Title bars, button strings, application indices, configuration tables, sub-system readouts.
* **Styling Attributes:** Uppercase, zero letter-spacing tracking modification, text-shadow rendering completely disabled, pixelated anti-aliasing configurations (`image-rendering: pixelated; font-smooth: never;`).

### 2.2 Editorial Content Font Layer
* **Font Families:** Geometric Sans-Serif.
* **Application Mapping:** Paragraph descriptions, textual evaluation entries, documentation blocks.
* **Styling Attributes:** Wide leading (1.5–1.6 line-height limits), optimized kerning profiles for prolonged screen reading density.

---
## 3. Modular Asset Classifications

All background and internal contextual elements are grouped into distinct physical-digital hybrid asset profiles.

### 3.1 Type A: High-Density Background Vectors (Stickers & Badges)
* **File Type Requirements:** Vector-native SVG structures.
* **Geometry Attributes:** Multi-pointed starbursts, retail burst tags, geometric star shapes, barcode matrices, horizontal warning blocks.
* **Visual Processing Constraints:** Bound to Layer 1. Must carry thick high-contrast outline layers (`filter: drop-shadow(...)`) to pop over background layers.

### 3.2 Type B: Isolated Raster Silhouette Cutouts (Stickers)
* **File Type Requirements:** Alpha-channel transparent `.png` or highly compressed `.webp` formats.
* **Visual Treatment Pipeline:**
  - Must be passed through a hard-edged stroke matrix.
  - Apply a 2px solid white (`#FFFFFF`) or solar yellow (`#FFEA00`) outer border simulation via CSS filters to replicate physical vinyl die-cut sticker stock.
  - Artificially scale saturation indices up via code mapping (`filter: saturate(1.5) contrast(1.1);`).

### 3.3 Type C: Skeuomorphic Material Containers (Posters & Real-World Framing Assets)
* **File Type Requirements:** Photographic images wrapped inside functional skeuomorphic border masks.
* **Material Mocking Archetypes:**
  - *Polaroid Framework Texture:* 4:5 aspect ratio white cardboard bordering with raw handwriting or timestamp monospace labels embedded in the lower margin area.
  - *CD Jewel Case Shells:* Transparent plastic reflective overlay masks containing hard glossy sheen glares, applied via absolute layering over internal media graphics.
  - *Analog Cassette/Tape Shells:* Boxy, multi-screwed structural frames used to encase audio or video streaming media playback boundaries.
  - *Poster Paper Textures:* Heavy-weight rectangular textures with simulated paper folds, light creasing marks, or stapled edge indicators.

### 3.4 Type D: Single-Pixel Fine Line Utilities (Dandy-Tech Graphics)
* **File Type Requirements:** Line-drawn inline SVGs or custom icon fonts.
* **Geometry Attributes:** 1px width structural hair-line crosshairs, alignment brackets, targeted engineering reticles, diagonal tracking dashes, boundary box targets.
* **Application Mapping:** Rendered in low-opacity gray or sharp neon colors to pepper margins, framing areas, and whitespace coordinates inside open window bodies.

---

## 4. Window Engine Layout Mechanics

### 4.1 Grid Boundary Sandboxing (Desktop Widescreen Mode)
* **Viewport Boundaries:** Fixed canvas matrix (`width: 100vw; height: 100vh; overflow: hidden;`). No global vertical viewport scrollbar.
* **Z-Index Layer Hierarchy:**
  - Layer 1 (`z-index: 10`): Background Sticker Collage backdrop. Pointer interactions disabled (`pointer-events: none; user-select: none;`).
  - Layer 2 (`z-index: 20`): Fixed Workspace Application Icons Grid. Left-aligned vertical stacking arrays.
  - Layer 3 (`z-index: 30` to `100+`): Stateful Floating Utility Window Panes. Top clicked item shifts dynamically to maximum index value.

### 4.2 Rigid Interface Window Blocks (Mobile Mode Fallback)
* **Media Query Boundary:** Target screen thresholds `<= 768px` width.
* **Interface Structural Mutation:**
  - Drop completely all pointer drag calculations and absolute element coordinates.
  - Scale the upper 35% of the viewport container as an un-scrollable background collage block displaying type A and B assets.
  - Remap application short-cuts into a structured 2-column or 3-column navigation button block grid filling the lower 65% of the workspace canvas.
  - Force any activated child windows to render as absolute full-screen overlays with static bounding areas.

### 4.3 Tactile Interaction Displacement Pipeline
* **Skeuomorphic Pressed State Rule:** All click targets, buttons, and icon grid slots must apply a binary visual shifting protocol upon detecting a `:active` touch/mouse interaction loop:
  - Invert the dual shadow outline configuration (`--border-bevel-light` values map to the bottom/right, and `--border-bevel-dark` values map to the top/left).
  - Trigger a precise 1-pixel coordinate translation down and right (`transform: translate(1px, 1px);`).