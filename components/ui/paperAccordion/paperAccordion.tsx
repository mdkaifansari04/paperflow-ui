'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PaperAccordionItem {
  value: string
  title: string
  content: React.ReactNode
}

export interface PaperAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: PaperAccordionItem[]
  defaultValue?: string
}

const PaperAccordion = React.forwardRef<HTMLDivElement, PaperAccordionProps>(
  ({ items, defaultValue, className, ...props }, ref) => {
    const [openItem, setOpenItem] = React.useState(defaultValue ?? items[0]?.value)

    return (
      <div ref={ref} className={cn('divide-y divide-ink-faint', className)} {...props}>
        {items.map((item, index) => {
          const open = item.value === openItem

          return (
            <section key={item.value} className={cn(index === items.length - 1 && 'border-b-2 border-ink-black')}>
              <button
                type="button"
                onClick={() => setOpenItem((current) => (current === item.value ? '' : item.value))}
                className={cn(
                  'flex w-full items-center justify-between py-4 text-left font-body text-ink-dark',
                  open && 'border-l-[3px] border-l-accent-yellow pl-3',
                  'hover:text-ink-black'
                )}
              >
                <span className="font-body font-medium">{item.title}</span>
                <span className={cn('text-ink-medium transition-transform duration-200', open && 'rotate-180')}>⌄</span>
              </button>
              <div className={cn('grid transition-all duration-200', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                <div className="overflow-hidden pb-4 font-body text-sm leading-7 text-ink-medium">{item.content}</div>
              </div>
            </section>
          )
        })}
      </div>
    )
  }
)

PaperAccordion.displayName = 'PaperAccordion'

export { PaperAccordion }
