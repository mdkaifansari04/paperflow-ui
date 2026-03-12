'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
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

const STATUS_BADGE_STYLES: Record<ComponentStatus, string> = {
  stable: 'text-accent-green border-accent-green/40',
  beta: 'text-accent-yellow border-accent-yellow/40',
  wip: 'text-ink-faint border-ink-faint/40',
}

function titleize(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-56 overflow-y-auto px-4 py-6">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-light">
        Component Index
      </p>

      <div className="space-y-6">
        {CATEGORY_ORDER.map((category) => {
          const items = registry.filter((component) => component.category === category)
          if (items.length === 0) {
            return null
          }

          return (
            <section key={category} className="space-y-2">
              <h3 className="font-display text-sm font-bold uppercase text-ink-dark">
                {titleize(category)}
              </h3>
              <ul className="space-y-1.5">
                {items.map((component) => {
                  const href = `/docs/components/${component.slug}`
                  const isActive = pathname === href

                  return (
                    <li key={component.slug}>
                      <Link
                        href={href}
                        className={cn(
                          'inline-flex items-center gap-2 border-l-2 border-transparent pl-2 font-body text-xs text-ink-medium transition-colors hover:text-ink-black',
                          isActive && 'border-accent-yellow text-ink-black'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span>{component.name}</span>
                        {component.status !== 'stable' ? (
                          <span
                            className={`rounded-full border px-1.5 py-0.5 font-mono text-[10px] uppercase ${
                              STATUS_BADGE_STYLES[component.status]
                            }`}
                          >
                            {component.status}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </aside>
  )
}
