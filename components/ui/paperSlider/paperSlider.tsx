'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PaperSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const PaperSlider = React.forwardRef<HTMLInputElement, PaperSliderProps>(
  ({ className, label, min = 0, max = 100, value, defaultValue, onChange, disabled, step = 1, ...props }, ref) => {
    const minValue = Number(min)
    const maxValue = Number(max)
    const initialValue =
      typeof defaultValue === 'number' || typeof defaultValue === 'string'
        ? Number(defaultValue)
        : minValue

    const [internalValue, setInternalValue] = React.useState(initialValue)
    const isControlled = typeof value === 'number' || typeof value === 'string'
    const currentValue = isControlled ? Number(value) : internalValue
    const clamped = Number.isFinite(currentValue)
      ? Math.min(maxValue, Math.max(minValue, currentValue))
      : minValue
    const percentage =
      maxValue === minValue ? 0 : ((clamped - minValue) / (maxValue - minValue)) * 100

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(Number(event.target.value))
      }
      onChange?.(event)
    }

    return (
      <label className="grid gap-2">
        {label ? (
          <span className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-light">{label}</span>
            <span className="font-mono text-xs uppercase tracking-wider text-ink-medium">{Math.round(clamped)}%</span>
          </span>
        ) : null}
        <span
          className={cn(
            'relative block h-2 w-full overflow-visible rounded-none border-2 border-ink-black bg-paper-aged',
            disabled && 'opacity-50'
          )}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 bg-ink-black"
            style={{ width: `${percentage}%` }}
          />
          <input
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            disabled={disabled}
            className={cn(
              'absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-paper-base',
              '[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-transparent',
              '[&::-webkit-slider-thumb]:mt-[-6px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5',
              '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-none',
              '[&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-accent-yellow [&::-webkit-slider-thumb]:bg-ink-black',
              '[&::-webkit-slider-thumb]:shadow-accent [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150',
              'hover:[&::-webkit-slider-thumb]:-translate-x-0.5 hover:[&::-webkit-slider-thumb]:-translate-y-0.5',
              'active:[&::-webkit-slider-thumb]:translate-x-0 active:[&::-webkit-slider-thumb]:translate-y-0 active:[&::-webkit-slider-thumb]:shadow-[2px_2px_0px_#F2C94C]',
              '[&::-moz-range-track]:h-2 [&::-moz-range-track]:border-0 [&::-moz-range-track]:bg-transparent',
              '[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-none',
              '[&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-accent-yellow [&::-moz-range-thumb]:bg-ink-black',
              '[&::-moz-range-thumb]:shadow-accent',
              className
            )}
            {...props}
          />
        </span>
      </label>
    )
  }
)

PaperSlider.displayName = 'PaperSlider'

export { PaperSlider }
