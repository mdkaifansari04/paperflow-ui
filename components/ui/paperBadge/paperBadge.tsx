import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperBadgeVariants = cva(
  'inline-flex items-center rounded-sm border border-ink-black px-2.5 py-0.5 font-mono text-xs uppercase tracking-[0.04em]',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-ink-black',
        solid: 'bg-ink-black text-paper-base',
        yellow: 'bg-accent-yellow text-ink-black',
        red: 'bg-accent-red text-paper-light',
        green: 'bg-accent-green text-ink-black',
        blue: 'bg-accent-blue text-paper-light',
        orange: 'bg-accent-orange text-ink-black',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface PaperBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof paperBadgeVariants> {}

const PaperBadge = React.forwardRef<HTMLSpanElement, PaperBadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(paperBadgeVariants({ variant }), className)} {...props} />
  )
)

PaperBadge.displayName = 'PaperBadge'

export { PaperBadge, paperBadgeVariants }
