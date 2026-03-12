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
        <input ref={ref} id={inputId} type="checkbox" className="peer sr-only" {...props} />
        <span
          className={cn(
            'mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-none border-2 border-ink-black bg-paper-cream',
            'transition-colors duration-150 ease-paper',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-highlight-yellow peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-paper-base',
            'peer-checked:bg-ink-black',
            className
          )}
          aria-hidden="true"
        >
          <span className="translate-y-[-0.5px] text-[11px] leading-none text-paper-base opacity-0 transition-opacity peer-checked:opacity-100">
            ✓
          </span>
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
