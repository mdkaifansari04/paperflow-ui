import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperInputVariants = cva(
  [
    'w-full rounded-none border-0 border-b-2 border-ink-black px-0 py-2.5',
    'bg-paper-cream font-body text-base text-ink-dark placeholder:text-ink-faint',
    'transition-all duration-150 ease-paper',
    'focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-[0_2px_0_0_#F2C94C]',
    'disabled:pointer-events-none disabled:opacity-40',
  ],
  {
    variants: {
      variant: {
        default: '',
        filled: 'bg-paper-aged',
        bordered: 'rounded-none border-2 px-3 py-2.5',
      },
      hasError: {
        true: 'border-accent-red shadow-[0_2px_0_0_#E05A4D]',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      hasError: false,
    },
  }
)

export interface PaperInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof paperInputVariants> {}

const PaperInput = React.forwardRef<HTMLInputElement, PaperInputProps>(
  ({ className, variant, hasError, ...props }, ref) => (
    <input ref={ref} className={cn(paperInputVariants({ variant, hasError }), className)} {...props} />
  )
)

interface PaperFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}

const PaperField = React.forwardRef<HTMLDivElement, PaperFieldProps>(
  ({ label, hint, error, children, className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-1.5', className)} {...props}>
      <label className="block font-mono text-xs uppercase tracking-wider text-ink-light">{label}</label>
      {children}
      {error ? (
        <p className="font-body text-xs text-accent-red">{error}</p>
      ) : hint ? (
        <p className="font-body text-xs italic text-ink-light">{hint}</p>
      ) : null}
    </div>
  )
)

PaperInput.displayName = 'PaperInput'
PaperField.displayName = 'PaperField'

export { PaperInput, PaperField, paperInputVariants }
