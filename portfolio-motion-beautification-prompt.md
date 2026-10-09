# Portfolio Beautification & Motion Pass — Implementation Prompt

## CONTEXT

The current build (`index.html`, `case-study-halapark.html`, `styles.css`, `script.js`) is
structurally correct — IA, hierarchy, sections and content are right — but it reads as a
**wireframe, not a finished product**. Flat blocks, placeholder SVG rectangles standing in for
real UI, no depth, no motion, static hover states. This pass is a **visual and interaction
upgrade only**. Do not change the content, copy, IA, or section order established in the base
build unless a change is required to support a new interaction.

Treat this as moving from **"lo-fi wireframe" to "shipped premium product design portfolio."**

---

## 01 — GOAL

Take the existing light-mode, editorial, Swiss/product-design-led visual direction and:

1. **Beautify** — add real depth, refined surfaces, considered imagery/mockups, and finishing
   details so it reads as art-directed rather than templated.
2. **Add micro-interactions** — small, purposeful responses to hover, click, focus, and scroll
   that make the interface feel alive without becoming distracting.
3. **Add motion** — one or two orchestrated moments (not animation on every element) that guide
   attention and communicate craft.

The end feeling should still be **restrained and premium**, not playful or gimmicky. Every
interaction should answer a question ("what happens if I hover this?", "what happens as I
scroll into this section?") rather than decorate for its own sake.

---

## 02 — WHAT'S CURRENTLY WRONG (fix these specifically)

- **Flat, shadowless surfaces.** Cards, panels, and the hero visual sit directly on the page
  background with only a 1px border. Nothing has depth or a sense of material.
- **Placeholder-looking mockups.** The abstract rectangle/line SVGs read as literal
  wireframes rather than "illustrative interface fragments." They need to look like intentional,
  stylized representations of software — not gray boxes.
- **No motion on load or scroll.** Sections just appear. There is no entrance choreography, no
  scroll-linked reveal, nothing to signal that a person paying attention to detail built this.
- **Static hover states.** Buttons, cards, and links either don't change on hover or change
  abruptly (instant color swap) instead of easing.
- **Weak spatial rhythm.** Section spacing is even and mechanical; nothing pulls the eye or
  creates a focal moment (e.g., the hero visual, the featured case study).
- **No cursor/pointer personality.** On a design portfolio specifically, the cursor and pointer
  behavior is itself part of the craft signal — currently there is none.

---

## 03 — VISUAL BEAUTIFICATION SPEC

### Depth & surface treatment
- Replace flat 1px borders on cards/panels with a **layered elevation system**:
  - Resting state: soft ambient shadow, e.g. `0 1px 2px rgba(23,23,15,0.04), 0 8px 24px -12px rgba(23,23,15,0.10)`.
  - Hover/active state: slightly larger, softer shadow + 2–4px lift (`transform: translateY(-4px)`), eased over 250–320ms.
  - Keep shadows warm-neutral (tinted toward `--ink`, not pure black) to match the warm-white palette.
- Give the hero visual panels (the layered UI fragments) **distinct elevation per layer** —
  the front-most panel should sit visibly above the others (larger shadow, higher contrast),
  reinforcing the "layered interfaces" concept instead of three flat cards side by side.
- Add a **very subtle grain or paper texture** (2–3% opacity noise) to the page background only
  — reinforces the "editorial print" feel without adding visual noise. Optional but recommended.

### Mockup / SVG upgrade
- Rebuild the placeholder SVGs so they read as **stylized product screens**, not literal boxes:
  - Add rounded corners consistently to inner UI elements (buttons, chips, cards within the mockup).
  - Add a soft inner shadow or 1px hairline to nested cards so they read as "surfaces" within the screen.
  - Introduce 1–2 secondary accent tones (a muted teal or amber, used sparingly) inside mockups only,
    so screens don't all look identical — signals range of work without breaking the site's single-accent rule.
  - Add small realistic details: a status dot, a tab bar indicator, a chart tooltip, a cursor icon —
    tiny touches that sell "this is software," not decoration for its own sake.
- Where feasible, swap flat SVG mockups for **device-framed compositions** (subtle phone/browser
  chrome) on the hero and featured case study only — reserve the most polished treatment for the
  highest-priority visuals; keep secondary case cards simpler.

### Color & finishing
- Introduce **one secondary neutral gradient** used sparingly — e.g. a very soft radial highlight
  behind the hero visual (barely visible, `rgba(42,69,147,0.06)` fading to transparent) to add
  atmosphere without becoming a "gradient blob" cliché.
- Sharpen contrast in the accent color's use: reserve full-saturation accent for primary actions
  and active states only; use a tinted accent (`--accent-soft`) for backgrounds/fills so the
  accent still feels special when it appears at full strength.

### Typography polish
- Add optical refinement: slightly tighter letter-spacing on large display type
  (`-0.02em` to `-0.03em` at 60px+), and increase tracking marginally on small caps/labels
  (`0.02em`–`0.04em`) so hierarchy reads instantly.
- Introduce a subtle **text reveal treatment on the hero headline only** (see Motion section) —
  do not apply this pattern to every heading on the page.

---

## 04 — MICRO-INTERACTION CATALOG

Implement each of these. Keep durations in the **150–350ms** range with an eased curve
(`cubic-bezier(0.4, 0, 0.2, 1)` or similar) — nothing should feel bouncy or springy on a
product-design portfolio; motion should feel precise, not playful.

### Buttons
- Primary CTA (`Let's talk →`, `View selected work →`): on hover, background eases to accent,
  arrow glyph shifts 3–4px right, subtle scale (`1.015`) on the whole button. On click/active,
  scale down slightly (`0.98`) for tactile feedback.
- Secondary/outline buttons: border color eases from `--line-strong` to `--ink`; add a very
  subtle background fade-in (`transparent` → `rgba(23,23,15,0.03)`).

### Case study cards
- On hover: image inside the card scales 1.02–1.04x (already specified — keep), card lifts
  4px with shadow growth, category label color shifts to full accent, and the "View Case
  Study →" arrow link underline extends and the arrow nudges right.
- Add a **magnetic cursor effect** on the featured case study card only: as the pointer moves
  within ~40px of the card edge, the card tilts very slightly toward the cursor (max 2–3deg,
  using a lightweight tilt-on-mouse-move technique) — reserve this for the single featured card
  so it reads as a deliberate highlight, not a site-wide gimmick.

### Navigation
- Nav links: keep the existing underline-grow-on-hover, but ease it with a slight delay/stagger
  if multiple links are hovered in sequence (optional polish, skip if it adds complexity).
- Sticky header: on scroll, in addition to the existing compact/blur transition, add a **very
  subtle shadow fade-in** (`0 1px 0 var(--line)` → soft shadow) so the header feels like it's
  lifting off the page content beneath it.
- Active section indicator: as the user scrolls through `#work`, `#about`, `#experience`,
  `#contact`, highlight the corresponding nav link (color shift + underline), using an
  IntersectionObserver on each section.

### Filter pills (More Work grid)
- On filter change, don't just toggle `display: none` — **fade out non-matching cards
  (opacity + 6px translateY down, 180ms) then fade in matching cards** (opacity + translateY
  up, staggered 40ms per card) so the grid re-flow feels considered rather than jarring.

### Cursor
- Add a **custom cursor treatment** for the work/case-study areas only: a small dot that
  scales up and shows a "View" label when hovering a case card image, reverting to default
  cursor everywhere else on the site. Respect `prefers-reduced-motion` and disable on touch
  devices.

### Form/contact section
- Email/CTA links: underline draws in from left to right on hover (`transform: scaleX(0 → 1)`,
  `transform-origin: left`) instead of an instant color change.

### Focus states
- Every interactive element needs a visible, animated focus ring (existing `:focus-visible`
  outline is fine functionally — add a 150ms ease-in on outline-offset so keyboard navigation
  feels considered too, not just accessible-by-requirement).

---

## 05 — MOTION SPEC (the "one orchestrated moment" principle)

Per design-craft best practice: spend motion budget deliberately, not everywhere. This site
gets **two** orchestrated sequences and **one** scroll-linked system. Everything else stays quiet.

### A. Hero load sequence (the one big moment)
On first paint, choreograph a single sequence, total duration ~1.1–1.4s:
1. `0ms` — status pill ("Open to...") fades + slides up 8px.
2. `80ms` — headline reveals **line by line** (not word by word/typewriter — too playful for
   this brand), each line clipping in from a mask, 420ms per line, 60ms stagger between lines.
3. `260ms` — supporting paragraph fades + slides up 10px.
4. `340ms` — CTA buttons fade + slide up, staggered 60ms apart.
5. `420ms` — hero visual panels fade + slide up **from their offset positions**, back-to-front
   (short panel first, then mid, then tall) so the layered depth is felt as they land, staggered
   90ms apart, 500ms duration each.

Run this once on load only — never replay on scroll-back-to-top.

### B. Section-by-section scroll reveal (existing `.reveal` system — refine, don't replace)
- Keep the current IntersectionObserver approach, but:
  - Change translateY from 14px to 18–20px for slightly more perceptible motion.
  - Add a subtle **stagger for grouped children** (case cards, capability tiles, timeline items,
    reflection grid items) — each child in a group should reveal 60–80ms after the previous one,
    rather than all children of a section firing simultaneously.
  - Keep duration at 500–600ms with the existing ease curve — do not speed this up further.

### C. Case study page: process track + wireframe evolution (the second moment)
- On the `case-study-halapark.html` page, when the **process track** (`Discover → Deliver`)
  scrolls into view, animate a thin accent-colored progress line drawing left-to-right beneath
  the six steps (`stroke-dashoffset` animation on an SVG line, or a `transform: scaleX()` div),
  600–800ms, so the process genuinely feels like a sequence being traced rather than six static
  boxes.
- On the **wireframe evolution row** (Initial → Iteration → Final), stagger the three items in
  on scroll with a slightly longer 100ms gap between each, reinforcing the "evolution" narrative.

### Reduced motion
- Wrap all of the above in the existing `prefers-reduced-motion` media query — reduce to instant
  opacity swaps, no transforms, no staggers. This is already partially handled in `styles.css`;
  extend it to cover the new hero sequence and cursor effects explicitly (cursor effects should
  simply not initialize at all under reduced motion).

---

## 06 — IMPLEMENTATION NOTES

- **No animation library is required** for 90% of this — CSS transitions/keyframes plus the
  existing IntersectionObserver pattern in `script.js` cover buttons, cards, filters, and scroll
  reveals. Keep dependencies minimal per the brief's performance principle.
- If a library is wanted for the hero line-reveal and SVG line-draw specifically, a lightweight
  option (e.g. GSAP core, ~50KB gzipped) is acceptable — do not pull in a full animation
  framework for effects this contained.
- Magnetic tilt and custom cursor: implement as small, self-contained vanilla JS (mousemove
  listener + `requestAnimationFrame`-throttled transform updates) — do not add a cursor library.
- All new motion must run on the **compositor-friendly properties only** (`transform`, `opacity`)
  — no animating `width`, `height`, `top`/`left`, or `box-shadow` color directly in a loop; use
  `filter` or a pseudo-element for shadow-growth-on-hover if performance testing shows jank.
- Test on a throttled/low-end mobile profile — the hero load sequence and card lift/shadow
  effects are the highest risk for jank; simplify shadow blur radius on mobile if needed.

---

## 07 — QUALITY BAR (check before calling this done)

- Does the hero load sequence feel like **one coordinated moment**, not a checklist of things
  fading in? If it reads as "everything fades up," slow down and increase stagger gaps.
- Do hover states on buttons and cards feel **eased, not instant**? Nothing should snap.
- Is the featured case study card doing something no other card does (magnetic tilt), so it
  reads as genuinely featured rather than just "first in the list"?
- Does scrolling through `#work` feel like items are **arriving in sequence** within each group,
  not appearing all at once?
- With `prefers-reduced-motion` enabled, does the site still function and look complete with
  motion stripped — no broken layouts, no elements stuck at `opacity: 0`?
- On mobile, is everything still performant — no visible frame drops on card hover/tap or on
  scroll reveal?
- Does the result still feel **premium and restrained**, or does it now feel busy? If in doubt,
  remove one interaction rather than add another.
