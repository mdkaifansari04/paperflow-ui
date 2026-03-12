# Paperflow UI Brand Guide (v1)

## Big Idea
Paperflow UI is a copy-paste component library with a warm editorial feel.
The system should look crafted, readable, and human.

## Typography System
- `font-display`: 'DM Serif Display', Georgia, serif
- `font-body`: 'Lora', Georgia, serif
- `font-mono`: 'JetBrains Mono', monospace
- `font-handwritten`: 'Caveat', cursive

## Colors
- Paper: `paper-base`, `paper-light`, `paper-aged`, `paper-cream`
- Ink: `ink-black`, `ink-dark`, `ink-medium`, `ink-light`, `ink-faint`
- Accent: `accent-yellow`, `accent-red`, `accent-green`, `accent-blue`, `accent-orange`

## Shadows
- `shadow-lift-1`, `shadow-lift-2`, `shadow-lift-3`, `shadow-lift-4`, `shadow-accent`
- Hard offsets only. No blur.

## Design DOs
- Use display for headlines and section titles.
- Use body for copy and buttons.
- Use mono for labels and metadata.
- Use handwritten only for small annotations.

## Design DON'Ts
- No gradients or glassmorphism.
- No blurred shadows.
- No extra font families beyond the 4-font stack.

## Adding a New Component
1. Create `components/ui/yourComponentName/`.
2. Add `yourComponentName.tsx` with typed props + `React.forwardRef`.
3. Add `yourComponentName.docs.ts` metadata.
4. Add folder `index.ts` barrel.
5. Export from `components/ui/index.ts` and register in `registry/index.ts`.
