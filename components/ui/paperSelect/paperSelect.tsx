import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PaperSelectOption {
  label: string
  value: string
  disabled?: boolean
}

export interface PaperSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string
  options: PaperSelectOption[]
  hint?: string
}

const PaperSelect = React.forwardRef<HTMLSelectElement, PaperSelectProps>(
  ({ className, label, options, hint, ...props }, ref) => {
    return (
      <label className="grid gap-1.5">
        {label ? <span className="font-mono text-xs uppercase tracking-wider text-ink-light">{label}</span> : null}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              'w-full appearance-none rounded-none border-0 border-b-2 border-ink-black bg-paper-cream py-2.5 pr-8',
              'font-body text-sm text-ink-dark placeholder:text-ink-faint transition-all duration-150 ease-paper',
              'focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-[0_2px_0_0_#F2C94C]',
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink-black">⌄</span>
        </div>
        {hint ? <span className="font-body text-xs italic text-ink-light">{hint}</span> : null}
      </label>
    )
  }
)

PaperSelect.displayName = 'PaperSelect'

export { PaperSelect }
