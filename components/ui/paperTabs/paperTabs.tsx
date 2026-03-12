'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PaperTabItem {
  value: string
  label: string
  content: React.ReactNode
}

export interface PaperTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: PaperTabItem[]
  defaultValue?: string
}

const PaperTabs = React.forwardRef<HTMLDivElement, PaperTabsProps>(
  ({ items, defaultValue, className, ...props }, ref) => {
    const [active, setActive] = React.useState(defaultValue ?? items[0]?.value)

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div className="flex border-b-2 border-ink-black bg-paper-aged">
          {items.map((item) => {
            const selected = item.value === active
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setActive(item.value)}
                className={cn(
                  'px-4 py-2.5 font-body text-sm font-medium transition-colors',
                  selected
                    ? 'border-b-[3px] border-ink-black bg-paper-base text-ink-black -mb-[2px]'
                    : 'text-ink-light hover:bg-paper-base/50 hover:text-ink-dark'
                )}
              >
                {item.label}
              </button>
            )
          })}
        </div>
        <div className="border-2 border-t-0 border-ink-black bg-paper-base p-6 font-body text-sm text-ink-medium">
          {items.find((item) => item.value === active)?.content}
        </div>
      </div>
    )
  }
)

PaperTabs.displayName = 'PaperTabs'

export { PaperTabs }
