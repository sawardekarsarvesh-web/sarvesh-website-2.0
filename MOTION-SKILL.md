# Motion Skill: dousanmiao.com Animation Catalog

## PURPOSE

This is a **reference skill file** for this project. Drop it into the repo (e.g.
`/docs/MOTION-SKILL.md`) so Antigravity can consult it any time it builds or fixes an
animation on this site, instead of re-guessing motion behavior from scratch each time.

It documents the **exact animations captured from screen recordings of the live reference
site**, https://dousanmiao.com/, frame-by-frame. Every pattern below was confirmed visually
before being written up — nothing here is speculative. Where an exact value (duration, easing,
icon identity) couldn't be measured from the recording alone, that's flagged explicitly with an
instruction to confirm it via DevTools on the live site before implementing.

**Rule for Antigravity: implement every pattern below exactly as specified. Do not simplify,
skip, or substitute a generic fade/slide for any of these — they were specifically flagged as
missing in a previous pass, so treat this file as the authoritative fix.**

---

## PATTERN 1 — Orbiting Tool Icons Around Profile Photo (About page)

**Observed in:** `Recording_2026-09-08_134928.mp4`

### What happens
A circular profile photo sits center. Three tool-brand icons orbit around it continuously
along an elliptical path:
- A multi-colored dot cluster icon (Figma) — positioned upper-left, drifting.
- A navy circular badge with **"Ae"** (Adobe After Effects) — positioned lower-right.
- A blue gradient mountain/peak-shaped icon — positioned upper-right (**confirm the exact tool
  this represents via DevTools alt text/aria-label on the live site before implementing** —
  don't assume).

A cursor/hand icon is also visible drifting near the icons in the recording, suggesting the
icons themselves are individually interactive (hover target), not just decorative.

### Mechanics to implement
- Each icon sits on its own **independent elliptical orbit path** around the profile photo
  center — they are not perfectly synchronized on one ring; radius and angular position differ
  slightly per icon (stagger the animation-delay per icon so they don't move in lockstep).
- Orbit motion is **slow and continuous**, looping indefinitely — target 25–35s per full
  revolution per icon (confirm exact timing against the live site with DevTools' animation
  inspector if available).
- Each icon is contained in a small rounded badge (white/glass background, soft shadow) — the
  icon does not float bare against the page background.
- On hover over an individual icon: pause that icon's motion, scale it up slightly
  (~1.1–1.15x), and increase its shadow — matching the general hover-pause pattern already
  established in this project.
- Content mapping: replace Figma / After Effects / [confirm third icon] with **Sarvesh's
  actual tools** as listed on uxsarvesh.in (per the earlier About-page prompt: Figma,
  Photoshop, Illustrator, etc. — verify the live site for the current real list; don't assume
  it's unchanged from earlier in this project).

### Reference implementation shape
```css
.orbit-icon {
  position: absolute;
  top: 50%; left: 50%;
  animation: orbit var(--orbit-duration, 30s) linear infinite;
  animation-delay: var(--orbit-delay, 0s);
}
.orbit-icon:hover { animation-play-state: paused; }

@keyframes orbit {
  from { transform: rotate(0deg) translateX(var(--orbit-radius, 120px)) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(var(--orbit-radius, 120px)) rotate(-360deg); }
}
```
Each icon badge counter-rotates internally (the second `rotate()` term) so the icon artwork
stays upright while its container orbits — confirm this is how the reference site behaves
(icons in the recording do appear upright throughout the orbit, not tumbling).

---

## PATTERN 2 — Animated Route/Journey Indicator ("HKG · LHR" style)

**Observed in:** `Recording_2026-09-08_135037.mp4` and visible again in
`Recording_2026-09-08_135006.mp4`

### What happens
A compact two-city indicator: city code + full name on each end (e.g. "HKG / Hong Kong" and
"LHR / London"), connected by a **curved dashed path**. A small plane icon travels along the
dashed curve continuously, looping from origin to destination and back, tracing the arc (the
path bows upward in the middle, like a flight-path arc on a map).

### Mechanics to implement
- Use an SVG `<path>` for the dashed curved arc between the two endpoint dots.
- Animate the plane icon's position along the path using `offset-path` /
  `offset-distance` (or a JS-driven `getPointAtLength` fallback for broader browser support),
  looping continuously, roughly 3–5s per one-way traverse based on the recording's pace, with a
  brief pause or smooth reverse at each end (confirm exact loop behavior — does it reverse
  direction, or reset instantly to origin and replay? — via the live site).
- The plane icon should rotate to align with the path's direction of travel at each point along
  the curve, not stay fixed at one angle.
- Endpoint dots pulse subtly or stay static — confirm against the live recording (appears
  mostly static with the motion concentrated on the plane).

### Content mapping decision needed
This exact pattern (two specific cities) is personal to Dousan Miao's own relocation story. For
Sarvesh's site, **do not reuse "HKG · LHR" literally** — this is Dousan's content, not
Sarvesh's. Options, in order of preference:
1. If Sarvesh has a real relevant relocation/travel-for-work story reflected on uxsarvesh.in
   (e.g. city he's based in, or a past relocation), use that real city pair.
2. If not, **repurpose the same animation mechanism for different real content** — e.g. an
   animated "path" between two career milestones (first role → current role) or between two
   real project metrics — rather than showing fabricated cities.
3. If neither applies, omit this element rather than inventing a travel story that isn't true.

### Reference implementation shape
```css
.plane-icon {
  offset-path: path("M 0,20 Q 60,-10 120,20"); /* replace with the actual measured curve */
  offset-distance: 0%;
  offset-rotate: auto;
  animation: fly-route 4s ease-in-out infinite alternate;
}
@keyframes fly-route {
  from { offset-distance: 0%; }
  to   { offset-distance: 100%; }
}
```

---

## PATTERN 3 — Live Micro-Demos Inside Project Cards (not static screenshots)

**Observed in:** `Recording_2026-09-08_135006.mp4`

### What happens
Project preview cards on the reference site don't show static screenshots — they show **small,
continuously looping product demos** relevant to each project:
- A "Dark Mode" card shows a phone mockup with a **toggle switch actually sliding back and
  forth** between light/dark states on a loop.
- A "Satellite SOS" card shows a **pulsing radar/ping animation** — concentric circles
  expanding outward from a center point and fading, looping continuously (classic
  "signal/searching" motion).
- A small **animated bar/equalizer graphic** (vertical dotted bars rising and falling
  irregularly, like a signal-strength or audio-level indicator) appears near the bottom of one
  card, looping continuously.
- A status pill (e.g. "Shipped") with a **small colored dot** sits near the top of the hero
  area — the dot itself has a soft pulse (opacity/scale breathing animation), similar to a
  "live" indicator.

### Mechanics to implement
This is the most important structural takeaway: **case-study preview visuals on this site are
tiny looping animations that demonstrate the actual interaction being designed, not flat
images.** For this project:
- Toggle-style projects → build a real animated toggle switch component (sliding thumb,
  background color cross-fade), looping automatically every few seconds.
- Radar/ping-style content (if relevant to any of Sarvesh's real projects — e.g. any
  notification, real-time, or "searching/matching" UX pattern) → concentric circle
  expand-and-fade loop:
  ```css
  @keyframes ping {
    0%   { transform: scale(0.6); opacity: 0.6; }
    100% { transform: scale(1.8); opacity: 0; }
  }
  .ping-ring { animation: ping 2.2s cubic-bezier(0,0,0.2,1) infinite; }
  ```
- Status/live dot (already used in this project's "Open to opportunities" pill) → confirm it
  currently has a pulse; if it's static, add:
  ```css
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.5; transform: scale(0.85); }
  }
  .hero-status .dot { animation: pulse-dot 2s ease-in-out infinite; }
  ```
- Only build a live micro-demo for a project card if the underlying project genuinely has that
  kind of interaction to show (a toggle, a live state, a data visualization). Don't force every
  project card into one of these patterns if it doesn't fit — a case study about IA or research
  won't have a natural "toggle" moment. Use judgment per project, matching what's real about
  each one.

---

## PATTERN 4 — Status Pill with Live Dot

**Observed in:** `Recording_2026-09-08_135006.mp4` (top-right "Shipped" pill)

### What happens
A small rounded pill badge with a colored dot + label (e.g. "Shipped"), the dot pulsing gently.
This project already has an equivalent ("● Open to opportunities" in the hero) — confirm it has
the pulse animation from Pattern 3 above; if not, add it. Apply the same pill+pulsing-dot
component consistently anywhere a status label appears (project cards, hero).

---

## VERIFICATION CHECKLIST

- [ ] Orbiting icons on the About page move independently, loop continuously, pause + scale on
      hover, and use Sarvesh's real tools (not Figma/Ae placeholders unless those are genuinely
      his tools).
- [ ] The route/journey animation either uses real content relevant to Sarvesh, or is omitted —
      Dousan's "HKG · LHR" content is not copied over.
- [ ] At least the relevant project cards show a small looping live demo (toggle, pulse, or
      equivalent) instead of a flat static mockup, wherever the underlying project supports it.
- [ ] Every status pill's dot has a pulse animation, not a static dot.
- [ ] All of the above respect `prefers-reduced-motion` — looping/pulsing animations should
      stop or reduce to a single static state, not keep looping regardless of the user's OS
      setting.
- [ ] Nothing from this file was skipped without a documented reason in the agent's own notes.
