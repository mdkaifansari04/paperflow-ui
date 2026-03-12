import { cn } from '@/lib/utils'
import { colors, fonts, motion, shadows } from '@/lib/tokens'

type ColorGroup = keyof typeof colors

const COLOR_GROUP_LABELS: Record<ColorGroup, string> = {
  paper: 'Paper Surfaces',
  ink: 'Ink Scale',
  accent: 'Accent Colors',
}

const FONT_PREVIEW = [
  {
    key: 'display',
    title: 'Display',
    className: 'font-display text-3xl',
    sample: 'Paper headings should feel printed and deliberate.',
  },
  {
    key: 'body',
    title: 'Body',
    className: 'font-body text-base',
    sample: 'Body copy stays calm, readable, and editorial.',
  },
  {
    key: 'mono',
    title: 'Mono',
    className: 'font-mono text-sm',
    sample: 'TOKEN_LABEL v1.2.0 STATUS: STABLE',
  },
  {
    key: 'handwritten',
    title: 'Handwritten',
    className: 'font-handwritten text-2xl italic',
    sample: '↗ leave room for human notes.',
  },
] as const

function getContrastTextClass(hex: string) {
  const normalized = hex.replace('#', '')
  const value =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6 ? 'text-ink-black' : 'text-paper-base'
}

export default function TokensPage() {
  return (
    <article className="min-w-0 max-w-full space-y-10">
      <header className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-light">Docs / Tokens</p>
        <h1 className="font-display text-5xl text-ink-black underline decoration-ink-black underline-offset-4">
          Design Tokens
        </h1>
        <p className="font-body text-base text-ink-medium">
          Real swatches, real values. No mystery hex codes hiding in components.
        </p>
        <p className="inline-block -rotate-1 font-handwritten text-base italic text-ink-medium">
          ↗ if it ships, it should exist here.
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
          Colors
        </h2>
        <div className="space-y-6">
          {Object.entries(colors).map(([group, values]) => (
            <section key={group} className="space-y-3">
              <div className="flex items-center justify-between border-b border-ink-faint pb-2">
                <h3 className="font-display text-xl text-ink-dark">{COLOR_GROUP_LABELS[group as ColorGroup]}</h3>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-light">{group}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Object.entries(values).map(([name, hex]) => (
                  <article key={name} className="overflow-hidden border-2 border-ink-black bg-paper-light">
                    <div
                      className={cn(
                        'flex h-24 items-end justify-between border-b border-ink-black p-3',
                        getContrastTextClass(hex)
                      )}
                      style={{ backgroundColor: hex }}
                    >
                      <span className="font-mono text-xs uppercase tracking-wide">{name}</span>
                      <span className="font-mono text-xs">{hex}</span>
                    </div>
                    <div className="space-y-2 p-3">
                      <p className="font-body text-sm text-ink-dark">
                        <span className="font-mono text-xs text-ink-light">{group}.</span>
                        {name}
                      </p>
                      <code className="inline-flex border border-ink-faint bg-paper-aged px-2 py-1 font-mono text-xs text-ink-medium">
                        {`--color-${group}-${name}`}
                      </code>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
          Shadows
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(shadows).map(([name, value]) => (
            <article key={name} className="space-y-3 border-2 border-ink-black bg-paper-light p-4">
              <div className="bg-paper-base p-4">
                <div className="h-14 border-2 border-ink-black bg-paper-cream" style={{ boxShadow: value }} />
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-light">{name}</p>
                <code className="block overflow-x-auto border border-ink-faint bg-paper-aged px-2 py-1 font-mono text-xs text-ink-medium">
                  {value}
                </code>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 border-2 border-ink-black bg-paper-light p-5">
          <h2 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
            Typography
          </h2>
          <div className="space-y-4">
            {FONT_PREVIEW.map((font) => (
              <article key={font.key} className="border border-ink-faint bg-paper-base p-3">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-light">{font.title}</p>
                <p className={cn('mt-2 text-ink-dark', font.className)}>{font.sample}</p>
                <code className="mt-2 inline-flex border border-ink-faint bg-paper-aged px-2 py-1 font-mono text-xs text-ink-medium">
                  {fonts[font.key]}
                </code>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-2 border-ink-black bg-paper-light p-5">
          <h2 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
            Motion
          </h2>
          <div className="space-y-3">
            {Object.entries(motion.duration).map(([name, value]) => (
              <div key={name} className="flex items-center justify-between border border-ink-faint bg-paper-base px-3 py-2">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-light">duration.{name}</span>
                <code className="font-mono text-xs text-ink-dark">{value}</code>
              </div>
            ))}
            {Object.entries(motion.easing).map(([name, value]) => (
              <div key={name} className="space-y-2 border border-ink-faint bg-paper-base p-3">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-light">easing.{name}</p>
                <code className="block overflow-x-auto border border-ink-faint bg-paper-aged px-2 py-1 font-mono text-xs text-ink-medium">
                  {value}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
