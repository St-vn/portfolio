# Filter & Sort System — Design Spec
**Date:** 2026-04-16

## Overview

Replace the static subsection labels in the Experience section with a dynamic filter + sort system. Cards are tagged with data attributes; pill buttons above the grid let users filter by type, category, status, and sort by year. Designed to scale as hackathons, modeling work, and more project types are added.

---

## Data Layer

Each `.card` element gets four `data-*` attributes:

| Attribute | Values | Notes |
|---|---|---|
| `data-type` | `engineering` `software` `gamedev` `modeling` | Space-separated; a card can have multiple |
| `data-category` | `project` `contract` `competition` | Single value |
| `data-status` | `completed` `ongoing` | Single value |
| `data-year` | `YYYY` | Use start year for ranges (e.g. 2020–Present → `2020`) |

### Initial card tagging

| Card | `data-type` | `data-category` | `data-status` | `data-year` |
|---|---|---|---|---|
| Wind Turbine Competition | `engineering` | `competition` | `completed` | `2026` |
| CFD Simulation | `engineering software gamedev` | `project` | `completed` | `2026` |
| Magicbox Logistics LLC | `software` | `contract` | `ongoing` | `2025` |
| Boss Studios LLC | `gamedev software` | `contract` | `completed` | `2024` |
| Oakley Productions LLC | `gamedev software` | `contract` | `completed` | `2024` |
| Full-Stack Freelancer | `gamedev software` | `contract` | `ongoing` | `2020` |

---

## HTML Structure

Remove the two `.subsection-label` divs. Wrap each `.card` in a `.card-slot` div. Add a `.filter-bar` above the cards.

```html
#experience
  h2 "Experience"
  .filter-bar
    .filter-group[data-filter="type"]     (All · Engineering · Software · Game Dev · 3D Modeling)
    .filter-group[data-filter="category"] (All · Project · Contract · Competition)
    .filter-group[data-filter="status"]   (All · Completed · Ongoing)
    .filter-group[data-filter="sort"]     (Newest First · Oldest First)
  .card-slot
    .card[data-type data-category data-status data-year]
  .card-slot
    .card[...]
```

Pill buttons use `data-value` attributes (e.g. `data-value="engineering"`). Adding a new type only requires adding a new pill — no JS changes needed.

---

## CSS

### `.card-slot` — collapse animation

```css
.card-slot {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  margin-top: 0.9rem;
  transition: grid-template-rows 0.35s ease, opacity 0.3s ease, margin-top 0.35s ease;
}
.card-slot.hidden {
  grid-template-rows: 0fr;
  opacity: 0;
  margin-top: 0;
  pointer-events: none;
}
.card-slot > .card {
  overflow: hidden;
  min-height: 0; /* required for grid-template-rows: 0fr to work */
}
```

The existing `margin-top: 0.9rem` is removed from the `.card` rule in `stylesheet.css` and moved to `.card-slot` instead. The card's own scroll-reveal `opacity`/`transform` stays on `.card` — these are on different elements so they don't conflict.

### `.filter-bar` & pills

```css
.filter-bar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
}
.filter-pill {
  /* extends .tag base styles */
  cursor: pointer;
  user-select: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.filter-pill.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
```

---

## JS (`main.js`)

### State

```js
const state = { type: 'all', category: 'all', status: 'all', sort: 'newest' };
```

### `applyFilters()`

Iterates every `.card-slot`. For each slot, reads the inner `.card`'s `data-*` attributes and checks:
- **type**: `state.type === 'all'` OR `card.dataset.type.split(' ').includes(state.type)`
- **category**: `state.category === 'all'` OR `card.dataset.category === state.category`
- **status**: `state.status === 'all'` OR `card.dataset.status === state.status`

Toggles `.hidden` on the slot based on whether all three conditions pass.

After filtering, re-sorts **all** slots in the DOM by `data-year` (ascending or descending based on `state.sort`), regardless of visibility — so the DOM order is always consistent and newly un-hidden cards appear in the right position.

When un-hiding a slot, ensures the inner card has `.visible` (handles cards filtered out before IntersectionObserver fired).

### Event listeners

Each pill: on click, update `state[filterGroup]` to the pill's `data-value`, update `.active` class within the group, call `applyFilters()`.

### Extensibility

New type → add a pill with `data-value="modeling"` and tag cards with `data-type="modeling"`. No JS changes needed. New filter dimension → add a new `data-filter` group and a corresponding key in `state`.

---

## What Does Not Change

- Asset paths, video/image `src` values
- Card content or inner HTML structure
- Page layout outside the Experience section
- IntersectionObserver scroll-reveal logic
