'use client'

/**
 * paperButton.tsx
 *
 * Part of Paperflow UI — Paper Design System
 * https://paperflow.dev/docs/components/paper-button
 *
 * Copy this entire file to: components/ui/paperButton/paperButton.tsx
 */

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperButtonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none',
    'font-body font-medium border-2 border-ink-black',
    'transition-all duration-150 ease-paper',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-paper-base',
    'disabled:pointer-events-none disabled:opacity-40',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-ink-black text-paper-base shadow-accent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#F2C94C] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#F2C94C]',
        secondary:
          'bg-paper-base text-ink-black shadow-lift-1 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lift-2 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#1A1209]',
        outline:
          'bg-transparent text-ink-black shadow-none hover:bg-paper-aged hover:shadow-soft active:translate-x-0 active:translate-y-0',
        ghost:
          'border-transparent bg-transparent text-ink-black underline underline-offset-4 shadow-none hover:text-ink-medium active:translate-x-0 active:translate-y-0',
        danger:
          'bg-accent-red text-paper-light shadow-lift-1 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lift-2 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#1A1209]',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-7 py-3.5 text-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface PaperButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paperButtonVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isLoading?: boolean
  fullWidth?: boolean
}

function LoadingDots() {
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="h-1 w-1 animate-bounce rounded-full bg-current"
          style={{ animationDelay: `${dot * 150}ms` }}
        />
      ))}
    </span>
  )
}

const PaperButton = React.forwardRef<HTMLButtonElement, PaperButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading

    return (
      <button
        ref={ref}
        type="button"
        className={cn(paperButtonVariants({ variant, size }), fullWidth && 'w-full', className)}
        disabled={isDisabled}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingDots />
            <span>Loading</span>
          </>
        ) : (
          <>
            {leftIcon ? <span className="inline-flex items-center">{leftIcon}</span> : null}
            <span>{children}</span>
            {rightIcon ? <span className="inline-flex items-center">{rightIcon}</span> : null}
          </>
        )}
      </button>
    )
  }
)

PaperButton.displayName = 'PaperButton'

export { PaperButton, paperButtonVariants }
