import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/docs/get-started', label: 'Docs' },
  { href: '/docs/components', label: 'Components' },
  { href: '/docs/tokens', label: 'Tokens' },
  { href: '/docs/templates', label: 'Templates' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-ink-black bg-paper-base/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-display text-2xl leading-none">
          Paperflow UI
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm text-ink-dark transition-colors hover:border-b hover:border-ink-black hover:text-ink-black"
            >
              {item.label}
            </Link>
          ))}
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
