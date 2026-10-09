# Section-by-Section Replication Checklist

Audit checklist verifying that every structural, typographic, layout, and interaction pattern from [dousanmiao.com](https://dousanmiao.com/) has been replicated and populated with authentic content from [www.uxsarvesh.in](https://www.uxsarvesh.in/).

---

## 1. Global & Architectural Requirements

| Feature / Requirement | dousanmiao.com Implementation | Replicated Site Status | Verification Notes |
|---|---|---|---|
| **Layout Grid & Containers** | Bento grid system, max-width ~1360px, rounded corners (24px–32px), fluid gutters (16px–24px) | Verified & Implemented | CSS Grid with 3 columns on desktop, 2 on tablet, 1 on mobile; matching corner radii and border tokens. |
| **Typographic Scale & Font** | `Open Runde`, weights 400, 500, 600, 700; rounded geometry | Verified & Implemented | Open Runde loaded via Fontsource CDN with `Plus Jakarta Sans` / `Inter` fallbacks. |
| **Color System & Tokens** | High-contrast modern neutral palette; light mode (#F2F3F5 bg, #FFF cards) / dark mode (#090A0C bg, #121418 cards) | Verified & Implemented | Complete CSS custom properties for background, surfaces, borders, text, and accents in both modes. |
| **Spacing Rhythm** | 20px–32px section gaps, 20px card inner padding, consistent visual vertical rhythm | Verified & Implemented | Standardized `--spacing-sm`, `--spacing-md`, `--spacing-lg` matching reference. |
| **Responsive Breakpoints** | Seamless flow across Desktop (>1024px), Tablet (768px–1024px), and Mobile (<768px) | Verified & Implemented | Bento grid collapses from 3 cols to 2 cols on tablet and 1 col on mobile without broken cards. |

---

## 2. Header & Hero Section

| Feature / Requirement | dousanmiao.com Implementation | Replicated Site Status | Verification Notes |
|---|---|---|---|
| **Brand Logo** | Minimalist geometric icon at top of hero card | Verified & Implemented | Geometric dual-polygon mark representing modern product design. |
| **Headline & Positioning** | Large bold font, crisp line breaks, tight leading | Verified & Implemented | "Hi, I'm Sarvesh. I transform complex logic into intuitive human experiences." |
| **Affiliation Badges** | "Currently at Google" with Google G logo + "Ex-McKinsey" pill badge | Verified & Implemented | "Currently at Intellect Design Arena" with custom icon + "Ex-Clover Infotech" pill badge. |
| **Hero Actions** | Pill action buttons: `Copy email` + Secondary button | Verified & Implemented | `Copy email` (with interactive toast notification) + `View Resume` (direct link to Sarvesh's Google Drive CV). |
| **Hero Avatar Card** | Rounded squircle card with circular portrait photo | Verified & Implemented | Authentic photo of Sarvesh Sawardekar (`Sarvesh.webp`) sourced from `uxsarvesh.in`. |
| **Flight / Route Card** | Origin ✈ Destination with dashed arc and airport codes | Verified & Implemented | `BOM ✈ DXB` (Mumbai to Dubai) representing Sarvesh's career trajectory. |
| **Dark Mode Toggle Card** | Top-right card with segmented Sun/Moon switch | Verified & Implemented | Fully functional theme switcher updating DOM `data-theme` and persisting in `localStorage`. |

---

## 3. Projects & Bento Cards

| Feature / Requirement | dousanmiao.com Implementation | Replicated Site Status | Verification Notes |
|---|---|---|---|
| **Tall Left Project Card** | Vertical card with phone mockup, title, description, and status tag | Verified & Implemented | **Aura Gold** micro-investing app with authentic device mockup (`project1.jpg`) and `Shipped` tag. |
| **Top-Right Project Card** | Wide card with dark backdrop, device display, and status tag | Verified & Implemented | **ICICI Lombard Revamp** (`project2.jpg`) with `Shipped` tag. |
| **Bottom-Left Project Card** | Square/tall card with device mockup and status tag | Verified & Implemented | **Invusprop Real Estate App** (`project3.jpg`) with `Shipped` tag. |
| **Bottom-Right Project Card** | Wide card with interface mockup, metrics, and status tag | Verified & Implemented | **Intelli — Design System** (`project4.jpg`) with `Shipped` tag. |
| **Project Status Badges** | Pill tag with green dot and "Shipped" / blue dot and "In Progress" | Verified & Implemented | Replicated `.status-pill` with glowing dot indicator. |
| **Hover Interaction** | Subtle card scale, border highlight, image lift | Verified & Implemented | `transform: translateY(-4px)`, smooth cubic-bezier easing. |
| **Custom Cursor Follower** | Circular glassmorphic "View project" follower on card hover | Verified & Implemented | Smooth pointer tracker active exclusively when hovering clickable project cards. |

---

## 4. Career Timeline & Widgets

| Feature / Requirement | dousanmiao.com Implementation | Replicated Site Status | Verification Notes |
|---|---|---|---|
| **Career Timeline Ruler** | Horizontal scrubber with ticks `5 · 6 · 7 · 8 · 9 · 10 · 11` with marker on `8 yr / 2026` | Verified & Implemented | Replicated dial marking Sarvesh's 8 years of professional experience (2018–2026) as Design Lead. |
| **Live Timezone Clock** | Real-time analog clock with moving hands + digital time + timezone label | Verified & Implemented | Live Dubai (`GST / UTC+4`) analog SVG clock with second hand animation + 24-hr digital display. |
| **Offerings / Services Cards** | Segmented cards with action buttons (`Book`, `Learn more`) | Verified & Implemented | Authentic offerings: Design Leadership & Fintech Strategy + Enterprise Design Systems Architecture. |
| **Commerce / Product Card** | E-book sales card (£10 UX Portfolio guide) | Omitted & Documented | No phantom product fabricated; slot utilized for Case Study Architecture repository per Section 05. |

---

## 5. Project Detail Modal / Overlay System

| Feature / Requirement | dousanmiao.com Implementation | Replicated Site Status | Verification Notes |
|---|---|---|---|
| **Modal Trigger** | Clicking any project card opens full overlay modal | Verified & Implemented | Smooth scale-up and fade transition with backdrop blur. |
| **Close Mechanics** | Top-right `(✕)` button, clicking backdrop, or pressing `Escape` | Verified & Implemented | All 3 dismissal triggers fully implemented. |
| **Project Navigation** | Bottom-right Previous `(←)` and Next `(→)` floating controls | Verified & Implemented | Seamless cycling through all 4 projects with state persistence. |
| **Scroll-Lock Behavior** | Page body scroll locked when modal is open | Verified & Implemented | `document.body.style.overflow = 'hidden'` applied on open and restored on close. |
| **URL Hash Routing** | URL hash updates dynamically (e.g. `#aura-gold`, `#icici-lombard`) | Verified & Implemented | Supports direct linking and browser Back button history integration. |
| **Case Study Depth** | Hero visual, Executive Summary, Role, Timeline, Skills, Team, Problem, Research, Prototype link | Verified & Implemented | Populated with authentic deep content and direct links to Figma / Behance. |

---

## 6. Footer & Meta Behavior

| Feature / Requirement | dousanmiao.com Implementation | Replicated Site Status | Verification Notes |
|---|---|---|---|
| **Social / Connect Links** | Centered circular pill buttons for social profiles | Verified & Implemented | LinkedIn, Behance, and Email pill links. |
| **Copyright & Credit** | "© 2026 ... made with Google Antigravity" | Verified & Implemented | "© 2026 Sarvesh Sawardekar. Made with Google Antigravity." |
| **SEO Meta Tags & OG** | OpenGraph, Twitter cards, viewport, descriptive tags | Verified & Implemented | Complete metadata targeting Sarvesh's product design leadership. |
