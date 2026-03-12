'use client'

import * as React from 'react'

export interface PaperDialogProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
  trigger?: React.ReactNode
}

const PaperDialog = React.forwardRef<HTMLDivElement, PaperDialogProps>(
  ({ open, defaultOpen = false, onOpenChange, title, subtitle, children, footer, trigger }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
    const isControlled = open !== undefined
    const isOpen = isControlled ? open : internalOpen

    const setOpen = (value: boolean) => {
      if (!isControlled) {
        setInternalOpen(value)
      }
      onOpenChange?.(value)
    }

    return (
      <>
        {trigger ? <span onClick={() => setOpen(true)}>{trigger}</span> : null}
        {isOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(26,18,9,0.6)] p-4">
            <div ref={ref} className="relative w-full max-w-[480px] border-2 border-ink-black bg-paper-base p-8 shadow-lift-4">
              <span className="pointer-events-none absolute right-4 top-2 select-none font-display text-6xl text-ink-faint opacity-10">
                §
              </span>
              <button
                type="button"
                className="absolute right-4 top-4 text-xl text-ink-light hover:text-ink-black"
                onClick={() => setOpen(false)}
                aria-label="Close dialog"
              >
                ×
              </button>
              <header className="mb-4 border-b border-ink-faint pb-4">
                <h3 className="font-display text-2xl text-ink-black">{title}</h3>
                {subtitle ? <p className="mt-1 font-body text-sm text-ink-medium">{subtitle}</p> : null}
              </header>
              <div className="font-body text-base leading-7 text-ink-medium">{children}</div>
              {footer ? <footer className="mt-4 border-t border-ink-faint pt-4">{footer}</footer> : null}
            </div>
          </div>
        ) : null}
      </>
    )
  }
)

PaperDialog.displayName = 'PaperDialog'

export { PaperDialog }
