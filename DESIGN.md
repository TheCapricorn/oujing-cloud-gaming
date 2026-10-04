---
version: alpha
name: "欧竞云电竞"
description: "Chinese cloud gaming showcase with cinematic artwork and precise device and plan comparison."
colors:
  primary: "#6759ff"
  secondary: "#1b9eff"
  background: "#070914"
  surface: "#111426"
  text: "#f4f7ff"
  muted: "#b4bfd6"
  focus: "#bdb6ff"
  border: "#747a9e"
typography:
  sans:
    fontFamily: "'Noto Sans SC', system-ui, sans-serif"
  mono:
    fontFamily: "'DM Mono', monospace"
rounded:
  DEFAULT: "9px"
  lg: "15px"
spacing:
  page-max: "1140px"
  section-gap: "105px"
components:
  button: {}
  card: {}
  dialog: {}
---

# 欧竞云电竞 Design System

## Overview

### Creative North Star
A cloud gaming battlefield: cinematic game imagery carries the expression, with restrained blue-violet controls and readable equipment comparisons.

### Product context and register
Chinese-language marketing website for players comparing cloud gaming plans and device support. Repository evidence: `src/main.jsx`, `src/billing-info.js`, `src/footer-info.js`. Locale is zh-CN; no Japan-specific scope. Preserve existing artwork, pricing, and confirmed billing copy. No checkout, account service, or downloadable client is configured. The signature is the full-width battlefield hero. Avoid replacing this identity with generic dashboard chrome.

Token ownership: `src/styles.css` is the canonical runtime source; this document records it, without generated adapters. The final root declaration owns availability-dialog, focus, and scrollbar variables. Legacy marketing CSS remains canonical for established sections. Changing a shared token requires updating this document and checking the rendered result.

## Colors
Blue-violet primary and electric-blue secondary form the established action gradient. Dark navy background and surface preserve artwork contrast. Text and muted tokens govern the new dialog; focus is pale violet. Global scrollbars use #626c91 thumb, #111426 track, #929bc0 hover, and #bdb6ff active. Forced colors return scrollbar ownership to the system. Availability is stated in words, never color alone.

## Typography
Noto Sans SC supports Chinese body and headings; system sans-serif is the fallback. DM Mono is reserved for timer and captions. Dialog body is 14px with 1.85 line height; the title is 28px. Artwork headlines retain existing responsive sizes. No new remote font dependency is introduced.

## Layout
1140px maximum content width; desktop 48px combined side margin and mobile 32px. Mobile breakpoint is 760px, with a compact navigation disclosure. Intermediate navigation contracts at 1100px. Feature images reserve aspect ratio; cards preserve natural document scrolling. Dialog width is capped at 480px, with 16px viewport margins and its own vertical scrolling.

## Elevation & Depth
Artwork is the primary depth cue. Borders separate plan and device cards. Navigation stays sticky; the native modal top layer holds the availability surface above the page, with a dark blurred backdrop.

## Shapes
Existing 9px controls and 15px major cards; availability dialog uses the shared 15px radius. Icons stay within simple rounded containers.

## Components

### Foundational visual states
Every link and button has visible focus, pointer affordance, and hover feedback. Disabled buttons block interaction. Pressed buttons shift one pixel. No backend operation or async loading is simulated.

### Buttons and actions
Gradient buttons are primary, outlines secondary, and text controls tertiary. All download, plan, and scene actions use the same availability dialog. It explicitly states that no order or charge takes place. Preserve source billing uncertainty; do not invent payment rules or download links.

### Navigation and data display
Section navigation uses fragment links and aria-current=location. The mobile trigger reports expanded state and controls the navigation region. Escape closes it and returns focus to the trigger. Footer links follow the same fragments. A skip link reaches main content.

### Forms and overlays
No forms, table, select, or date picker applies. Native dialog is the shared modal owner: browser-managed inert background, focus containment, Escape, and focus restoration. The primary acknowledgment receives initial focus. Close and backdrop dismiss it; document scrolling is locked while open. Persistent availability text replaces transient success messaging.

### Iconography
Lucide React, typically 15–22px in controls. Icon-only buttons have Chinese accessible names.

### Motion
Existing 200–280ms hover transitions remain. Reduced motion disables animations, transitions, and smooth scrolling. No ambient animated effects are added.

### Content and data visualization
Use plain Chinese action labels. Missing operator, legal, billing, and hardware information remains explicit. Existing billing timer is labeled as illustrative. No claimed signup benefit without supplied evidence.

## Do's and Don'ts

- Do preserve the established battlefield imagery and shared availability behavior.
- Do check navigation, dialog, focus, and responsive layouts together.
- Don't present unavailable downloads as successful actions.
- Don't add transaction or legal promises without maintained operator evidence.
