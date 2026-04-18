# How to Edit Project Cards

All project cards live in `index.html` inside `<section id="experience">`. Each card is a `<div class="card">` wrapped in a `<div class="card-slot">`.

---

## Data Attributes

Every `.card` has four `data-` attributes that drive the filter system. Edit them directly on the opening `<div class="card">` tag.

```html
<div class="card-slot">
  <div class="card"
    data-type="engineering software"
    data-category="project"
    data-status="completed"
    data-year="2026"
  >
    ...
  </div>
</div>
```

### `data-type`
What discipline(s) the project belongs to. **Space-separated — a card can have multiple.**

| Value | Meaning |
|---|---|
| `engineering` | Physical/mechanical/electrical engineering |
| `software` | Software systems, data pipelines, web |
| `gamedev` | Game development (Unity, Roblox, etc.) |
| `modeling` | 3D modeling, Blender, asset creation |

Example with multiple: `data-type="engineering software gamedev"`

### `data-category`
What kind of work it was. **Single value only.**

| Value | Meaning |
|---|---|
| `project` | Personal or self-directed project |
| `contract` | Freelance or employment contract |
| `competition` | Hackathon, competition, or contest |

### `data-status`
Whether the work is done. **Single value only.**

| Value | Meaning |
|---|---|
| `completed` | Finished |
| `ongoing` | Still active |

### `data-year`
A 4-digit year used for sorting. For ranges like "2020–Present", use the **start year** (`2020`).

---

## Adding a New Card

1. Copy an existing `.card-slot` block from `index.html`
2. Set the four `data-` attributes appropriately
3. Update the card content (h3, meta, p, ul, media)

```html
<div class="card-slot">
  <div class="card"
    data-type="software"
    data-category="project"
    data-status="completed"
    data-year="2025"
  >
    <h3>My New Project</h3>
    <span class="meta">2025</span>
    <p>Description here.</p>
    <ul>
      <li>Detail one</li>
    </ul>
  </div>
</div>
```

---

## Adding a New Type or Category Value

### New type (e.g. `modeling`)

1. Add `data-type="modeling"` (or append to existing) on the relevant cards in `index.html`
2. Add a pill button to the Type filter group in `index.html`:

```html
<button class="tag filter-pill" data-filter="type" data-value="modeling">3D Modeling</button>
```

No JS changes needed — the filter reads `data-value` generically.

### New category (e.g. `hackathon`)

1. Add `data-category="hackathon"` on the relevant cards
2. Add a pill to the Category filter group:

```html
<button class="tag filter-pill" data-filter="category" data-value="hackathon">Hackathon</button>
```

---

## Current Card Reference

| Card | type | category | status | year |
|---|---|---|---|---|
| Wind Turbine Competition | `engineering` | `competition` | `completed` | `2026` |
| CFD Simulation | `engineering software gamedev` | `project` | `completed` | `2026` |
| Magicbox Logistics LLC | `software` | `contract` | `ongoing` | `2025` |
| Boss Studios LLC | `gamedev software` | `contract` | `completed` | `2024` |
| Oakley Productions LLC | `gamedev software` | `contract` | `completed` | `2024` |
| Full-Stack Freelancer | `gamedev software` | `contract` | `ongoing` | `2020` |
