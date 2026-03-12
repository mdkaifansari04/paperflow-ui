import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface PaperBreadcrumbItem {
  label: string
  href?: string
}

export interface PaperBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: PaperBreadcrumbItem[]
}

const PaperBreadcrumb = React.forwardRef<HTMLElement, PaperBreadcrumbProps>(
  ({ items, className, ...props }, ref) => (
    <nav ref={ref} aria-label="Breadcrumb" className={cn('font-body text-sm', className)} {...props}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-ink-light underline hover:text-ink-dark">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast ? 'font-medium text-ink-black' : 'text-ink-light')}>
                  {item.label}
                </span>
              )}
              {!isLast ? <span className="font-mono text-ink-faint">/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
)

PaperBreadcrumb.displayName = 'PaperBreadcrumb'

export { PaperBreadcrumb }
