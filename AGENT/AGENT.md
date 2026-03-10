# 📄 AGENT.md — The Paper Design System
### *A complete brand bible, design protocol, and component library constitution*

> "This isn't a design system. It's a sketchbook that shipped to production."

---

## 0. The Big Idea

**Paper** is a UI component library built on a single conviction: interfaces should feel *made*, not generated.

Every button has weight. Every card has a crinkle. Every page feels like it was laid out by someone who cared enough to pick up a ruler — and then put it down and eyeballed it instead.

The aesthetic draws from three overlapping worlds:

1. **Old newspapers & printed zines** — typefaces that were chosen, not defaulted to
2. **Notion-style hand-sketched illustrations** — imperfect, warm, alive
3. **Paper itself** — textures, off-whites, visible grain, creased edges, ink bleeds

The result: **a component library that makes people stop scrolling and actually read the thing.**

---

## 1. Brand Identity

### 1.1 Name & Voice

| Property | Value |
|---|---|
| **Library name** | `paper-ui` |
| **Tagline** | *"Built different. Literally on paper."* |
| **Voice** | Witty, dry, slightly self-aware. Never corporate. Never "seamless". |
| **Personality** | That brilliant friend who hand-letters their notes but has 4 monitors |
| **Humor level** | Medium-high. Comments in the code should make someone smile. |

### 1.2 Core Philosophy

> "Good design should look like it cost money and like someone stayed up too late."

The library is **anti-polish-for-polish's-sake**. Imperfection is a feature. A slightly off-center border is intentional. The hand-drawn circle that's a little wobbly? That's the brand.

---

## 2. Design Tokens

### 2.1 Color Palette

```
PAPER WHITES (backgrounds, surfaces)
──────────────────────────────────────
--color-paper-base:      #F5F0E8   ← warm ivory, the default background
--color-paper-light:     #FAF8F3   ← near-white for cards on dark bg
--color-paper-aged:      #EDE4D0   ← old book pages, worn surfaces
--color-paper-cream:     #FFF9F0   ← hero sections, spotlight areas

INK (text, strokes, borders)
──────────────────────────────────────
--color-ink-black:       #1A1209   ← almost black, warm-tinted
--color-ink-dark:        #2C2416   ← body text
--color-ink-medium:      #5C4F3A   ← secondary text, captions
--color-ink-light:       #9B8E7A   ← placeholders, disabled
--color-ink-faint:       #C8BFB0   ← dividers, subtle borders

ACCENT (pops of color, the "highlighter marks")
──────────────────────────────────────
--color-accent-yellow:   #F2C94C   ← highlighter yellow, the star accent
--color-accent-red:      #E05A4D   ← error, danger, "circled in red pen"
--color-accent-green:    #4CAF7D   ← success, "green checkmark"
--color-accent-blue:     #4A90D9   ← links, info, "blue ink"
--color-accent-orange:   #E8833A   ← warning, call-to-action

SKETCH (hand-drawn illustration palette — matches Notion-style SVGs)
──────────────────────────────────────
--color-sketch-stroke:   #2C2416   ← illustration outlines
--color-sketch-fill-1:   #F2C94C   ← warm yellow fills
--color-sketch-fill-2:   #E8D5B7   ← beige fills
--color-sketch-fill-3:   #A8D5A2   ← soft green fills
--color-sketch-fill-4:   #F4A57A   ← salmon/peach fills
--color-sketch-shadow:   rgba(26, 18, 9, 0.12)
```

### 2.2 Typography

The soul of this system is in the type. Every font choice is deliberate and strange in the best way.

```
DISPLAY / HERO (the loud one)
  Font: "Instrument Serif" or "Libre Baskerville"
  Use: Headlines, H1s, hero text
  Style: italic where possible — makes it feel editorial
  Weight: 400 (serifs don't need to be bold to be loud)

HEADING (the workhorse)
  Font: "DM Serif Display"
  Use: H2, H3, section titles
  Weight: 400
  Letter-spacing: -0.02em (tight, confident)

BODY (the one doing the heavy lifting)
  Font: "Lora" or "Source Serif 4"
  Use: Paragraphs, descriptions, card content
  Size: 16px / line-height: 1.75
  Weight: 400 (regular)

UI MONO (the nerd font)
  Font: "JetBrains Mono" or "Fira Code"
  Use: Code blocks, labels, badges, timestamps
  Weight: 400/500

HANDWRITTEN (the personality injection)
  Font: "Caveat" or "Indie Flower"
  Use: Annotations, callouts, sticky notes, humorous asides
  Weight: 400 — never bold, it defeats the charm
  Color: --color-ink-medium
```

**Typography Scale:**
```
--text-xs:    0.75rem   (12px) — captions, footnotes
--text-sm:    0.875rem  (14px) — labels, secondary
--text-base:  1rem      (16px) — body
--text-md:    1.125rem  (18px) — large body
--text-lg:    1.25rem   (20px) — lead text
--text-xl:    1.5rem    (24px) — H4
--text-2xl:   2rem      (32px) — H3
--text-3xl:   2.5rem    (40px) — H2
--text-4xl:   3.5rem    (56px) — H1
--text-5xl:   5rem      (80px) — Hero display
```

### 2.3 Spacing

Built on a base-8 grid, but allowed to breathe:
```
--space-1:    4px
--space-2:    8px
--space-3:    12px
--space-4:    16px
--space-6:    24px
--space-8:    32px
--space-12:   48px
--space-16:   64px
--space-24:   96px
--space-32:   128px
```

### 2.4 Borders & Radii

The key to the paper feel: **real borders, not shadows pretending to be borders.**

```
--border-width-sm:   1px    ← light rule
--border-width-md:   2px    ← standard card border
--border-width-lg:   3px    ← emphasis border
--border-width-xl:   4px    ← thick newspaper rule

--border-color:      var(--color-ink-black)

--radius-none:    0px        ← full square, old newspaper
--radius-sm:      4px        ← slight softening
--radius-md:      8px        ← default card
--radius-lg:      16px       ← modal, large card
--radius-xl:      24px       ← pill-ish
--radius-full:    9999px     ← full pill / badge
```

### 2.5 Shadows (The "Paper Lift" System)

This is what makes components feel like they're stacked on a desk:
```
--shadow-flat:    none                              ← on the table
--shadow-lift-1:  3px 3px 0px var(--color-ink-black)   ← slight lift
--shadow-lift-2:  5px 5px 0px var(--color-ink-black)   ← clear lift
--shadow-lift-3:  8px 8px 0px var(--color-ink-black)   ← floating
--shadow-lift-4:  12px 12px 0px var(--color-ink-black) ← full hover
--shadow-accent:  4px 4px 0px var(--color-accent-yellow) ← highlighted
```

**Rule**: Hard offset shadows only. No blur. No spread. Shadows are a lie you tell about depth — make them honest.

### 2.6 Textures

The paper grain is applied as an SVG filter or CSS `background-image`:
```css
/* Grain overlay (apply to .paper-bg) */
.paper-grain {
  background-image: url("data:image/svg+xml,..."); /* noise SVG */
  background-blend-mode: multiply;
  opacity: 0.04;
}

/* Aged paper feel */
.paper-aged::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 20%, 
    rgba(242, 201, 76, 0.06), 
    transparent 60%
  );
  pointer-events: none;
}
```

---

## 3. Component Library Manifest

### 3.1 Category Map

```
paper-ui/
├── primitives/
│   ├── Button
│   ├── Badge
│   ├── Tag
│   ├── Divider
│   ├── Avatar
│   └── Chip
├── typography/
│   ├── Heading
│   ├── Body
│   ├── Annotation       ← handwritten callout
│   ├── Highlight        ← yellow-marker highlight text
│   ├── Typewriter       ← animated mono text
│   └── DropCap          ← big first letter, editorial
├── cards/
│   ├── PaperCard        ← base card with border + shadow
│   ├── StickyNote       ← slight rotation, yellow/pink/blue variants
│   ├── Newspaper        ← column layout card, big headline
│   ├── IndexCard        ← ruled lines, small, compact
│   ├── Postcard         ← image + handwritten message
│   └── ReceiptCard      ← mono font, dashed border, torn edge
├── layout/
│   ├── PaperSection     ← section with paper texture bg
│   ├── Column           ← newspaper multi-column layout
│   ├── Spread           ← full bleed horizontal layout (like an open book)
│   ├── Margin           ← side annotation area
│   └── Ruled            ← horizontal ruled line backgrounds
├── navigation/
│   ├── Navbar           ← bordered, no shadow, tabs underlined
│   ├── Breadcrumb       ← slash-separated, mono font
│   ├── TableOfContents  ← dotted leader lines, old book ToC
│   └── BackTo           ← "← Back to top" annotation style
├── forms/
│   ├── Input            ← borderless bottom only, underline style
│   ├── Textarea         ← lined paper look
│   ├── Select           ← custom dropdown, paper style
│   ├── Checkbox         ← hand-drawn X mark
│   ├── Radio            ← filled circle, hand-drawn feel
│   └── SearchField      ← with pencil icon
├── display/
│   ├── SketchIllustration  ← wrapper for Notion-style SVG illustrations
│   ├── AnnotationPin       ← push-pin with note
│   ├── Stamp               ← approved/draft/rejected stamp component
│   ├── WaxSeal             ← circular decoration, premium feel
│   ├── Scribble            ← SVG underline/circle decoration
│   └── Doodle              ← small hand-drawn icon set
├── feedback/
│   ├── Toast            ← "sticky note" notification
│   ├── Alert            ← bordered, left-accent bar
│   ├── EmptyState       ← with sketch illustration
│   ├── ErrorPage        ← "404: Page went on a coffee break."
│   └── LoadingDots      ← typewriter cursor blink
├── data/
│   ├── StatCard         ← big number, small label, paper card style
│   ├── Timeline         ← vertical line, dot markers, hand-feel
│   ├── Table            ← ruled lines, no rounded corners
│   └── ProgressBar      ← hand-drawn fill style
└── portfolio-specific/
    ├── HeroBlock        ← name + title + sketch illustration
    ├── ProjectCard      ← newspaper headline + project meta
    ├── SkillTag         ← badge with category color
    ├── ExperienceRow    ← timeline entry
    ├── ContactBlock     ← handwritten note + social links
    └── FooterNote       ← "Made with ☕ and mild sleep deprivation"
```

---

## 4. Design Principles (The Rules)

### DO ✅

- **Use borders as structure.** A 2px solid border communicates more than a drop shadow ever could.
- **Embrace imperfection.** A component that looks "slightly off" is on brand. Aim for *crafted*, not *machined*.
- **Write copy that has personality.** Empty states, error messages, and button labels should be human. "Nothing here yet — maybe check back after the internet's morning coffee."
- **Layer typefaces.** Serif for content, mono for data, handwritten for character. Never one alone.
- **Think in stacks.** Cards sit on top of other cards. Annotations float above content. Use z-index and shadow intentionally.
- **Let white space be loud.** Generous padding is part of the paper aesthetic — things shouldn't feel cramped.
- **Use rotation sparingly.** A sticky note at `-2deg` is charming. At `-12deg` it's a migraine.
- **Illustrations should feel hand-made.** Use the Notion-style sketch illustrations as accent elements, not hero content.
- **Keep accent colors rare.** Yellow highlight on 3 words in a paragraph is powerful. Yellow everywhere is a highlighter explosion.
- **Components should be copyable.** Zero dependencies as a goal. If it needs a library, it needs to be worth it.

### DON'T ❌

- **Don't use gradients** (unless it's a subtle paper yellowing effect). Gradients belong in 2019 SaaS dashboards.
- **Don't use border-radius > 16px** unless it's a pill badge. Rounded corners soften the paper feel.
- **Don't use colored backgrounds** as primary surfaces. The warmth comes from ivory/cream, not teal or purple.
- **Don't blur shadows.** Hard-offset is non-negotiable. See §2.5.
- **Don't mix more than 3 font families** in one view. Display + Body + Mono is the ceiling.
- **Don't animate everything.** Reserve motion for meaningful state changes (hover, open, error). Constant motion is exhausting.
- **Don't center everything.** Left-aligned text is more editorial, more human. Center-align is for posters and toasts only.
- **Don't skip the humor.** If your empty state says "No data found", you've missed the whole point.
- **Don't add glassmorphism.** Paper doesn't blur. Paper is opaque. Glass is not paper.
- **Don't use emoji as decoration** in component labels or headings. Use doodle SVGs instead.
- **Don't use `font-weight: 800`** on serif fonts. They weren't designed for it and they'll tell you.

---

## 5. Illustration System

### 5.1 The Sketch Library

Based on the 1,600+ free Notion-style illustrations (hand-sketched SVGs). Integration rules:

```
Illustration Sizing:
  --illus-xs:   80px   — inline, decorative
  --illus-sm:   160px  — card accent
  --illus-md:   240px  — section feature
  --illus-lg:   360px  — hero, empty state
  --illus-xl:   480px  — full-page feature

Usage rules:
  1. Max ONE large illustration per screen section
  2. Always pair with text — never let it stand alone
  3. Color tint illustrations with CSS filter or SVG fills 
     using the --color-sketch-* tokens
  4. Slight rotation allowed: ±5deg max
  5. On mobile: drop to one size smaller
```

### 5.2 Illustration Placements

| Location | Size | Example |
|---|---|---|
| Hero section | `--illus-lg` | Person at desk, reading, building |
| Empty state | `--illus-md` | Empty box, sleeping character |
| Error page | `--illus-md` | Character looking confused |
| Card accent | `--illus-sm` | Small tool/object |
| Sidebar decoration | `--illus-xs` | Floating doodle |

### 5.3 SVG Color Override Pattern

```tsx
// Always use currentColor + CSS vars for illustration fills
<SketchIllustration 
  src="/illustrations/person-reading.svg"
  fill="var(--color-sketch-fill-1)"
  stroke="var(--color-sketch-stroke)"
  size="md"
  rotate={-3}
/>
```

---

## 6. Animation & Motion

Less is more. When something moves, it should feel like a piece of paper shifting on a desk — not a UI framework showing off.

```
Transitions:
  --duration-fast:    120ms
  --duration-base:    200ms
  --duration-slow:    350ms
  --duration-reveal:  500ms

  --ease-default:     cubic-bezier(0.16, 1, 0.3, 1)  ← snappy out
  --ease-in:          cubic-bezier(0.4, 0, 1, 1)
  --ease-bounce:      cubic-bezier(0.34, 1.56, 0.64, 1) ← slight overshoot

Approved motions:
  ✅ Shadow depth on hover (2px → 6px offset shift)
  ✅ Slight scale on card hover (1.0 → 1.01)
  ✅ Underline expand on link hover
  ✅ Sticky note "lift" on hover (translateY(-3px) + shadow increase)
  ✅ Stamp "press" animation (scale 1.2 → 1.0)
  ✅ Toast slide in from top (translateY(-100%) → 0)
  ✅ Page entrance: staggered fade + translateY(8px → 0)

Forbidden motions:
  ❌ Parallax scrolling
  ❌ Continuous rotation or infinite loops (unless intentionally loading)
  ❌ Morphing shapes
  ❌ Glitch effects
  ❌ Anything that would make a print designer cry
```

---

## 7. Grid & Layout System

### 7.1 Page Grid
```
Max width:    1200px
Columns:      12
Gutter:       24px (desktop), 16px (mobile)
Margins:      48px (desktop), 24px (tablet), 16px (mobile)
```

### 7.2 Layout Patterns

**The Newspaper Layout** — flagship pattern
```
┌─────────────────────────────────────────────┐
│  BIG HEADLINE HERE IN 56px DISPLAY SERIF    │
│  ─────────────────────────────────────────  │
│  ┌───────────────┐  ┌─────────┐  ┌────────┐ │
│  │  Main column  │  │ Col 2  │  │  Col3  │ │
│  │  (50%)        │  │ (25%)  │  │  (25%) │ │
│  └───────────────┘  └─────────┘  └────────┘ │
└─────────────────────────────────────────────┘
```

**The Open Book** — for about/bio sections
```
┌────────────────────┬────────────────────────┐
│  LEFT PAGE         │  RIGHT PAGE            │
│  Illustration      │  Text content          │
│  (40%)             │  (60%)                 │
│                    │  Body copy in Lora     │
└────────────────────┴────────────────────────┘
```

**The Desk Stack** — for projects/work cards
```
┌──────────────┐
│  Card 3 ↗   │  ← slight rotation, z=3
│ ┌──────────┐ │
│ │  Card 2  │ │  ← slight rotation opposite, z=2  
│ │ ┌──────┐ │ │
│ │ │Card1 │ │ │  ← flat, z=1
│ │ └──────┘ │ │
│ └──────────┘ │
└──────────────┘
```

---

## 8. Copywriting Protocol

*The words are part of the design.*

### 8.1 Tone Spectrum

| Context | Tone | Example |
|---|---|---|
| Hero/headline | Bold, direct | "I write code. Sometimes it works first try." |
| Section intro | Warm, curious | "Here's what I've been making (and breaking)" |
| Card labels | Dry, factual | "Shipped. June 2024." |
| Empty states | Gently funny | "Nothing here. Unlike my commit history." |
| Error messages | Self-aware | "500: This wasn't supposed to happen. (Famous last words.)" |
| Tooltips | Helpful + wry | "Click this. Yes, it does something." |
| Footnotes | Nerdy, aside | "* Actual line count may vary depending on refactor mood." |
| CTA buttons | Direct, no fluff | "See the work" not "View Portfolio" |

### 8.2 Banned Phrases

These words are not allowed in any component copy, demo text, or documentation:

- "Seamless"
- "Cutting-edge"  
- "World-class"
- "Passionate developer"
- "Lorem ipsum" ← use real, witty placeholder text instead
- "Click here"
- "Leverage"
- "Robust solution"
- "I am a results-driven professional"

### 8.3 Default Placeholder Text

Instead of lorem ipsum, use:

```
Short: "The quick brown fox had better things to do."
Medium: "This is placeholder text. Unlike most placeholder text, 
         this one is mildly self-aware of its own temporariness."
Name: "Kaif Ansari" / "A. Human" / "Someone Who Codes"
Date: "Yesterday (approximately)"
Email: "real@person.com (probably)"
```

---

## 9. File & Folder Architecture (Recommended)

```
paper-ui/
├── src/
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── shadows.ts
│   │   └── index.ts
│   ├── components/
│   │   ├── primitives/
│   │   ├── typography/
│   │   ├── cards/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── forms/
│   │   ├── display/
│   │   ├── feedback/
│   │   ├── data/
│   │   └── portfolio/
│   ├── illustrations/
│   │   ├── EmptyBox.tsx
│   │   ├── PersonReading.tsx
│   │   ├── WorkingDesk.tsx
│   │   └── ...  (SVG as React components)
│   ├── hooks/
│   │   ├── useHover.ts
│   │   ├── useScroll.ts
│   │   └── useReducedMotion.ts
│   ├── utils/
│   │   ├── cn.ts          ← classnames utility
│   │   └── variants.ts    ← component variant helper
│   └── brand.tsx          ← see §10 below
├── AGENT.md               ← this file
├── README.md
└── package.json
```

---

## 10. brand.tsx — The Living Brand Reference

> See accompanying `brand.tsx` file for the full interactive brand reference component.

`brand.tsx` serves as:
- A visual token reference (all colors, fonts, shadows rendered)
- A copy-paste starting point for anyone building with Paper UI
- A living "brand check" — if something looks wrong next to brand.tsx, it's wrong

---

## 11. The Component Checklist

Every new component must pass this before it ships:

```
□ Uses design tokens only (no hardcoded hex values)
□ Has a shadow variant (flat, lift-1, lift-2)
□ Has a border (default 2px solid --color-ink-black)
□ Works on --color-paper-base background
□ Has a hover state
□ Has a disabled state
□ Typography uses system font stack (no new font imports inside component)
□ Has witty default placeholder text
□ Is accessible (aria labels, focus visible)
□ Is responsive (mobile-first)
□ Has a Storybook story (or equivalent demo)
□ Makes at least one person smile when they read the copy
```

---

## 12. Philosophical Footnotes

*Things that don't fit anywhere else but needed to be said.*

**On perfection:** The goal is not pixel-perfect. The goal is *feeling-perfect*. A sticky note that's 3 degrees rotated and has a faint crease texture is more alive than a perfectly-centered frosted glass card.

**On dark mode:** Paper UI does not have a dark mode. Paper is not dark. If you want a dark mode, put the paper on a dark desk — that's a separate theme (`--theme-night-desk`), not an inversion.

**On accessibility:** The handwritten aesthetic should never compromise readability. Caveat at 12px is a crime. Minimum 16px for any Caveat usage. Test with a screenreader. The paper can be fancy; it still needs to be readable.

**On scope creep:** When in doubt, don't add the component. A sharp library of 40 excellent components beats a bloated library of 120 mediocre ones. Quality over quantity. The library should feel *curated*, like someone's favorite bookshelf.

**On the name:** Paper UI. Simple. It says what it is. Like a good headline.

---

*Last updated: March 2026 — with a cup of coffee and mild regrets about not starting this sooner.*

*"The best time to build a design system was five years ago. The second best time is right now, apparently."*
