import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PaperCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  hint?: string
}

const PaperCheckbox = React.forwardRef<HTMLInputElement, PaperCheckboxProps>(
  ({ className, label, hint, id, ...props }, ref) => {
    const fallbackId = React.useId()
    const inputId = id ?? fallbackId

    return (
      <label htmlFor={inputId} className="flex items-start gap-2.5">
        <span className="relative mt-0.5 inline-flex h-4 w-4 items-center justify-center">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            className={cn(
              'peer h-4 w-4 appearance-none rounded-none border-2 border-ink-black bg-paper-cream',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-paper-base',
              'checked:bg-ink-black checked:after:absolute checked:after:text-paper-base checked:after:content-["✓"]',
              className
            )}
            {...props}
          />
        </span>
        {(label || hint) && (
          <span className="grid gap-0.5">
            {label ? <span className="font-body text-sm text-ink-dark">{label}</span> : null}
            {hint ? <span className="font-body text-xs italic text-ink-light">{hint}</span> : null}
          </span>
        )}
      </label>
    )
  }
)

PaperCheckbox.displayName = 'PaperCheckbox'

export { PaperCheckbox }
