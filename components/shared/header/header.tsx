'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { href: '/docs/get-started', label: 'Docs' },
  { href: '/docs/components', label: 'Components' },
  { href: '/docs/tokens', label: 'Tokens' },
  { href: '/docs/templates', label: 'Templates' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-ink-black bg-paper-base/90 backdrop-blur-sm">
      <div className="flex h-full w-full items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="font-display text-2xl leading-none">
          Paperflow UI
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'border-b border-transparent font-body text-sm text-ink-dark transition-colors',
                  'hover:border-ink-black hover:text-ink-black',
                  isActive && 'border-ink-black text-ink-black'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs uppercase tracking-wide text-ink-dark hover:text-ink-black"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
