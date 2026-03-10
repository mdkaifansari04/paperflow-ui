# Paperflow UI Brand Guide (v1)

## Big Idea
Paperflow UI is a copy-paste component library with a warm editorial feel.
The system should look crafted, readable, and human. Interfaces should feel like paper and ink,
not polished SaaS chrome.

## Typography System (from brand.tsx)
```
TYPOGRAPHY SYSTEM (from brand.tsx)
────────────────────────────────────
Display font:    'DM Serif Display', Georgia, serif   → hero headlines, section titles, card headings
Body font:       'Lora', Georgia, serif               → paragraphs, descriptions, body copy, buttons
Mono font:       'JetBrains Mono', monospace          → labels, badges, code, timestamps, categories
Handwritten:     'Caveat', cursive                    → annotations, sticky notes, humor asides

CSS variables:
  --font-display:     'DM Serif Display', Georgia, serif
  --font-body:        'Lora', Georgia, serif
  --font-mono:        'JetBrains Mono', monospace
  --font-handwritten: 'Caveat', cursive

Google Fonts import:
  DM Serif Display (ital 0,1)
  Lora (400, 500, italic)
  JetBrains Mono (400, 500)
  Caveat (400, 600)
```

## Color Tokens

### Paper surfaces
- `--color-paper-base: #F5F0E8`
- `--color-paper-light: #FAF8F3`
- `--color-paper-aged: #EDE4D0`
- `--color-paper-cream: #FFF9F0`

### Ink scale
- `--color-ink-black: #1A1209`
- `--color-ink-dark: #2C2416`
- `--color-ink-medium: #5C4F3A`
- `--color-ink-light: #9B8E7A`
- `--color-ink-faint: #C8BFB0`

### Accents
- `--color-accent-yellow: #F2C94C`
- `--color-accent-red: #E05A4D`
- `--color-accent-green: #4CAF7D`
- `--color-accent-blue: #4A90D9`
- `--color-accent-orange: #E8833A`

### Sketch fills
- `--color-sketch-stroke: #2C2416`
- `--color-sketch-fill-1: #F2C94C`
- `--color-sketch-fill-2: #E8D5B7`
- `--color-sketch-fill-3: #A8D5A2`
- `--color-sketch-fill-4: #F4A57A`

## Shadow System
- `lift-1: 3px 3px 0px #1A1209`
- `lift-2: 5px 5px 0px #1A1209`
- `lift-3: 8px 8px 0px #1A1209`
- `lift-4: 12px 12px 0px #1A1209`
- `accent: 4px 4px 0px #F2C94C`
- Hard-offset only. No blur.

## Design DOs
- Use `DM Serif Display` for headlines and section headings.
- Use `Lora` for body copy and buttons.
- Use `JetBrains Mono` for labels, badges, and mono elements.
- Use `Caveat` for annotations and handwritten asides only.
- Keep paper-like warmth through tokenized backgrounds and ink-forward text contrast.
- Keep borders clear and intentional (`1px`, `2px`, `4px` depending on emphasis).
- Prefer readable, left-aligned editorial body copy.
- Use only one accent color focus per section.

## Design DON'Ts
- No glassmorphism.
- No blurred shadows.
- No hardcoded colors in components.
- No body paragraph center alignment.
- No decorative style that hurts readability.
- Don't use more than 4 font families in the project.
- Don't use `Caveat` for anything structural (headings, buttons, nav).
- Don't import fonts that aren't in the 4-font stack above.

## Component Checklist
- Component code is clean and copy-paste ready.
- Variants are explicit and typed.
- Border, shadow, and spacing values use tokens.
- Typography classes follow the 4-font system.
- States are present: default, hover, active, focus-visible, disabled.
- No hidden dependencies or magic wrappers.
- Docs metadata exists and is wired into the registry.

## Adding a New Component
1. Create `components/ui/yourComponentName/`.
2. Add `yourComponentName.tsx` with typed props and `React.forwardRef`.
3. Add `yourComponentName.docs.ts` with `ComponentMeta`.
4. Add `index.ts` barrel in that component folder.
5. Export from `components/ui/index.ts` and register metadata in `registry/index.ts`.

## Naming Conventions
- Component files: camelCase (`paperButton.tsx`)
- Component folders: camelCase (`paperButton/`)
- Component names: PascalCase (`PaperButton`)
- Hook files: camelCase with `use` prefix (`useHover.ts`)
- CSS classes: kebab-case
- Shared type exports: `types/index.ts`

## Philosophical Footnotes
- If it needs explanation, simplify the component.
- Prefer clarity over novelty.
- Keep the paper metaphor subtle; readability comes first.
- Honest shadows and intentional typography are non-negotiable.
