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
    const tooltipId = React.useId()

    return (
      <span
        ref={ref}
        className={cn('relative inline-flex', className)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false)
          }
        }}
      >
        <span aria-describedby={tooltipId}>{children}</span>
        <span
          id={tooltipId}
          role="tooltip"
          aria-hidden={!open}
          className={cn(
            'pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-[260px] -translate-x-1/2',
            'transition-all duration-150 ease-paper',
            open ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
          )}
        >
          <span className="relative block border-2 border-ink-faint bg-ink-black px-3 py-2 font-mono text-xs tracking-[0.02em] text-paper-base shadow-lift-2">
            <span className="block leading-relaxed">{content}</span>
            <span className="absolute -top-[7px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-ink-faint bg-ink-black" />
            <span className="pointer-events-none absolute inset-0 border border-paper-base/10" />
          </span>
        </span>
      </span>
    )
  }
)

PaperTooltip.displayName = 'PaperTooltip'

export { PaperTooltip }
