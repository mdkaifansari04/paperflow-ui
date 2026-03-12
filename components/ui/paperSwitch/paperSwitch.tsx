'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PaperSwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  label?: string
}

const PaperSwitch = React.forwardRef<HTMLButtonElement, PaperSwitchProps>(
  ({ checked, defaultChecked = false, onCheckedChange, className, label, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked)
    const isControlled = checked !== undefined
    const isChecked = isControlled ? checked : internalChecked

    const toggle = () => {
      const next = !isChecked
      if (!isControlled) {
        setInternalChecked(next)
      }
      onCheckedChange?.(next)
    }

    return (
      <label className="inline-flex items-center gap-2.5">
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={isChecked}
          onClick={toggle}
          className={cn(
            'relative h-6 w-11 rounded-none border-2 border-ink-black transition-colors duration-150 ease-bounce',
            isChecked ? 'bg-ink-black' : 'bg-paper-aged',
            className
          )}
          {...props}
        >
          <span
            className={cn(
              'absolute left-0.5 top-0.5 h-4 w-4 border border-ink-black transition-all duration-200 ease-bounce',
              isChecked ? 'translate-x-5 bg-accent-yellow' : 'translate-x-0 bg-paper-base'
            )}
          />
        </button>
        {label ? <span className="font-body text-sm text-ink-dark">{label}</span> : null}
      </label>
    )
  }
)

PaperSwitch.displayName = 'PaperSwitch'

export { PaperSwitch }
