import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t-4 border-ink-black bg-paper-light">
      <div className="w-full px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <Link href="/" className="font-display text-3xl leading-none">
            Paperflow UI
          </Link>
          <p className="font-handwritten text-sm italic text-ink-medium">
            Made with ☕ and mild sleep deprivation.
          </p>
          <div className="flex flex-wrap items-center gap-3 font-body text-xs text-ink-faint">
            <span>© {new Date().getFullYear()} Paperflow UI.</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-ink-dark"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
