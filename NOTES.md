# Replication Notes: dousanmiao.com Structure → uxsarvesh.in Content

This document records all architectural decisions, typeface selections, asset sourcing, and patterns from [dousanmiao.com](https://dousanmiao.com/) that had no real equivalent on [www.uxsarvesh.in](https://www.uxsarvesh.in/) and were consequently omitted or adapted per Section 05 (Non-Fabrication).

---

## 1. Omitted Patterns (No Real uxsarvesh.in Equivalent)

1. **Commerce / E-Book Product Slot**:
   - *Reference Pattern*: Dousan Miao includes a commerce card selling a digital publication (*"A Strategic Guide to UX Portfolios: Do this, Not that"*, priced at £10.00 + VAT with a "Buy now" button).
   - *Decision*: **Omitted**. Sarvesh Sawardekar does not sell an e-book or commercial digital product on `uxsarvesh.in`. Rather than inventing a phantom product or price, this card pattern was replaced with an authentic showcase of Sarvesh's **Intelli Design Systems Architecture & Figma Case Study Repository**.
2. **Paid Coaching / 1:1 Mentorship Booking Slot**:
   - *Reference Pattern*: Dousan Miao includes a card for *"Book a 1:1 coaching session (60 mins)"* and *"Hiring manager's POV: 5 min video feedback"*.
   - *Decision*: **Adapted to Authentic Scope**. Sarvesh's live site offers direct collaboration and design leadership consultation (*"Start a conversation / Reach out to discuss a new project, a design challenge, or just to say hello"*). The slot has been populated with Sarvesh's authentic services: **Design Leadership & Fintech Strategy** and **Enterprise Design Systems Architecture**. No mock-interview pricing or unverified coaching packages were invented.
3. **Unverified Impact Percentages**:
   - *Reference Pattern*: Dousan Miao cites precise metrics like *"Improved engagement and retention of AI Mode by 29% and drove 0.6% DAU growth"*.
   - *Decision*: **Preserved Real Data Only**. Sarvesh's real metrics—such as Aura Gold's ₹10 micro-investing model, multi-bank tier-1 client deployments (NBF, NBK, Riyad Bank, ANZ Bank), and WCAG 2.1 AA accessibility standards—are used verbatim. No arbitrary conversion or retention percentages were fabricated.

---

## 2. Typeface Strategy & Implementation

- **Reference Typeface**: `Open Runde` (Laurids Kern / Ryan Morrison), a rounded variant of the Inter typeface used across modern high-end product portfolios.
- **Implementation**:
  - Sourced via **Fontsource CDN** (`https://cdn.jsdelivr.net/npm/@fontsource/open-runde@5.1.0/index.css`) covering weights `400`, `500`, `600`, and `700`.
  - Fallback stack: `Open Runde, "Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
  - This ensures 100% typographic fidelity with rounded letterforms, optical spacing, and identical visual weight as the reference site.

---

## 3. Asset Sourcing & Preservation

- **Avatar / Profile Photo**: Downloaded directly from Sarvesh's live site bundle: `uxsarvesh.in/images/Sarvesh.webp` (high-res portrait).
- **Project Mockups**:
  - `project1.jpg` (Aura Gold — 24k micro-investing mobile UI)
  - `project2.jpg` (ICICI Lombard Revamp — IL Take Care mobile app)
  - `project3.jpg` (Invusprop Real Estate App — property discovery ecosystem)
  - `project4.jpg` (Intelli Design System — digital transaction banking token hierarchy)
  - Bento supplementary graphics: `scalabledesignsystems.jpg`, `accessibility.jpg`, `prototyping.jpg`, `userresearch.jpg`.
- **Zero Dousan Miao Assets**: No imagery, photography, or copy from Dousan Miao remains in the codebase.

---

## 4. Location & Timezone Localization

- **Reference Route**: `HKG ✈ LHR` (Hong Kong to London, GMT/BST timezone).
- **Sarvesh Route**: `BOM ✈ DXB` (Mumbai to Dubai, GST UTC+4 timezone).
  - Matches Sarvesh's verified background: trained and started in Mumbai (Powerweave, Fluidscapes, ImpactGuru, Clover Infotech) and currently based in Dubai as Design Lead at Intellect Design Arena.
  - The live SVG analog clock and digital clock run on `Asia/Dubai` time (Gulf Standard Time, UTC+4).

---

## 5. Experience Ruler Dial

- **Reference Dial**: Displays ticks `5 · 6 · 7 · 8 · 9 · 10 · 11` with marker on `8 yr` (2026).
- **Sarvesh Alignment**: Sarvesh's verified career timeline on `uxsarvesh.in` starts in **2018** (Powerweave Software Solutions, 2018–2019) through **2026** (Intellect Design Arena Design Lead, 2024–Present).
- **Exact Match**: 2018 to 2026 is exactly **8 years**. The reference ruler's 8-year marker is 100% factually accurate for Sarvesh without requiring any synthetic date adjustment.
