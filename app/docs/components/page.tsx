import Link from 'next/link'
import { registry } from '@/registry'
import type { ComponentCategory, ComponentStatus } from '@/types'

const CATEGORY_ORDER: ComponentCategory[] = [
  'primitives',
  'forms',
  'navigation',
  'feedback',
  'data-display',
  'layout',
  'overlays',
  'marketing',
  'templates',
]

const STATUS_STYLES: Record<ComponentStatus, string> = {
  stable: 'border-accent-green/40 text-accent-green',
  beta: 'border-accent-yellow/40 text-accent-yellow',
  wip: 'border-ink-faint/40 text-ink-faint',
}

function categoryTitle(category: string) {
  return category
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export default function ComponentsPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-light">
          Docs / Components
        </p>
        <h1 className="font-display text-5xl text-ink-black underline decoration-ink-black underline-offset-4">
          Component Gallery
        </h1>
        <p className="font-body text-base text-ink-medium">
          Every component ships with metadata, so navigation, filtering, and status stay in sync.
        </p>
      </header>

      {CATEGORY_ORDER.map((category) => {
        const items = registry.filter((component) => component.category === category)
        if (!items.length) {
          return null
        }

        return (
          <section key={category} className="space-y-4">
            <h2 className="font-display text-2xl font-bold uppercase text-ink-dark">
              {categoryTitle(category)}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((component) => (
                <Link
                  key={component.slug}
                  href={`/docs/components/${component.slug}`}
                  className="block border border-ink-faint bg-paper-light p-4 transition-all hover:border-ink-black hover:shadow-lift-1"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="font-body text-sm font-semibold text-ink-black">{component.name}</h3>
                    <span
                      className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
                        STATUS_STYLES[component.status]
                      }`}
                    >
                      {component.status}
                    </span>
                  </div>
                  <p className="font-body text-xs text-ink-light">{component.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
