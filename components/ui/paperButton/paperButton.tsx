'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperButtonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap border border-ink-black',
    'font-body font-semibold leading-none transition-all duration-150 ease-paper',
    'hover:-translate-x-px hover:-translate-y-px active:translate-x-0 active:translate-y-0',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-paper-base',
    'disabled:pointer-events-none disabled:opacity-40',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-ink-black text-paper-base shadow-accent hover:shadow-[5px_5px_0px_var(--color-accent-yellow)]',
        secondary: 'bg-paper-base text-ink-black shadow-lift-1 hover:shadow-lift-2',
        ghost:
          'border-transparent bg-transparent text-ink-dark underline underline-offset-4 shadow-none hover:text-ink-black hover:bg-paper-light',
        danger: 'bg-highlight-red text-paper-base shadow-lift-1 hover:shadow-lift-2',
        outline: 'bg-transparent text-ink-black shadow-none hover:bg-paper-aged',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
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

const LoadingDots = () => (
  <span className="inline-flex items-center gap-1" aria-hidden="true">
    <span className="h-1 w-1 rounded-full bg-current animate-bounce" />
    <span className="h-1 w-1 rounded-full bg-current animate-bounce [animation-delay:120ms]" />
    <span className="h-1 w-1 rounded-full bg-current animate-bounce [animation-delay:240ms]" />
  </span>
)

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
