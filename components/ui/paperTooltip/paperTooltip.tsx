'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PaperTooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  className?: string
}

const PaperTooltip = React.forwardRef<HTMLSpanElement, PaperTooltipProps>(
  ({ content, children, className }, ref) => {
    const [open, setOpen] = React.useState(false)

    return (
      <span
        ref={ref}
        className={cn('relative inline-flex', className)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {children}
        {open ? (
          <span className="absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2">
            <span className="relative block border border-ink-faint bg-ink-black px-3 py-1.5 font-mono text-xs text-paper-base shadow-lift-2">
              {content}
              <span className="absolute -top-[6px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-ink-faint bg-ink-black" />
            </span>
          </span>
        ) : null}
      </span>
    )
  }
)

PaperTooltip.displayName = 'PaperTooltip'

export { PaperTooltip }
