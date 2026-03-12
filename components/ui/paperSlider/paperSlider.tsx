import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PaperSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const PaperSlider = React.forwardRef<HTMLInputElement, PaperSliderProps>(
  ({ className, label, min = 0, max = 100, ...props }, ref) => {
    return (
      <label className="grid gap-2">
        {label ? <span className="font-mono text-xs uppercase tracking-wider text-ink-light">{label}</span> : null}
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          className={cn('h-2 w-full cursor-pointer appearance-none border-2 border-ink-black bg-paper-aged', className)}
          {...props}
        />
      </label>
    )
  }
)

PaperSlider.displayName = 'PaperSlider'

export { PaperSlider }
