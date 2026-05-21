---
name: Ethereal Wisdom System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#95d1ce'
  on-secondary: '#003735'
  secondary-container: '#0d5250'
  on-secondary-container: '#87c3c0'
  tertiary: '#f9c759'
  on-tertiary: '#402d00'
  tertiary-container: '#dbac40'
  on-tertiary-container: '#594100'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#b1eeea'
  secondary-fixed-dim: '#95d1ce'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#084f4d'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f0c052'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  parchment-text: '#F0E8D0'
  deep-forest: '#0B3A2E'
  whatsapp-green: '#25D366'
typography:
  display-lg:
    fontFamily: Noto Serif Devanagari
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif Devanagari
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Noto Serif Devanagari
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Tiro Devanagari Hindi
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Tiro Devanagari Hindi
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Noto Serif
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1140px
  gutter: 2rem
  margin-mobile: 1.25rem
  stack-unit: 0.5rem
---

## Brand & Style

The design system is centered on the concept of "Illuminated Darkness"—a premium, scholarly approach to spirituality that avoids traditional tropes in favor of editorial sophistication. The brand personality is transcendent yet grounded, catering to an audience that values depth, quietude, and intellectual rigor.

The visual style is **Minimalism with subtle Glassmorphic accents**. It utilizes high-contrast pairings (gold on black) to create a sense of sacred importance, while soft peacock green blurs provide a sense of atmospheric depth. The interface should feel like a modern digital manuscript: spacious, intentional, and quiet.

## Colors

The palette is rooted in a "Deep Black" (#080808) foundation to provide maximum contrast for the metallic and jewel-toned accents. 

- **Primary Gold (#D4AF37):** Used for primary headings, interactive states, and brand iconography. It should be treated as "ink" on the dark surface.
- **Peacock Green (#004B49):** Reserved for subtle atmospheric glows, secondary call-outs, and background depth.
- **Parchment Text (#F0E8D0):** This is the primary color for long-form body text to reduce eye strain compared to pure white, maintaining a heritage publication feel.
- **Atmospheric Glows:** Use low-opacity gradients of the secondary green to define sections without hard dividers.

## Typography

This system prioritizes Devanagari script integrity. **Noto Serif Devanagari** is the voice of the publication, used for all headlines to convey authority and timelessness. For long-form reading, **Tiro Devanagari Hindi** is utilized for its exceptional legibility and traditional proportions.

- **Editorial Hierarchy:** Use wide margins around display text to allow the characters to breathe.
- **Color Usage:** Headlines should strictly use the Primary Gold or Parchment. Avoid using Green for text to maintain accessibility and "premium" feel.
- **Line Height:** Generous line heights (1.6x+) are mandatory for body text to facilitate a meditative reading experience.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, reminiscent of high-end print journals. Content is centered with significant horizontal gutters to focus the user's attention.

- **Desktop:** 12-column grid with a maximum content width of 1140px. Use "Empty Columns" for editorial breathing room.
- **Mobile:** Single column with 20px side margins. 
- **Vertical Rhythm:** A strict 8px (0.5rem) base unit controls all padding and margins. Use large vertical gaps (64px, 80px, or 120px) between major sections to signify a change in topic or "breath."

## Elevation & Depth

Depth is conveyed through **Tonal Layers and Subtle Glows** rather than aggressive shadows.

- **The Void:** The base layer is #080808.
- **Illuminated Surfaces:** Cards and containers use a slightly lighter tint (#121212) or a 1px Gold/Green outline at 15% opacity.
- **Luminescence:** Use "Radial Glows" of #004B49 (Peacock Green) at 5-10% opacity behind featured content to create a soft halo effect.
- **Glassmorphism:** Navigation bars and overlays use a 70% opacity black with a 20px backdrop blur, creating a "smoky quartz" effect.

## Shapes

The shape language is **Soft and Structural**. 

- **Corners:** A subtle 0.25rem (4px) radius is applied to buttons and cards to take the "edge" off the high-contrast layout without appearing "bubbly" or informal.
- **Dividers:** Use extremely thin (0.5px) horizontal lines in Gold or Green at low opacity (20%) to separate content, mimicking fine stationery.
- **Iconography:** Use strictly minimalist, 1.5px stroke-weight outline icons. No filled icons unless in an active state.

## Components

### Buttons
Primary buttons are ghost-style with a 1px Gold border and Gold text. On hover, they gain a very subtle peacock green outer glow. Secondary buttons use simple underlined text in Parchment.

### Cards
Cards are defined by their content rather than heavy containers. Use a "Soft Border" approach: a 1px stroke at 10% Gold opacity. Title text within cards should always be Noto Serif Devanagari.

### Input Fields
Inputs are minimal underlines (bottom-border only) in #F0E8D0. Focus states transition the underline to Primary Gold with a faint Peacock Green glow beneath the field.

### Lists & Navigation
Navigation items use the `label-caps` style with generous tracking. Active states are indicated by a small Gold dot beneath the text rather than a background change.

### Imagery
Photos should be desaturated or treated with a slight dark-green overlay to ensure they harmonize with the deep black background. Avoid bright, high-key photography.